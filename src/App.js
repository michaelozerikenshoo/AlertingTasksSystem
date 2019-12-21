import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import EventGrid from '../src/EventGrid/EventGrid'
import Toolbar from "./Toolbar/Toolbar";

class App extends Component {

    state = {
        isGrid: false
    };

    toggleGridHandler = (previousState) => {
        this.setState({isGrid: !previousState})
    };


    render() {
        return (
            <div className="App">
                <Header/>
                <Toolbar toggleGrid={()=>this.toggleGridHandler(this.state.isGrid)}/>
                {this.state.isGrid ? <EventGrid/> : ""}
            </div>
        );
    }

}

export default App;
