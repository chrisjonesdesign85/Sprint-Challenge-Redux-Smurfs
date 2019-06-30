/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESSFUL,
  FETCHING_SMURFS_FAILED,

  ADDING_SMURF_START,
  ADDING_SMURF_SUCCESSFUL,
  ADDING_SMURF_FAILED,

  DELETING_SMURF_START,
  DELETING_SMURF_SUCCESSFUL,
  DELETING_SMURF_FAILED

} from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

function SmurfingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        smurfs: [],
        fetchingSmurfs: true,
        error: null,
      }

    case FETCHING_SMURFS_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: null,
      }

    case FETCHING_SMURFS_FAILED:
      return {
        ...state,
        smurfs: [],
        fetchingSmurfs: false,
        error: action.payload,
      }

    case ADDING_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
        error: null,
      }

    case ADDING_SMURF_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        error: null,
      }

    case ADDING_SMURF_FAILED:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload,
      }

    case DELETING_SMURF_START:
      return {
        ...state,
        deletingSmurf: true,
        error: null
      }

    case DELETING_SMURF_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurf: false,
        error: null
      }

    case DELETING_SMURF_FAILED:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      }

    default:
      return state;
  }
}

export default SmurfingReducer;