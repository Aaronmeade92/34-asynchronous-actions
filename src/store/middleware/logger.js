export default store => next => action => {
    console.log('the state is :', store.getState());
    console.log('the action is :', action.type)
    return next(action);
}