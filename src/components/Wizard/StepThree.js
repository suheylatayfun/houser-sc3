import React from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';
import store,{UPDATE_STEP_THREE_MORTGAGE,UPDATE_STEP_THREE_RENT} from './../../reducer/store';

class StepThree extends React.Component{
    constructor(){
        super();
        this.state={
            mortgage:store.getState().mortgage,
            rent:store.getState().rent,
            redirect:false
        }
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                mortgage:store.getState().mortgage,
                rent: store.getState().rent
            })
        })
    
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    saveChanges=(e)=>{
        // store.dispatch({
        //     type:UPDATE_STEP_THREE,
        //     
        //     // payload:e.target.value,
        //     // stateKey:e.target.name
        // })
        store.dispatch({
            type:UPDATE_STEP_THREE_MORTGAGE,
            payload:this.state.mortgage
        })
        store.dispatch({
            type:UPDATE_STEP_THREE_RENT,
            payload:this.state.rent

        })

    }

    addHouse=()=>{
        const {mortgage,rent}= this.state;
        const {name,address,city,state,zip,img} = store.getState();
        const newHouse = {name,address,city,state,zip,img,mortgage,rent};
        console.log(newHouse)
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
                <h3>Recommended Rent: </h3>
                <h2>Monthly Mortgage Payment</h2>
                <input name="mortgage" value={this.state.mortgage} onChange={this.handleChange}/>
                <h2>Desired Monthly Rent</h2>
                <input name="rent" value= {this.state.rent} onChange={this.handleChange}/>

                <Link to="/wizard/step2"><button onClick={this.saveChanges}>Previous Step</button></Link>
                <button onClick={this.addHouse}>Complete</button>
            </div>
        )
    }
}
export default StepThree;