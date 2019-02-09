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

    _getCross = () => {
        const { firstName, lastName, currentUserFirstName, currentUserLastName } = this.props;

        return `${firstName} ${lastName}` === `${currentUserFirstName} ${currentUserLastName}`
            ? <span className = { Styles.cross } onClick = { this._deletePost } /> 
            : null;
    }

    _deletePost = () => {
        const {id, _deletePost} = this.props;
        
        _deletePost(id);
    }

    render () {
        const { firstName, lastName, avatar, comment, created, _likePost, id, likes} = this.props;

        //throw new Error();

        const cross = this._getCross();

        return (
                <section className = { Styles.post } >               
                   {cross}
                    <img src = { avatar } />
                    <a>{`${firstName} ${lastName}`}</a>                        
                    <time>{moment.unix(created).format('MMMM D Y, H:mm:ss')}</time>
                    <p>{comment}</p>
                    <Like id = { id }  likes = { likes } _likePost = { _likePost } />
                </section>
        );
    } 
}