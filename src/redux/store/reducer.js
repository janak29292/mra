const initialState ={
    a:1,
    b:1
}

const reducer = (state= initialState, action) => {
    const newState = {...state};
    // switch (action.type) {
    //     case "AGE_UP":
    //         return{
    //             ...state,
    //             age: state.age + action.value,
    //             history: [...state.history, {age: state.age + action.value}]
    //         }
    //         break;
    //     case "AGE_DOWN":
    //             return{
    //                 ...state,
    //                 age: state.age - action.value,
    //                 history: [...state.history, {age: state.age + action.value}]
    //             }
    //         break;
    //     case "DEL_ITEM":
    //         return{
    //             ...state,
    //             age: state.age,
    //             history: state.history.filter((item)=>(item != state.history[action.key]))
    //         }
    // }
    switch (action.type) {
        case 'UPDATE_A':
            return{
                ...state,
                a: state.a + state.b
            }
            break;
        case 'UPDATE_B':
            return{
                ...state,
                b: state.a + state.b
            }
            break;
    }
    return newState
}

export default reducer;