import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfList';
import { stat } from 'fs';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  addSmurf = smurf => {
    this.props.addSmurf(smurf)
  }

  deleteSmurf = id => {
    this.props.deleteSmurf(id);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {(this.props.fetchingSmurfs || this.props.addingSmurf)
          && <p>loading...</p>
        }

        <SmurfList smurfs={this.props.smurfs} deleteSmurf={this.deleteSmurf} />
        <SmurfForm addSmurf={this.addSmurf} />
      </div>
    );
  }
}

// adding mapStateToProps
const madStateToProps = state => ({
  smurfs: stat.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  error: StorageEvent.error,
})

export default connect(madStateToProps, { getSmurfs, addSmurfs, deleteSmurf })(App);
