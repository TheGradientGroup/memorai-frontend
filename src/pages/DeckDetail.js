import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../components/Firebase';
import PaddedContainer from '../components/PaddedContainer/PaddedContainer';

const Flashcard = props => (
    <div className="box columns" style={{ marginBottom: '40px' }}>
        <div className="column has-text-centered"><strong>{props.term}</strong></div>
        <div className="column is-1 is-hidden-mobile">
            <span className="icon">
                <i className="fas fa-arrow-right"></i>
            </span>
        </div>
        <div className="column has-text-centered">{props.definition}</div>
    </div>
);

class DeckDetail extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title is-2">Elementary Particle Theory</h1>
                    <PaddedContainer size={1}>
                        <div className="columns">
                            <div className="column is-7">data viz here???</div>
                            <div className="column box has-background-dark">
                                <h2 className="title is-4 has-text-white">Deck Progress</h2>

                                <div className="columns is-mobile" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <div className="column">
                                        <progress className="progress is-link" max="100" value="80"></progress>
                                    </div>
                                    <div className="column is-2 has-text-center"><strong style={{ color: 'white' }}>80%</strong></div>
                                </div>
                                <button onClick={() => this.props.history.push(`/study/${this.props.match.params.deck}`)} className="button is-success">Study 12 cards &rarr;</button>
                            </div>
                        </div>
                    </PaddedContainer>
                    <br />
                    <br />
                    <PaddedContainer size={2}>
                        <h3 className="title is-3 has-text-centered">Deck Overview</h3>
                        {/* <div className="columns">
                            <div className="column"><h4 className="title is-5 has-text-centered">Term</h4></div>
                            <div className="column is-1 is-hidden-mobile"></div>
                            <div className="column"><h4 className="title is-5 has-text-centered">Definition</h4></div>
                        </div> */}
                        <Flashcard term="Quark" definition="I'm not a physicist." />
                        <Flashcard term="Gluon" definition="Glue stuff?" />
                        <Flashcard term="Muon" definition="The milk-giver of the universe. (Moo!)" />
                        <Flashcard term="Positron" definition="The friend that's always positive." />
                    </PaddedContainer>
                </div>
            </section>
        );
    }
}

export default withFirebase(withRouter(DeckDetail));