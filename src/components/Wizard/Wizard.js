import React from "react";
import { Link, Route} from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import store,{CLEAR_INPUTS} from './../../reducer/store';

class Wizard extends React.Component {

  clear=()=>{
    store.dispatch({
      type:CLEAR_INPUTS
    })

  }

  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <Link to="/">
          <button onClick={this.clear}>Cancel</button>
        </Link>
        <Route path="/wizard/step1" component={StepOne} />
        <Route path="/wizard/step2" component={StepTwo} />
        <Route path="/wizard/step3" component={StepThree} />
      </div>
    );
  }
}
export default Wizard;
