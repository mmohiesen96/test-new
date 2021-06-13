import React, { Component } from 'react'
import {Card , Button} from 'react-bootstrap';

class FavRecipe extends Component {
    render() {
        return (
            <>
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.recipe.image} />
                    <Card.Body>
                        <Card.Title>{this.props.recipe.label}</Card.Title>
                        <Card.Text>
                            <ul>
                            {
                                this.props.recipe.ingredients.map((item,idx) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </Card.Text>
                        <Button variant="danger" onClick = {() => this.props.delete(this.props.index)}>Delete</Button>
                        <Button variant="warning" onClick = {() => this.props.showForm(this.props.index)}>Update</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default FavRecipe
