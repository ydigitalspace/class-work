import React, { Component } from 'react';
import { withProfile } from 'components/HOC/withProfile';
import Styles from "./styles.m.css";

const Postman = (props) => {
    return (
        <section className = { Styles.postman }>
            <img src = { props.avatar } />
            <span> Welcome, online, { props.currentUserFirstName }</span>
        </section>
    );
};

export default withProfile(Postman);