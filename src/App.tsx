import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainNavigator from './navigation/mainNavigator';
import store from './store';
import { ToastProvider } from 'react-native-toast-notifications';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ToastProvider>
                    <MainNavigator />
                </ToastProvider>
            </Provider>
        );
    }
}
