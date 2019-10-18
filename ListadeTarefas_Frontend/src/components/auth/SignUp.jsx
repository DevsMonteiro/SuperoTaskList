import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Button, Col, Card, Form } from 'react-bootstrap';
import { signUp, setLogin } from '../../store/actions/authActions';

export class SignUp extends Component {
    state = {
        name: '',
        email: '',
        emailConfirm: '',
        password: '',
        passwordConfirm: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.props.setLogin(true);
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
                                        <Form.Control type="text" id="name" placeholder="Nome" required onChange={this.handleChange} />
                                        <Form.Label htmlFor="name">Nome</Form.Label>
                                    </div>

                                    <div className="form-label-group">
                                        <Form.Control type="email" id="email" placeholder="Email" required onChange={this.handleChange} />
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                    </div>

                                    <div className="form-label-group">
                                        <Form.Control type="emailConfirm" id="emailConfirm" placeholder="Confirmação do Email" required onChange={this.handleChange} />
                                        <Form.Label htmlFor="emailConfirm">Confirmação do Email</Form.Label>
                                    </div>

                                    <div className="form-label-group">
                                        <Form.Control type="password" id="password" placeholder="Senha" required onChange={this.handleChange} />
                                        <Form.Label htmlFor="password">Senha</Form.Label>
                                    </div>

                                    <div className="form-label-group">
                                        <Form.Control type="password" id="passwordConfirm" placeholder="Confirmação da Senha" required onChange={this.handleChange} />
                                        <Form.Label htmlFor="passwordConfirm">Confirmação da Senha</Form.Label>
                                    </div>

                                    <Button variant="primary" size="lg" block className="text-uppercase" type="submit">Cadastrar</Button>
                                    <hr className="my-4" />
                                    <Button variant="info" size="lg" block className="text-uppercase" type="button" onClick={this.handleLogin}>Login</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLogin: (isSignIn) => dispatch(setLogin(isSignIn)),
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)