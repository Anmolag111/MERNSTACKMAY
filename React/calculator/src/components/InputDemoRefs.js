import React, { Component } from "react";
export class InputDemoRefs extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:'',
        }
    }
    takeInput(){
        var name =this.refs.ename.value;
        var salary=this.refs.salary.value;
        console.log("name "+name);
        console.log("salry"+salary);
        this.setState({msg:'name is '+name +'& salary is'+ salary})
    }
    render(){
        return(
             <div>
            <h1>{this.state.msg}</h1>
            <input placeholder="Type name here" ref="ename"/>
            <input placeholder="Type age here" ref="salary"/>
            <button onClick={
                ()=>{
                    this.takeInput('submit');
                }
            }>Submit</button>
            </div>

        );
    }
}