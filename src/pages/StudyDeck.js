import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';

import PaddedContainer from '../components/PaddedContainer/PaddedContainer';

const CardSide = props => (
    <div className="box" style={{ height: '25vw' }}>
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {props.children}
        </div>
    </div>
);

class StudyCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false
        };
    }
    flipped() { 
        this.setState({ flipped: !this.state.flipped });
        if (this.state.flipped === false && typeof this.props.flipCallback === 'function') { this.props.flipCallback(); }
    }
    render() {
        return (
            <Fragment>
                <ReactCardFlip flipDirection="vertical" isFlipped={this.state.flipped}>
                    <CardSide>
                        {this.props.front}
                    </CardSide>
                    <CardSide>
                        {this.props.back}
                    </CardSide>
                </ReactCardFlip>
                <div className="has-text-right">
                    <br />
                    <button className="button is-rounded is-info" onClick={this.flipped.bind(this)}>
                        <span className="icon">
                            <i className="fas fa-sync"></i>
                        </span>
                    </button>
                </div>
            </Fragment>
        );
    }
}

class StudyDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false,
            startTime: null,
            deltaTime: null
        };
    }
    reset() { 
        this.setState({ startTime: null, deltaTime: null });
    }
    markCorrect() {
        return;
    }
    markIncorrect() { 
        return;
    }
    markSkip() { 
        return;
    }
    componentDidMount() { 
        this.state.startTime = new Date();
    }
    endTimer() { 
        var time = new Date();
        this.setState({ deltaTime: time - this.state.startTime });
    }
    render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title is-2">Study: Elementary Particle Theory</h1>
                    <div className="is-hidden-mobile" style={{ height: '100px' }}></div>
                    <PaddedContainer num={2}>
                        <StudyCard front="hi" back="bye" flipped={this.state.flipped} flipCallback={this.endTimer.bind(this)} />
                        <div className="has-text-centered">
                            <strong>Did you recall the definition correctly?</strong>
                            <br /><br />
                            <div className="buttons has-addons" style={{ justifyContent: 'center' }}>
                                <button className="button is-success is-rounded" onClick={() => this.markCorrect()}>
                                <span><strong>Yes</strong></span>
                                    <span className="icon">
                                        <i className="fas fa-check"></i>
                                    </span>
                                </button>
                                <button className="button is-warning" onClick={() => this.markSkip()}>
                                <span><strong>Skip</strong></span>
                                    <span className="icon">
                                        <i className="fas fa-forward"></i>
                                    </span>
                                </button>
                                <button className="button is-danger is-rounded" onClick={() => this.markIncorrect()}>
                                <span><strong>Nope</strong></span>
                                    <span className="icon">
                                        <i className="fas fa-times"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </PaddedContainer>

                </div>
            </section >
        );
    }
}

export default withRouter(StudyDeck);