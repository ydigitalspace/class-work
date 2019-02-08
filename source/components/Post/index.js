import React, { Component } from 'react';

import Styles from "./styles.m.css";
import { func, string, number, array } from 'prop-types';
import Like from 'components/Like';
import { withProfile } from 'components/HOC/withProfile';

import moment from 'moment';

@withProfile
export default class Post extends Component {
    static propTypes = {
        comment: string.isRequired,
        created: number.isRequired,
        _likePost: func.isRequired,
        id: string.isRequired,
        likes: array.isRequired,
    };

    _deletePost = () => {
        const {id, _deletePost} = this.props;
        
        _deletePost(id);
    }

    render () {
        const { currentUserFirstName, currentUserLastName, avatar, comment, created, _likePost, id, likes} = this.props;

        return (
                <section className = { Styles.post } >               
                    <span className = { Styles.cross } onClick = { this._deletePost } />
                    <img src = { avatar } />
                    <a>{`${currentUserFirstName} ${currentUserLastName}`}</a>                        
                    <time>{moment.utc(created).format('MMMM D Y, H:mm:ss')}</time>
                    <p>{comment}</p>
                    <Like id = { id }  likes = { likes } _likePost = { _likePost } />
                </section>
        );
    } 
}