import React, { Component } from 'react';
import classNames from 'classnames';

class DecksCard extends Component {
    render() {
        return (
            <div className="box columns is-mobile" style={{ border: '1px solid #eeeeee', cursor: 'pointer', marginBottom: '40px' }}>
                <div className="column is-8">
                    <h5 className="title is-5">{this.props.title || 'Card Title'}</h5>
                    <h5 className="subtitle is-6">{this.props.subtitle || 'Subtitle'}</h5>
                </div>
                <div className="column has-text-right">
                    <span className={classNames('tag', { 'is-memorai-blue': this.props.numDue == null || this.props.numDue >= 0 }, { 'is-warning': this.props.numDue >= 40 })}>
                        {this.props.numDue || '∞'} cards due
                    </span>
                </div>
            </div>
        );
    }
}

export default DecksCard;