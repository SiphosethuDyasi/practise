import React, { Component } from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';

class Index extends Component {

    render() {
        return (
            <div>
                <React.StrictMode>
                    <App />

                </React.StrictMode>

            </div>

        );
    }
}



ReactDOM.render(
    <Index />,
    document.getElementById('root')
);
