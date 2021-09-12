import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
function fun(props){
    return (
        <div> <h1 className="hide">Header</h1>  
        <Button variant="primary">Alert {props.myName} {props.Age}</Button></div>
    )
    
}
export default fun;