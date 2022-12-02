import React, {useReducer} from "react";

type AccordionPropsType = {
    titleValue: string;
    item: string[]
}

type CHANGE_COLLAPSEDAC = typeof CHANGE_COLLAPSED

const reducerAccordionStatus = (state: boolean, action: CHANGE_COLLAPSEDAC) => {
    if (action.type === "CHANGE-COLLAPSED") {
        return !state
    }
    return state
}

const CHANGE_COLLAPSED = {type: "CHANGE-COLLAPSED"}

function AccordionWithRedux(props: AccordionPropsType) {

    let [collapsed, dispatch] = useReducer(reducerAccordionStatus, false)
    const onClickHandler = () => dispatch(CHANGE_COLLAPSED)

    return (
        <div>
            <div onClick={onClickHandler}>{props.titleValue}</div>
            {!collapsed && <AccordionBody item={props.item} titleValue={props.titleValue}/>}
        </div>
    )
}


function AccordionBody(props: AccordionPropsType) {

    return (
        <ul>
            {props.item.map(i=><li>{i}</li>)}
        </ul>
    );
}

export default AccordionWithRedux;