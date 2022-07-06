import { useState } from "react";

const Politician = (props) => {

    return (
        <div id='politicianBox'>
            <h4>{props.item.name}</h4>
            <h4>{props.item.party}</h4>
            <h4>{props.item.state}</h4>
        </div>
    )
}

export default Politician