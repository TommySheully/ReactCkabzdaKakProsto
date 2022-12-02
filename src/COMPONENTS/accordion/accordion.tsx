import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
    item: string[]
}


function Accordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)
    const onClickHandler = () => setCollapsed(!collapsed)

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
            {props.item.map((i)=> <li>{i}</li>) }
        </ul>
    );
}

export default Accordion;