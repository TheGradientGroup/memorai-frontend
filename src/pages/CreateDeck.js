import React, { Component } from 'react';
import { withFirebase } from '../components/Firebase';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

class CreateDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: undefined,
            inputDescription: undefined,
            inputCards: []
        };
    }
    addNewCard() {
        var newCards = [...this.state.inputCards]
        newCards.push({ term: undefined, definition: undefined });
        this.setState({
            inputCards: newCards
        });
    }
    cardUpdateListener(term, def, idx, del = false) {
        if (del === true) {
            var newCards = [...this.state.inputCards];
            newCards.splice(idx, 1);
            this.setState({
                inputCards: newCards
            });
            return;
        }
        if (this.state.inputCards[idx].term === term && this.state.inputCards[idx].definition === def) return;
        var crds = [...this.state.inputCards];
        crds[idx] = { term, definition: def };
        this.setState({
            inputCards: crds
        });
    }

    submitDeckReq() {
        var payload = {
            title: this.state.inputName,
            description: this.state.inputDescription,
            cards: this.state.inputCards.map(itm => {
                return {
                    key: itm.term,
                    type: 'text',
                    value: itm.definition,
                    owner: null,
                    tags: []
                }
            })
        };
        if (!this.props.curUser) return;
        this.props.curUser.getIdToken(true).then(token => {
            return Axios.post(`https://memoraii.web.app/decks?owner=${token}`, payload);
        }).then(res => {
            console.log(res);
            this.props.history.push('/home');
        });

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
                                <input className="input" type="text" placeholder="Plato and Socrates" value={this.state.inputName} onChange={e => this.setState({ inputName: e.target.value })} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Deck Description</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Isn't philosophy fun?" value={this.state.inputDescription} onChange={e => this.setState({ inputDescription: e.target.value })} />
                            </div>
                        </div>
                    </div>
                    <div className="column is-hidden-mobile"></div>
                </div>
                <div className="columns">
                    <div className="column">
                        <p><strong>Cards</strong></p>
                        {this.state.inputCards.length === 0 ? <p><em>Add a card using the button below.</em></p> : null}
                        {this.state.inputCards.map((val, idx) => {
                            return <DeckCardWidget key={idx} listener={this.cardUpdateListener.bind(this)} idx={idx} />
                        })}
                    </div>
                    <div className="column is-hidden-mobile"></div>
                </div>
                <button className="button is-success is-rounded" onClick={this.addNewCard.bind(this)}>
                    <span className="icon">
                        <i className="fas fa-plus"></i>
                    </span>
                    <span>Add new card</span>
                </button>
                <div>
                    <br />
                    <button className="button is-link" onClick={this.submitDeckReq.bind(this)}>Create Deck</button>
                </div>
            </section>
        );
    }
}

class DeckCardWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: undefined,
            def: undefined,
            shouldDelete: false
        };
    }
    onTermInput(e) {
        this.setState({ term: e.target.value });
    }
    onDefInput(e) {
        this.setState({ def: e.target.value });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.listener !== undefined || typeof this.props.listener === 'function') {
            this.props.listener(this.state.term, this.state.def, this.props.idx, this.state.shouldDelete);
        }
    }
    render() {
        return (
            <React.Fragment>
                <hr />
                <div className="columns">
                    <div className="column">
                        <input className="input" type="text" placeholder="term" value={this.state.term} onChange={this.onTermInput.bind(this)} />
                    </div>
                    <div className="column">
                        <input className="input" type="text" placeholder="definition" value={this.state.def} onChange={this.onDefInput.bind(this)} />
                    </div>
                    <div className="column is-1">
                        <button className="button is-danger is-rounded" onClick={() => this.setState({ shouldDelete: true })}>
                            <span className="icon">
                                <i className="fas fa-times"></i>
                            </span>
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
                <hr />
            </React.Fragment>
        );
    }
}

export default withRouter(withFirebase(CreateDeck));