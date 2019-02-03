import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Shipments from './components/Shipments'
import MillMapContainer from './components/MillMapContainer'
import QRCode from 'qrcode.react'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shipments" exact component={Shipments} />
            </Switch>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
                <div className="App">
                    <h1>Global Palm Oil Overview</h1>
                    <MillMapContainer />
                </div>
            </div>
        )
    }
}

export default App
