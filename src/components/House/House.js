import React from 'react';

class House extends React.Component{

    render(){
        const {name,address,city,state,zip,id,deleteHouse}= this.props;
        return(
            <div>
                <button onClick={()=>deleteHouse(id)}>X</button>
                <img alt="property"/>
                <p>Property Name: {name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
            </div>

        )
    }
}
export default House;