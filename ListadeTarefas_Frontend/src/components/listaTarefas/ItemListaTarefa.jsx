import React from 'react';

export class ItemListaTarefa extends React.Component {

    renderStatus(status) {
        switch (status) {
            case 0:
                return "Ativa";
            case 1:
                return "Cocluída";
            case 2:
                return "Removida";
            default:
                return "Ativa";
        }
    }

    render() {
        const { tarefa } = this.props;
        return (
            <>
                <td><h5 className="font-weight-light text-center">{tarefa.descricao}</h5></td>

                <td><h5 className="font-weight-light text-center">{this.renderStatus(tarefa.statusTarefa)}</h5></td>
                <td><h5 className="font-weight-light text-center"></h5></td>
            </>
        );
    }
}

export default ItemListaTarefa
