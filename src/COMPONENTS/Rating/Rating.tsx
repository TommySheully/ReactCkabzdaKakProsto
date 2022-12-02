import React, {useState} from 'react';

type StarType = {
    selected: boolean;
    id: number,
}

function Rating () {
    let [value, setValue] = useState(0)
    const onChangeHandler = (newValue: number) => setValue(newValue)

    function Star(props: StarType) { return props.selected ? <span onClick={() => onChangeHandler(props.id)}><b>Star</b></span> : <span onClick={() => onChangeHandler(props.id)}>Star</span>}

    return (<div>
            <Star selected={(value > 0)} id={1}/>
            <Star selected={value > 1} id={2}/>
            <Star selected={value > 2} id={3}/>
            <Star selected={value > 3} id={4}/>
            <Star selected={value > 4} id={ 5}/>
        </div>
    );
}

export default Rating;