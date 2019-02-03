import React, { Component } from 'react';

import Styles from "./styles.m.css";

import { Consumer } from 'components/HOC/withProfile';

import moment from 'moment';

export default class Post extends Component {
    render () {
        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.post } >               
                        <img src = { context.avatar } />
                        <a>{`${context.currentUserFirstName} ${context.currentUserLastName}`}</a>                        
                        <time>{moment().format('MMMM D Y, H:mm:ss')}</time>
                        <p>Howdy!</p>
                    </section>
                )}    
            </Consumer>                    
        );
    } 
}