const initialState = {
    a: []
}
    ;


const countReducer = (state = initialState, action) => {
    console.log(state)
    console.log(state.count)
    switch (action.type) {
        case "ADDCART":
            return {
                ...state,
            }

        case "DECREMENT":
            return {
                ...state,
            }
        case "CHANGE_BY_AMOUNT":
            return {
                ...state,

            }
        default:
            return state;

    }
}


export default countReducer;