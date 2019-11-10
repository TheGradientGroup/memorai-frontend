import React, { Component } from 'react';

class CreateDeck extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            inputName: null,
            inputDescription: null,
            inputCards: []
        };
    }
    render() {
        return (
            <section className="section">
                <h1 className="title is-2">Create New Deck</h1>
                <div className="columns">
                    <div className="column is-one-third">
                        <div className="field">
                            <label className="label">Deck Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Plato and Socrates" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Deck Description</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Isn't philosophy fun?" />
                            </div>
                        </div>
                    </div>
                    <div className="column is-hidden-mobile"></div>
                </div>
            </section>
        );
    }
}

export default CreateDeck;