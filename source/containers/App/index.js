// Core
import React, { Component } from 'react';

import Feed from 'components/Feed';
import { Provider } from 'components/HOC/withProfile';

import avatar from 'theme/assets/homer';

const options = {
    avatar,
    currentUserFirstName: 'Man',
    currentUserLastName: 'Simpson',
}

export default class App extends Component {
    render () {
        return (
            <Provider value = { options }>
                <Feed />
            </Provider>    
        );
    }
}