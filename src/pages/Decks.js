import React, { Component } from 'react';
import { withFirebase } from '../components/Firebase'
import DecksCard from '../components/DecksCard/DecksCard'

class Decks extends Component {
    render() {
        console.log(this.props.firebase)
        return (
            <section className="section">
                <h1 className="title has-text-centered">
                    My Decks
                </h1>
                <div className="container">
                    <h2 className="subtitle is-4">
                        Study Queue
                    </h2>
                    <h2 className="subtitle is-4">
                        Other Decks
                    </h2>
                    <div className="container decks-container">
                        <div className="columns">
                            <div className="column is-2 is-hidden-mobile"></div>
                            <div className="column">
                                <DecksCard title="Fundamentals of Quantum Mechanics" subtitle="Fun, I guess." numDue="0" />
                                <DecksCard title="Stochastic Optimization" subtitle="This is scary." />
                            </div>
                            <div className="column is-2 is-hidden-mobile"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withFirebase(Decks);