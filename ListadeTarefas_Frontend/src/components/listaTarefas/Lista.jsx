import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container, Table } from 'react-bootstrap'
import ItemListaTarefa from '../listaTarefas/ItemListaTarefa';
import { Link } from 'react-router-dom';


class Lista extends React.Component {

    constructor() {
        super();

        this.state = {
            apostas: null
        }
    }

    async fetchData() {
        const { data } = await axios.get("/tarefa");
        
        this.setState({
            tarefas: data
        })
      }

    componentDidMount() {
        this.fetchData();
    }

    renderRows = () => {
        const { tarefas } = this.state;
        let list = [];
        
        if (tarefas) {
            
            for (var i = 0; i < tarefas.length; i++) {
                console.log(tarefas[i]);
                var key = tarefas[i].id;
                let tarefa = {
                    descricao: tarefas[i].titulo,
                    statusTarefa: tarefas[i].statusTarefa
                }
                list.push(
                    <tr key={key}>
                        <ItemListaTarefa  tarefa={tarefa} />
                    </tr>)
            }
        }
        return list;
    }

    render() {
        return (
            <Container>
                <div className="d-flex justify-content-center mb-2 mt-2">
                    <h3 className="font-weight-light">Tarefas</h3>
                </div>
                <div className="d-flex justify-content-left mb-2 mt-2">
                    <Link to={'/adicionartarefa'}>
                        <h5 className="font-weight-light">Adicionar nova tarefa</h5>
                    </Link>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className="text-center">Título</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Acões</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </Table>
            </Container >
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user
});


export default connect(mapStateToProps)(Lista);