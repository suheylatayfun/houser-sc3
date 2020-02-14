import React from 'react';
import store,{UPDATE_STEP_TWO} from './../../reducer/store';
import {Link} from 'react-router-dom';

class StepTwo extends React.Component{
    constructor(){
        super();
        this.state={
            img:store.getState().img
        }
    }

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                img: store.getState().img
            })
        })
    }
    handleChange=(e)=>{
        this.setState({img:e.target.value})
    }

    saveChanges=()=>{
        store.dispatch({
            type:UPDATE_STEP_TWO,
            payload:this.state.img
        })
    }


    render(){
        return(
            <div>
                <h3>Image Url</h3>
                <input value={this.state.img} onChange={this.handleChange}/>
                
                <Link to="/wizard/step1"><button onClick={this.saveChanges}>  Previous Step</button></Link>
                <Link to="/wizard/step3"><button onClick={this.saveChanges}>Next Step</button></Link>
            </div>
        )
    }
}
export default StepTwo;