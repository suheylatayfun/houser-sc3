import React from 'react';
import './../../styles/House.css'

class House extends React.Component{

    render(){
        const {name,address,city,state,zip,id,img,mortgage,rent,deleteHouse}= this.props;
        return(
            <div className="house-container">
                <img alt="property" src={img} className="house-img"/>
                <div className="info-container">
                <p>Property Name: {name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
                <p>Monthly Mortgage:{mortgage}</p>
                <p>Desired Rent: {rent}</p>
                </div>
                <button onClick={()=>deleteHouse(id)} id="delete-sign">X</button>
            </div>

        )
    }
}
export default House;