import React from 'react';
import Accordion from "./accordion";

export default {
    title: "Accordion",
    component: Accordion,
}

export const RatingMode = () => {
    return <Accordion titleValue={"Меню"} item={["Rating", "Accordion", "OnOff"]}/>
}