import React, { Component } from 'react';
import { withFirebase } from '../components/Firebase'
import DecksCard from '../components/DecksCard/DecksCard'
import apiStub from '../apiStub';


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

    getCardInfo() { 
        if (!this.props.curUser) return;
        this.props.curUser.getIdToken(true).then(token => {
            apiStub.getCardInfo({ owner: token, homescreen: true }).then(res => res.json()).then(data => this.setState({cardInfo: data}));
        });
    }

    componentDidMount() {
        this.getCardInfo();
     }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.curUser !== prevProps.curUser) {
            this.getCardInfo();
        }
    }
    render() {
        var queue = this.state.cardInfo == null ? null : this.state.cardInfo
            .filter(itm => itm.numDue > 0)
            .sort((itm1, itm2) => itm1.numDue < itm2.numDue ? 1 : ((itm1.numDue === itm2.numDue) ? 0 : -1))
            .map(itm => <DecksCard key={itm.deckID} title={itm.title} subtitle={itm.description} numDue={itm.numDue} deckID={itm.deckID} />);
        var other = this.state.cardInfo == null ? null : this.state.cardInfo
            .filter(itm => itm.numDue <= 0)
            .map(itm => <DecksCard key={itm.deckID} title={itm.title} subtitle={itm.description} numDue={itm.numDue} deckID={itm.deckID} />);
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
                        {queue}
                    </CardContainer>
                    <h2 className="subtitle is-4">
                        Other Decks
                    </h2>
                    <CardContainer>
                        {other}
                    </CardContainer>
                </div>
            </section>
        );
    }
}

export default withFirebase(Decks);