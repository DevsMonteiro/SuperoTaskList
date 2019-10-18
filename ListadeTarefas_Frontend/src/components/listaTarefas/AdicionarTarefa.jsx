import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { Container, Row, Button, Col, Card, Form } from 'react-bootstrap';
import { signUp, setLogin } from '../../store/actions/authActions';



export class AdicionarTarefa extends Component {
    state = {
        titulo: '',
        descricao: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post("/tarefa", {
            Titulo: this.state.titulo,
            Descricao: this.state.descricao,
        }).then(() => {
            this.setState({
                titulo: '',
                descricao: '',
            })
        });


    }



    render() {
        return (
            <Container>
                <Row>
                    <Col sm={9} md={7} lg={5} className="mx-auto">
                        <Card className="card-signin my-5">
                            <Card.Body>
                                <h5 className="card-title text-center">Adicionar tarefa</h5>
                                <Form onSubmit={this.handleSubmit} className="form-signin">
                                    <div className="form-label-group">
                                        <Form.Control type="text" id="titulo" placeholder="Titulo" required onChange={this.handleChange} />
                                        <Form.Label htmlFor="titulo">Titulo</Form.Label>
                                    </div>

                                    <div className="form-label-group">
                                        <Form.Control type="text" id="descricao" placeholder="Descricao" required onChange={this.handleChange} />
                                        <Form.Label htmlFor="descricao">Descricao</Form.Label>
                                    </div>
                                    <Button variant="primary" size="lg" block className="text-uppercase" type="submit">Cadastrar</Button>
                                    <hr className="my-4" />
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

export default connect(null, mapDispatchToProps)(AdicionarTarefa)