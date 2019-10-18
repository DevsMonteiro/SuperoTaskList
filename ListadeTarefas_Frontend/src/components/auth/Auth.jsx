import React, { Component } from 'react'
import { connect } from 'react-redux';
import SignUp from './SignUp';
import SignIn from './SignIn';

export class Auth extends Component {
    signInOrSignUp = () => {
        const { isSignIn } = this.props;
        if (isSignIn) {
            return <SignIn />
        } else {
            return <SignUp />
        }
    }

    render() {
        return (
            <>
                {this.signInOrSignUp()}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isSignIn: state.auth.isSignIn
})

export default connect(mapStateToProps)(Auth)
