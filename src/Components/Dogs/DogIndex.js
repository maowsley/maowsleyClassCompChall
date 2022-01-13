import React from 'react';

import { Button } from 'reactstrap';

export default class DogIndex extends React.Component {
    constructor() {
        super();
        this.state = {

            cuteDogs: []
        }
    }

    fetchFunDogs = () => {
        fetch('https://dog.ceo/api/breeds/image/random', {
            header: {
                "Accept": "application/json"
            }
        })

        .then(res => res.json())
        .then(dogSearch => {
            this.setState({
                cuteDogs: dogSearch
            })

            console.log(this.state.cuteDogs);
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.fetchFunDogs()}>Click here to search happy dogs!</Button>
                <img src={this.state.cuteDogs.message} />
            </div>
        )
    }
}