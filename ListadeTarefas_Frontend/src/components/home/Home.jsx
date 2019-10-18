import React, { Component } from 'react'
import { Card, CardContent } from '@material-ui/core';
import Lista from '../listaTarefas/Lista'

export default class Home extends Component {
  render() {
    return (
      <Card style={{margin: 10}}>
        <CardContent>
          <Lista/>
        </CardContent>
      </Card>
    )
  }
}
