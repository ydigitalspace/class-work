import React, { Component } from 'react';
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group';
import { fromTo } from 'gsap';

import { withProfile } from 'components/HOC/withProfile' 
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';
import Postman from 'components/Postman';

import Styles from "./styles.m.css";
import { getUniqueID, delay } from 'instruments';
import { api, TOKEN, GROUP_ID } from 'config/api';
import { socket } from 'socket/init';

@withProfile
export default class Feed extends Component {
    state = {
        posts: [],
        isPostFetching: false, 
    }

    _setPostsFetchingState = (state) => {
        this.setState({
            isPostFetching: state,
        });    
    }
    
    componentDidMount () {
        const { currentUserFirstName, currentUserLastName } = this.props;
        this._fetchPost();
        //this.refetch = setInterval(this._fetchPost, 1000);

        socket.emit('join', GROUP_ID);

        socket.on('create', (postJSON) => {
            const { data: createdPost, meta } = JSON.parse(postJSON);

            if (
                `${currentUserFirstName} ${currentUserLastName}` !==
                `${meta.authorFirstName} ${meta.authorLastName}`
            ){
                this.setState(({ posts }) => ({
                    posts: [createdPost, ...posts],
                }));
            }
        });

        socket.on('remove', (postJSON) => {
            const { data: removedPost, meta } = JSON.parse(postJSON);

            if (
                `${currentUserFirstName} ${currentUserLastName}` !==
                `${meta.authorFirstName} ${meta.authorLastName}`
            ){
                this.setState(({ posts }) => ({
                    posts: posts.filter((post) => post_id !== removedPost.id),
                }));
            }
        });

        socket.on('like', (postJSON) => {
            const { data: likedPost, meta } = JSON.parse(postJSON);

            this.setState(({ posts }) => ({
                posts: posts.map(
                    (post) => post.id === likedPost.id ? likedPost : post,
                ),
            }));

        });        
    }

    componentWillUnmount () {
        socket.removeListener('create');
        socket.removeListener('remove');
        socket.removeListener('like');        
    }

    _fetchPost = async() => {
        this._setPostsFetchingState(true);

        const response = await fetch(api, {
            method: 'GET'
        });

        const { data: posts } = await response.json();

        this.setState({
            posts,
            isPostFetching: false
        });
    }

    _createPost = async (comment) => {
        this._setPostsFetchingState(true);
        
       // console.log(TOKEN);

        const response = await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: TOKEN,
            },
            body: JSON.stringify({ comment }),
        });

        const { data: post } = await response.json();

        this.setState(({ posts }) => ({
            posts: [post,...posts],
            isPostFetching: false,
        }));
    }



    _likePost = async (id) => {
        const { currentUserFirstName, currentUserLastName } = this.props;
        this._setPostsFetchingState(true);

        //await delay(1200);

        const response = await fetch(`${api}/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: TOKEN,
            },
        });

        const { data: likedPost } = await response.json();

        this.setState(({ posts }) => ({
            posts: posts.map(
                (post) => post.id === likedPost.id ? likedPost : post,
            ),
            isPostFetching: false,
        }));

    }


    _deletePost = async (id) => {
        this._setPostsFetchingState(true);

        await fetch(`${api}/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: TOKEN,
            },
        });

        this.setState(({ posts }) => ({
            posts: posts.filter((post) => post.id != id),
            isPostFetching: false,
        })); 

    }    

    _animateComposerEnter = (composer) => {
        fromTo(composer, 2, { opacity: 0}, { opacity: 1});
    }

    _animatePostmanEnter = (postman) => {
        //fromTo(postman, 2, { opacity: 0, x: 600}, { opacity: 1, x: 0, onComplete: () => this._animatePostmanExit(postman)});
        fromTo(postman, 5, { opacity: 0, x: 600}, { opacity: 1, x: 0});
    }

    _animatePostmanExit = (postman) => {
        fromTo(postman, 5, { opacity: 1, x: 0}, { opacity: 0, x: 600});        
    }

    render () {
        const { posts, isPostFetching } = this.state;

        const postsJSX = posts.map((post) => {
            return (
                <CSSTransition 
                    key = { post.id }
                    classNames = {{
                        enter: Styles.postInStart,
                        enterActive: Styles.postInEnd,
                    }}
                    timeout = {{
                        enter: 500,
                        exit: 400,
                    }}>
                    <Post  
                        {...post} 
                        _likePost = {this._likePost } 
                        _deletePost = {this._deletePost } 
                    />
                </CSSTransition>
                
            );
        });


        return (
            <section className = { Styles.feed }>               
                <Spinner isSpinning = { isPostFetching }/>
                <StatusBar  />
                <Transition
                    in
                    appear
                    onEnter = { this._animateComposerEnter }
                    timeout = { 1000 }
                    >
                    <Composer _createPost = { this._createPost } />
                </Transition>
                
                <Transition
                    in
                    appear
                    timeout = { 10000 }
                    onEntering = { this._animatePostmanEnter }
                    onEntered = { this._animatePostmanExit }
                    >
                    <Postman />
                </Transition>
                <TransitionGroup>
                    {postsJSX}
                </TransitionGroup>
            </section>                                        
        );
    } 
}