import React from 'react';

const PaddedContainer = props => (
    <div className="container">
        <div className="columns">
            <div className={`column is-${props.size === undefined ? 2 : props.size} is-hidden-mobile`}></div>
            <div className="column">{props.children}</div>
            <div className={`column is-${props.size === undefined ? 2 : props.size} is-hidden-mobile`}></div>
        </div></div>
);

export default PaddedContainer;