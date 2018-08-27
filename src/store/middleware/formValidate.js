import things, { postThing } from '../things.js';

const formValidate = store => next => action => {
    if(action.type === 'ADD'){
        if(action.payload.name === ''){
            alert('Please enter name')
        }else {
            next(action)
        }
    }else {
        next(action)
    }

    if(action.type === 'DELETE'){
        if(action.payload.id === ''){
            alert('Please Enter ID')
        }else {
            next(action)
        }
    }else {
        next(action)
    }
}
 export default formValidate; 