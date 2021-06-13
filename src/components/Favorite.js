import React, { Component } from 'react'
import ax from 'axios';
import FavRecipe from './FavRecipe';
import Update from './Update';

class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favData: [],
            showFav: false,
            root: process.env.REACT_APP_ROOT,
            showForm: false,
            label: '',
            image: '',
            index : 0
        }
    }

    componentDidMount = async () => {
        const favorite = await ax.get(`${this.state.root}/getfavorite`);
        this.setState({
            favData: favorite.data,
            showFav: true
        })
    }

    delete = async (index) => {
        const id = this.state.favData[index]._id;
        const newData = await ax.delete(`${this.state.root}/delete/${id}`);
        this.setState({
            favData: newData.data
        })
    }

    labelHandler = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    imageHandler = (e) => {
        this.setState({
            image: e.target.value
        })
    }

    showForm = (index) => {
        const recipe = this.state.favData[index];

        this.setState({
            label : recipe.label,
            image : recipe.image,
            showForm:true,
            index : index
        })
    }


    update = async(e) => {
        e.preventDefault();
        const newRecipe = {
            label:this.state.label,
            image:this.state.image
        }
        // const id = this.state.favData[this.state.index]._id
        const newData = await ax.put(`${this.state.root}/updaterecipe/${this.state.index}` , newRecipe);

        this.setState({
            favData : newData.data
        })
    }
    render() {
        return (
            <>
                {
                    this.state.showForm &&
                    <Update
                    labelHandler = {this.labelHandler}
                    imageHandler = {this.imageHandler}
                    label = {this.state.label}
                    image = {this.state.image}
                    update = {this.update}
                    />
                }
                {this.state.showFav &&
                    this.state.favData.map((item, idx) => {
                        return (
                            <FavRecipe
                                recipe={item}
                                index={idx}
                                delete={this.delete}
                                showForm = {this.showForm}
                            />
                        )
                    })
                }
            </>
        )
    }
}

export default Favorite
