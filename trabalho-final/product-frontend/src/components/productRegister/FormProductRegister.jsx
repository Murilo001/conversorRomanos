import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import {
  Row, Col, Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

/**
 * Campos do paciente:
 * Nome, data de nascimento, idade, peso, altura, imc, pressão arterial, telefone,
 * celular, estado civil, atividade exercida.
 */
class FormProductRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Form>
        <Row>
          <Col md="8">
            <FormGroup>
              <Label for="productName">Nome</Label>
              <Input type="text" id="productName" name="productName" placeholder="Nome do Produto" />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label for="productPrice">Preço</Label>
              <Input
                type="text"
                id="productPrice"
                name="productPrice"
                mask="999,99"
                maskChar=" "
                tag={InputMask}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label for="productDescription">Descrição</Label>
              <Input type="textarea" id="productDescription" name="productDescription" placeholder="Descrição" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 1, offset: 11 }}>
            <Button type="submit" color="primary">Salvar</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default FormProductRegister;
