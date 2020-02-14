import React from 'react';
import store,{UPDATE_STEP_ONE} from './../../reducer/store';
import {Link} from 'react-router-dom';

class StepOne extends React.Component{
    constructor(){
        super();
        this.state={
            name:store.getState().name,
            address:store.getState().address,
            city:store.getState().city,
            state:store.getState().state,
            zip:store.getState().zip,
          
        }
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                name:store.getState().name,
                address:store.getState().address,
                city:store.getState().city,
                state:store.getState().state,
                zip:store.getState().zip,
            })
        })
    }

    handleChange=(e)=>{
        // let newData = {
        //     name:this.state.name,
        //     address:this.state.address,
        //     city:this.state.city,
        //     state:this.state.state,
        //     zip:this.state.zip
        // }
        this.setState({
            [e.target.name]:e.target.value
        })
        store.dispatch({
            type:UPDATE_STEP_ONE,
        //     payload:{
        //     name:this.state.name,
        //     address:this.state.address,
        //     city:this.state.city,
        //     state:this.state.state,
        //     zip:this.state.zip
        // }
            payload:e.target.value,
            stateKey:e.target.name
        
        })
    }

    saveChanges=(e)=>{

    }
    render(){
        // console.log(this.state)
       
        return(
            <div>
    
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
                <Link to="/wizard/step2"><button>Next Step</button></Link>
               

            </div>

        )
    }
}
export default StepOne