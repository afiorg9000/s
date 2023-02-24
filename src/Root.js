import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './Navigation';
import store from './store';

const Root = () => {
    return ( <
        Provider store = { store } >
        <
        Navigation / >
        <
        /Provider>
    );
};

export default Root;