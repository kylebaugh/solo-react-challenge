import { useState } from "react";

const Politician = (props) => {

    const [showDiv, setShowDiv] = useState(false)

    const showDetails = async () => {
        setShowDiv(!showDiv)
        console.log('server show details hit' + props.item.name)
        await props.setPoliticianName(props.item.name)
        console.log(props.politicianName)
        await props.getPoliticianDetails()
    }

    return (
        <div id='politicianBox'>
            <div id='polBasics'>
                <h4 className={props.item.party} onClick={()=> showDetails()}>Name: {props.item.name}</h4>
                <h4>Party: {props.item.party}</h4>
            </div>
            {
            showDiv && 
            <div id='polDetails'>
                <h4>First Name: {props.item.state}</h4>
                <h4>Last Name: {props.item.district}</h4>
                <h4>District: {props.item.phone}</h4>
                <h4>Phone: {props.item.office}</h4>
                <h4>Website: <a>{props.item.link}</a></h4>
                <h4>Office: {props.item.link}</h4>
                </div>
            }
        </div>
    )
}

export default Politician