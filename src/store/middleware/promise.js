function promise({ dispatch, getState }) {
    return (next) => (action) => {
        if (action.payload instanceof Promise) {
            action.payload.then(val => dispatch({ ...action, payload: val }));
            return;
        }
        next(action);
    }
}


export default promise;