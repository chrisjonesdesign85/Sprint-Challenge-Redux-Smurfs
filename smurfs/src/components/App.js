import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfList';

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
const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  error: StorageEvent.error,
})

export default connect(mapStateToProps, { getSmurfs, addSmurf, deleteSmurf })(App);
