import { useState } from 'react';

interface FeldsForm {

    myClick(): void;
    dinamick: string,
    dima: number
}

const Form: React.FC<FeldsForm> = props => {

    console.log(props.dinamick);
    console.log(props.dima);
    console.log(props.myClick);


    return (<div>HELLO WORLD</div>)

}

export default Form;