function logger({ getState, dispatch }) {
    return (next) => (action) => {
        // debugger
        console.log('-----------------');
        console.log(action.type, 'excuted');
        const preState = getState();
        console.log(`prev state is`, preState);
        const returnValue = next(action);
        const nextState = getState();
        console.log('next state is', nextState);
        console.log('-----------------');
        return returnValue;
    }
}


export default logger;