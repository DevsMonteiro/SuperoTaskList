import './NavBar.css'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Avatar from 'react-avatar';
import { signOut } from '../../store/actions/authActions';
import AppNavBar from './AppNavBar'

export class NavBar extends Component {

    handleSignOut = () => {
        this.props.signOut();
    }

    renderAvatar() {
        const { auth } = this.props;

        return (<Avatar name={auth.user.Nome} size="40" round={true} />)
    }

    render() {
        const { user, history } = this.props;
        return (
            <AppNavBar user={user} signin={this.handleSignOut} history={history} />
        )
    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))
