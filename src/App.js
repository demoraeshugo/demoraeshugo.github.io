//React
import React, { Component } from 'react';

//Styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

//Components
import Header from './components/Header/index';
import Feed from './components/Feed/index';
import Footer from './components/Footer/index';

class App extends Component {
    render () {
        return <>
            <Header/>
            <Feed/>
            <Footer/>
        </>
    }
}
export default App;