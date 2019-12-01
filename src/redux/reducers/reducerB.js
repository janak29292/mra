const initialState ={
    b:1
}

const reducerB = (state= initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'UPDATE_B':
            return{
                ...state,
                b: action.a + state.b
            }
    }
    return newState
}

export default reducerB;