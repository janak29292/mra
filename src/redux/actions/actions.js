export const ageUpAsync = value => {
    return {type: 'AGE_UP', value}
}

export const loading = () => {
    return {
        type: 'LOADING'
    }
}


// can do this cause of thunk
export const ageUp = val => {
    return dispatch => {
        dispatch(loading())
        setTimeout(() => {
            dispatch(ageUpAsync(val))
        }, 1000)
    }
}


export const ageDown = value => {
    return {type: 'AGE_DOWN', value}
}

export const delItem = key => {
    return {type: 'DEL_ITEM', key}
}