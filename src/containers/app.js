import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { players } from '../actions';
import Players from '../components/players';

class App extends Component {
    componentWillMount(){
        this.props.players();
    }
    
    render(){
        return (
            <div>
                <Players {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        players,
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);