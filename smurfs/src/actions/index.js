/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESSFUL = 'FETCHING_SMURFS_SUCCESSFUL';
export const FETCHING_SMURFS_FAILED = 'FETCHING_SMURFS_SUCCESSFUL';

export const ADDING_SMURF_START = 'ADDING_SMURF';
export const ADDING_SMURF_SUCCESSFUL = 'ADDING_SMURF_SUCCESSFUL';
export const ADDING_SMURF_FAILED = 'ADDING_SMURF_FAILED';

export const DELETING_SMURF_START = 'DELETING_SMURF_START';
export const DELETING_SMURF_SUCCESSFUL = 'DELETING_SMURF_SUCCESSFUL';
export const DELETING_SMURF_FAILED = 'DELETING_SMURF_FAILED';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: FETCHING_SMURFS_SUCCESSFUL, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_SMURFS_FAILED, payload: err }))
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => dispatch({ type: ADDING_SMURF_SUCCESSFUL, payload: res.data }))
    .catch(err => dispatch({ type: ADDING_SMURF_FAILED, payload: err }))
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETING_SMURF_START })
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETING_SMURF_SUCCESSFUL, payload: res.data }))
    .catch(err => dispatch({ type: DELETING_SMURF_FAILED, payload: err }))
}