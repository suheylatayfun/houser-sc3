import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
class Wizard extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            address:'',
            city:'',
            state:'',
            zip:'',
            redirect:false
                }
    }


    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

addHouse=()=>{
    const {name,address,city,state,zip,redirect}= this.state;
    const newHouse = {name,address,city,zip};
    axios.post('/api/house',newHouse)
    .then(()=>{
        this.setState({redirect:true})       

    })
}
    render(){
       if(this.state.redirect === true){
           return <Redirect to="/"/>
        }
        return(
            <div>
                <h1>Add New Listing</h1>
                <Link to="/"><button>Cancel</button></Link>

                <h3>Property Name</h3>
                <input name="name" value={this.state.name} onChange={this.handleChange}/>
                <h3>Address</h3>
                <input name="address" value={this.state.address} onChange={this.handleChange}/>
                <h3>City</h3>
                <input name="city" value={this.state.city} onChange={this.handleChange}/>
                <h3>State</h3>
                <input name="state" value={this.state.state} onChange={this.handleChange}/>
                <h3>Zip</h3>
                <input name="zip" type="number" value={this.state.zip} onChange={this.handleChange}/>
                <br/>
                <br/>
                <button onClick={this.addHouse}>Complete</button>

            </div>
        )
    }
}
export default Wizard;