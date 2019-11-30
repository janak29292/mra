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
        case "AGE_DOWN":
                return{
                    ...state,
                    age: state.age - action.value,
                    history: [...state.history, {age: state.age + action.value}]
                }
        case "DEL_ITEM":
            return{
                ...state,
                age: state.age,
                history: state.history.filter((item)=>(item !== state.history[action.key]))
            }
        default:
            break;
    }
    return newState
}

export default reducer;