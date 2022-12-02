import React, {ChangeEvent, useMemo, useState} from 'react';
import {FormControl, InputLabel, NativeSelect} from "@mui/material";
import Rating from "../Rating/Rating";
import Accordion from "../accordion/accordion";
import OnOff from "../OnOff/OnOff";
import AccordionWithRedux from "../accordion/accordionReducer";

const SelectUiMemo = React.memo(() => SelectUi());

const SelectUi = () => {
    const value = ["Rating", "Accordion", "OnOff", "AccordionWithRedux"]
    let [active, setActive] = useState('')

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setActive(event.target.value);
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native" >
                    Menu
                </InputLabel>
                <NativeSelect
                    onChange={handleChange}
                    defaultValue={value[0]}
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }
                }
                >
                    {value.map(v => <option value={v} > {v} </option>)}
                </NativeSelect>
            </FormControl>
            {active === "Rating" && <Rating/>}
            {active === "Accordion" && <Accordion titleValue={"Меню"} item={value}/> }
            {active === "AccordionWithRedux" && <AccordionWithRedux titleValue={"Меню"} item={value}/> }
            {active === "OnOff" && <OnOff/> }
        </div>
    );
};

export default SelectUiMemo;