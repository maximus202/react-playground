import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0, word: 'Start' }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        if (this.state.count >= 8) {
            this.state.word = 'BOOM!!!'
        } else if (this.state.count % 2 !== 0) {
            this.state.word = 'tock'
        } else if (this.state.count % 2 === 0) {
            this.state.word = 'tick'
        }
        return (
            <div>
                <h2>Drill 2: Bomb</h2>
                <p>{this.state.word}</p>
            </div>
        )
    }
}

export default Bomb