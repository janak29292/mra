const initialState ={
    age:21,
    history: []
}

const reducer = (state= initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case "AGE_UP":
            return{
                ...state,
                age: state.age + action.value,
                history: [...state.history, {age: state.age + action.value}]
            }
            break;
        case "AGE_DOWN":
                return{
                    ...state,
                    age: state.age - action.value,
                    history: [...state.history, {age: state.age + action.value}]
                }
            break;
        case "DEL_ITEM":
            console.log('this happend');
            console.log(action);
            console.log(state.history);
            console.log(state.history.filter((item)=>(item == state.history[action.key])));
            return{
                ...state,
                age: state.age,
                history: state.history.filter((item)=>(item != state.history[action.key]))
            }
    }
    return newState
}

export default reducer;