import React, { Component } from 'react'
import { connect } from 'react-redux';
import App from './App'
import Auth from '../components/auth/Auth';
import { inicializarApi } from '../common/Api/Api';

export class AuthOrApp extends Component {
    constructor() {
        super();
        inicializarApi();
      }


    render() {
        
        const { auth } = this.props;
        if (auth.user) {
            return <App>{this.props.children}</App>
        } else {
            return <Auth />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(AuthOrApp)