import React from 'react';
import {Header} from '../components/Header'
import {LABEL} from '../utils/Constants';
import {List} from '../components/List';
export class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(<div className="container">
            <h1 className="alert-info text-center" >Shop Demo</h1>
            <Header brandName={LABEL.BRANDNAME}/>
            <List/>
            </div>);
    }
}