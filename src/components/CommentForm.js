import React, { Component } from 'react';
import { Button, Label, Col, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

//Test for the minimun lenght
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }


    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value
            + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }


    render() {
        return (
            <div className="container">

                <Button color="btn btn-outline-secondary">
                    <span className="fa fa-pencil fa-lg"></span>
                    Submit comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                            <Label htmlFor="message" md={12}>Rating</Label>
                            <Row className="form-group">
                                <Col md={{ size: 12, offset: 0 }}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Label htmlFor="firstname" md={12}>Your Name</Label>
                            <Row className="form-group">

                                <Col md={12}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required*',
                                            minLength: ' Must be greater than 2 characters',
                                            maxLength: ' Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Label htmlFor="message" md={12}>Comment</Label>
                            <Row className="form-group">

                                <Col md={12}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 12, offset: 0 }}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>

                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;