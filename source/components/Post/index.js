import React, { Component } from 'react';

import Styles from "./styles.m.css";
import PropTypes from 'prop-types';
import { Consumer } from 'components/HOC/withProfile';

import moment from 'moment';

export default class Post extends Component {
    static propTypes = {
        comment: PropTypes.string.isRequired,
        created: PropTypes.number.isRequired,
    };

    render () {
        const { comment, created} = this.props;

        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.post } >               
                        <img src = { context.avatar } />
                        <a>{`${context.currentUserFirstName} ${context.currentUserLastName}`}</a>                        
                        <time>{moment.unix(created).format('MMMM D, H:mm:ss')}</time>
                        <p>{comment}</p>
                    </section>
                )}    
            </Consumer>                    
        );
    } 
}