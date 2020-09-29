import React, { Component } from 'react';
import Header from './Header';

class Page extends Component {
    render() {
        return (
            <div>
                <Header />
                <p>lol</p>
                {this.props.children}
            </div>
        )
    }
}

export default Page;