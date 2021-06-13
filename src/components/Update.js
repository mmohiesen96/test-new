import React, { Component } from 'react';
import {Form , Button} from 'react-bootstrap';

class Update extends Component {
    render() {
        return (
            <>
                    <Form onSubmit = {this.props.update}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Recipe name</Form.Label>
                        <Form.Control type="text" value = {this.props.label} onChange = {this.props.labelHandler}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Recipe Image URL </Form.Label>
                        <Form.Control type="text" value = {this.props.image} onChange = {this.props.imageHandler}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick ={this.props.showFrom}>
                        Update
                    </Button>
                </Form>
            </>
        )
    }
}

export default Update
