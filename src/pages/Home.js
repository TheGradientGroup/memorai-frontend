import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div>
                <section className="hero is-info is-medium" style={{background: '#008EF4'}}>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                MemorAI helps you memorize everything.
                           </h1>
                            <h2 className="subtitle">
                                AI-powered flashcards to make sure you always remember.
                           </h2>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;