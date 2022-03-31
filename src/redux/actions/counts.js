// import { COUNTER_CHANGE } from "../constants";

// export function changeCount(count) {
//     return {
//         type: COUNTER_CHANGE,
//         payload: count

//     }


// }



export const addCart = (val) => {
    return {
        type: "ADDCART",
        payload: val
    }
}
export const minusCart = (val) => {
    return {
        type: "MINUSCART",
        payload: val
    }
}

export const changeByAmount = (val) => ({
    type: "CHANGE_BY_AMOUNT",
    payload: val,
})