import React, { Component } from "react";
import { Input } from "../components/Input";
import { Operations } from "../components/Operations";
import { Output } from "../components/Output";
import {InputDemoRefs} from '../components/InputDemoRefs';
export class Calc extends Component {
  constructor(props) {
    super(props); // calling parent class constructor i.e <App/>
    this.firstNumber = 0; // instance variable
    this.secondNumber = 0;
    this.result = 0;
    this.numObject={
        
    };
    this.state={result:this.result};
  }
  takeInput(event){
    //console.log("Take input called",event.target.value);
 
    this.numObject[event.target.id]=event.target.value;
    //console.log('this is',this.numObject);

  }
  calculate(operation){
    this.result=eval(this.numObject.first + operation + this.numObject.second );
    this.setState({result:this.result});
    console.log(this.result);

  }
  render() {
    return (
      // <div className="container mt-2">
      //   <h1 className="alert-info text-align"> Calculator</h1>   
      //    <Input name="first" input={this.takeInput.bind(this)} className="alert-info" />  
      //   <Input name="second" input={this.takeInput.bind(this)}  className="alert-info" /> 
      //   <Operations compute ={this.calculate.bind(this)} className=" mr-2 mb-5" />
      //   <br/>
      //   <br/>
      //   <Output result={this.state.result} className=" mt-2" />
      // </div>
      <InputDemoRefs/>
    );
  }
}
