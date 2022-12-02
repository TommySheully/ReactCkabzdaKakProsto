import React, {useState} from 'react';


export default {
    title: "Input",
}

export const InputValue = () => {
    let [value, setValue] = useState('')
    return <><input onChange={(e)=> {setValue(e.currentTarget.value)}} value={value}/> - {value}</>
}

export const InputMode = () => {
    return <input value={"Run"}/>
}


