import superagent from 'superagent';

const API_URL = 'https://internets-of-thing-api.herokuapp.com/api/v1/things';

// Actions
const ADD = 'Thing/ADD';
const ADD_ALL = 'Thing/ADD_ALL';
const DELETE = 'Thing/DELETE';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD:

      return [ action.payload];

    case ADD_ALL :

      console.log(action.payload, 'payload for add all')
      return [...action.payload];

    case DELETE: 

      console.log(action, 'action')
      return [...state, ...action]
      
    default: return state;

  }
}

// Action Creators
export function addThing(thing) {

    return {
      type: ADD,
      payload: thing
    }
  }

export function addThings(things) {

  return {
    type: ADD_ALL,
    payload: things 
  }
}

export function deleteOneThing(thing) {
    console.log(thing, 'delete one thing');
    return{
        type: DELETE,
        payload: thing,
    }
}

// API actions
export function fetchThings() {

  return dispatch => {
    
    fetch(API_URL)
      .then(function(response) {
        return response.json(); 
      })
      .then(function(things) {

        dispatch(addThings(things));
        

      });
  };
}

export function postThing(thing) {
    console.log(thing)
    return dispatch => {
        superagent.post(API_URL)
        .send(thing)
        .then(function(response){
            dispatch(addThing(thing));
            return response.body;
        });
    };
}

export function deleteThing(thing) {
    console.log(thing, '!!!')
    return dispatch => {
        superagent.delete(`${API_URL}/${thing}`)
        .then(function(response){
            dispatch(deleteOneThing(thing));
            fetch(API_URL)
            .then(function(response) {
              return response.json(); 
            })
            .then(function(things) {
      
              dispatch(addThings(things));
              
      
            });
        });
    };
}