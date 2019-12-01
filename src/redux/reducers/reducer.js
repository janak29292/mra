const initialState ={
    age:21,
    history: [],
    loading: false
}

const reducer = (state= initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case "AGE_UP":
            return{
                ...state,
                age: state.age + action.value,
                history: [...state.history, {age: state.age + action.value}],
                loading: false
            }
        case "AGE_DOWN":
                return{
                    ...state,
                    age: state.age - action.value,
                    history: [...state.history, {age: state.age - action.value}],
                    loading: false
                }
        case "DEL_ITEM":
            return{
                ...state,
                age: state.age,
                history: state.history.filter((item)=>(item !== state.history[action.key])),
                loading: false
            }
        case 'LOADING':
            return{
                ...state,
                age: state.age,
                history: state.history.filter((item)=>(item !== state.history[action.key])),
                loading: true
            }
        default:
            break;
    }
    return newState
}

export default reducer;