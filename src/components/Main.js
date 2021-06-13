import React, { Component } from 'react'
import ax from 'axios';
import Recipe from './Recipe';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes : [],
            showRecipe : false,
            root : process.env.REACT_APP_ROOT
        }
    }
    componentDidMount = async () => {
        const query = 'chicken';
        const recipes = await ax.get(`${this.state.root}/getrecipes?type=${query}`);
        
        this.setState({
            recipes:recipes.data,
            showRecipe:true
        })
    } 

    addToFav = async(recipe) => {
        await ax.post(`${this.state.root}/addToFav` , recipe);
    }
    render() {
        return (
            <>
                {
                    this.state.showRecipe &&
                    this.state.recipes.map((item,idx) => {
                        return(
                            <Recipe
                            recipe = {item}
                            addToFav = {this.addToFav}
                            index = {idx}
                            />
                        )
                    })
                }
            </>
        )
    }
}

export default Main
