import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Store from './src/redux/store/configstore';
import App from './App';
const store = Store
const MainPage = props => {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

MainPage.propTypes = {

};

export default MainPage;