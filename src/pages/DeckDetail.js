import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../components/Firebase';
import PaddedContainer from '../components/PaddedContainer/PaddedContainer';

const Flashcard = props => (
    <div className="box columns" style={{marginBottom: '40px'}}>
        <div className="column has-text-centered">{props.term}</div>
        <div className="column is-1 is-hidden-mobile"></div>
        <div className="column has-text-centered">{props.definition}</div>
    </div>
);

class DeckDetail extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title is-2">Probability and Statistics in CS/SE</h1>
                    <PaddedContainer size={1}>
                        <div className="columns">
                            <div className="column is-7">data viz?</div>
                            <div className="column">
                                <h2 className="title is-4">Deck Progress</h2>
                                <div><span className="tag is-memorai-blue is-medium">12 cards due</span></div>
                                <br />
                                <button className="button is-success">Start Studying &rarr;</button>
                            </div>
                        </div>
                    </PaddedContainer>
                    <br />
                    <br />
                    <PaddedContainer size={2}>
                        <h3 className="title is-3 has-text-centered">Deck Overview</h3>
                        <div className="columns">
                            <div className="column"><h4 className="title is-5 has-text-centered">Term</h4></div>
                            <div className="column is-1 is-hidden-mobile"></div>
                            <div className="column"><h4 className="title is-5 has-text-centered">Definition</h4></div>
                        </div>
                        <Flashcard term="Complex term" definition="Complex definition?" />
                        <Flashcard term="lie" definition="low" />
                    </PaddedContainer>
                </div>
            </section>
        );
    }
}

export default withFirebase(withRouter(DeckDetail));