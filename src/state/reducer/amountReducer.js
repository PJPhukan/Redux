export default reducer = (state = 0, action) => {
    if (action.type === 'deposite') {
        return state + action.payload;
    }
    else if (action.type === 'withdraw' && state - action.payload >= 0) {

        return state - action.payload;
    }
    else {
        return state;
    }

}