import React, { Component } from 'react';
import { withFirebase } from '../components/Firebase'

class Decks extends Component {
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
                    <h2 className="subtitle is-4">
                        Other Decks
                    </h2>
                    <div className="container decks-container">
                        <div className="columns">
                            <div className="column is-2 is-hidden-mobile"></div>
                            <div className="column">
                                <div className="box" style={{ border: '1px solid gray', cursor: 'pointer' }}>
                                    <div className="columns is-mobile">
                                        <div className="column is-9">
                                            <h5 className="title is-5">Fundamentals of Quantum Mechanics</h5>
                                            <h5 className="subtitle is-6">Quantum mechanics is fun?</h5>
                                        </div>
                                        <div className="column has-text-right">
                                            <span class="tag is-info is-medium" style={{ background: '#008ef4' }}>12 cards due today</span>
                                        </div>
                                    </div>
                                </div>
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