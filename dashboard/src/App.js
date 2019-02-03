import React, { Component } from 'react'
import MillMapContainer from './components/MillMapContainer'
import QRCode from 'qrcode.react'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Global Palm Oil Overview</h1>
                <MillMapContainer />
            </div>
        )
    }
}

export default App
