import React, { createContext, useState } from 'react';


const ccValue = {
    // const [stateCart, setStateCart] = useState(['oo'])
    //  addNewTask : (task) => {},
    userName: "JohnSnow"
}
const cc = createContext(
    ccValue
);

export default cc;
export { ccValue }