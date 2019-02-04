import React, { Component } from 'react';

import Styles from "./styles.m.css";
import { func, string, number, array } from 'prop-types';
import Like from 'components/Like';
import { Consumer } from 'components/HOC/withProfile';

import moment from 'moment';

export default class Post extends Component {
    static propTypes = {
        comment: string.isRequired,
        created: number.isRequired,
        _likePost: func.isRequired,
        id: string.isRequired,
        likes: array.isRequired,
    };

    render () {
        const { comment, created, _likePost, id, likes} = this.props;

        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.post } >               
                        <span className = { Styles.cross } />
                        <img src = { context.avatar } />
                        <a>{`${context.currentUserFirstName} ${context.currentUserLastName}`}</a>                        
                        <time>{moment.utc(created).format('MMMM D Y, H:mm:ss')}</time>
                        <p>{comment}</p>
                        <Like id = { id }  likes = { likes } _likePost = { _likePost } { ...context }/>
                    </section>
                )}    
            </Consumer>                    
        );
    } 
}