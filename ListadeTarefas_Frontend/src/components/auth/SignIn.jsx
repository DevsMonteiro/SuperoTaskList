import './SignIn.css';
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Button, Col, Card, Form } from 'react-bootstrap';
import { signIn, setLogin } from '../../store/actions/authActions';

export class SignIn extends Component {
    state = {
        login: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    handleRegister = (e) => {
        e.preventDefault();
        this.props.setLogin(false);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={9} md={7} lg={5} className="mx-auto">
                        <Card className="card-signin my-5">
                            <Card.Body>
                                <h5 className="card-title text-center">Lista de Tarefas</h5>
                                <Form onSubmit={this.handleSubmit} className="form-signin">
                                    <div className="form-label-group">
                                        <Form.Control type="login" id="login" placeholder="login" required onChange={this.handleChange} />
                                        <Form.Label htmlFor="login">Login</Form.Label>
                                    </div>

                                    <div className="form-label-group">
                                        <Form.Control type="password" id="password" placeholder="Senha" required onChange={this.handleChange} />
                                        <Form.Label htmlFor="password">Senha</Form.Label>
                                    </div>

                                    <Button variant="primary" size="lg" block className="text-uppercase" type="submit">Entrar</Button>
                                    <hr className="my-4" />
                                    
                                    <Button variant="info" size="lg" block className="text-uppercase" type="button" onClick={this.handleRegister}>Cadastre-se</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.auth,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)),
        setLogin: (isSignIn) => dispatch(setLogin(isSignIn))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SignIn)
