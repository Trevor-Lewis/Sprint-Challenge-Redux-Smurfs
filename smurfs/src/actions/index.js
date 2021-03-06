import axios from 'axios';
/* 
  Action types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GETTING_SMURF = 'GETTING_SMURF';
export const SMURFS_RECEIVED = 'SMURFS_RECEIVED';
export const ERROR = 'ERROR';
export const CREATING_SMURF = 'CREATING_SMURF';
export const CREATED_SMURF = 'CREATED_SMURF';
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

export function getSmurfs() {
  return function(dispatch) {
    dispatch({ type: GETTING_SMURF });
    axios
      .get(`http://localhost:3333/smurfs`)
        .then(res => {
          dispatch({ type: SMURFS_RECEIVED, payload: res.data })
        })
          .catch(err => {
            console.log(err, 'Failure in getting smurfs');
            dispatch({ type: ERROR, payload: err })
          })
  }
}

export function addSmurf(smurf) {
  return function(dispatch) {
    dispatch({ type: CREATING_SMURF });
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
        .then(res => {
          dispatch({ type: CREATED_SMURF, payload: res.data })
        })
        .catch(err => {
          console.log(err, 'Failure in adding smurf')
          dispatch({ type: ERROR, payload: err })
        })
  }
}
