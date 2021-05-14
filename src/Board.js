import React from 'react';
import PropTypes from 'prop-types';

class Square extends React.Component {
    render() {
        return (
            <button
                className={"square " + (this.props.isWinning ? "square--winning" : null)}
                onClick={this.props.onClick}
            >
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    //Using loops to draw the square instead of using CSS


    renderSquare(i) {
        return (
            <Square
                isWinning={this.props.winningSquares.includes(i)}
                key={'square' + i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    //Using loops to draw the square instead of using CSS
    render() {
        const row = [];
        let k = 0;
        for (let i = 0; i < 3; i++) {
            const col = [];
            for (let j = 0; j < 3; j++) {
                col.push(this.renderSquare(3 * i + j));
                k++;
            }
            row.push(<div key={k} className='board-row'>{col}</div>);
        }
        return (
            <div>
                {row}
            </div>
        );
    }

}

export default Board;