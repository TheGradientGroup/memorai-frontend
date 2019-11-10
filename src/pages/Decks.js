import React, { Component } from 'react';
import { withFirebase } from '../components/Firebase'
import DecksCard from '../components/DecksCard/DecksCard'


const CardContainer = props => (
    <div className="container">
        <div className="columns">
            <div className="column is-2 is-hidden-mobile"></div>
            <div className="column">{props.children}</div>
            <div className="column is-2 is-hidden-mobile"></div>
        </div></div>
);

class Decks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardInfo: null
        }
    }
    componentDidMount() {
        // getCardInfo()
    }
    render() {
        return (
            <section className="section">
                <h1 className="title has-text-centered">
                    My Decks
                </h1>
                <div className="container">
                    <h2 className="subtitle is-4">
                        Study Queue
                    </h2>
                    <CardContainer>
                        <DecksCard title="Memeology" subtitle="Okay, boomer." numDue="20" deckID="a47sfj4" />
                        <DecksCard title="Fundamentals of Quantum Mechanics" subtitle="Fun, I guess." numDue="10" deckID="a37sfj4" />
                    </CardContainer>
                    <h2 className="subtitle is-4">
                        Other Decks
                    </h2>
                    <CardContainer>
                        <DecksCard title="Stochastic Optimization" subtitle="This is scary." numDue="0" />
                        <DecksCard title="Linear Algebra" subtitle="Determinant my future." numDue="0" />
                    </CardContainer>
                </div>
            </section>
        );
    }
}

export default withFirebase(Decks);