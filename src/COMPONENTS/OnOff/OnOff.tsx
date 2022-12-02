import React, {useState} from "react";
import s from "./OnnOff.module.css"


export default function OnOff() {
let [onState, setOnState] = useState(false)

    const onnHandler = () => setOnState(true)
    const offHandler = () => setOnState(false)


        return (<div className={s.Body}>
            <div className={onState ? s.onnBox : s.clearBox} onClick={onnHandler}></div>
            <div className={onState ? s.clearBox : s.offBox } onClick={offHandler}></div>
            <div className={onState ? s.indicationOnn : s.indicationOff}></div>
        </div>)
}

