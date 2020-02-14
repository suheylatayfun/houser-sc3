import React from 'react';
import House from './../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends React.Component{
    constructor(){
        super();
        this.state={
            houses:[]
        }
    }
    componentDidMount(){
        this.getHouses()
        
    }

    getHouses =()=>{
        axios.get('/api/houses')
        .then(response=>{
            this.setState({
                houses:response.data
            })
            // console.log(response.data)
        })

    }

    deleteHouse = (id)=>{
        axios.delete(`/api/house/${id}`)
        .then(response=>{
            this.getHouses()
        })
    }

    render(){
        const {houses}= this.state;
        const mappedHouse = houses.map(el=>{
            return(
            <House
            key={el.id}
            name={el.name}
            address={el.address}
            city={el.city}
            state={el.city}
            zip={el.zip}
            id={el.id} 
            deleteHouse ={this.deleteHouse}        
            />
            )
        })
        return(
            <div>
                <h1>Dashboard</h1>
               <Link to="/wizard"><button>Add New Property</button></Link>
                <hr/>
                <h2>Home Listings</h2>
                {mappedHouse}

            </div>
        )
    }
}
export default Dashboard;