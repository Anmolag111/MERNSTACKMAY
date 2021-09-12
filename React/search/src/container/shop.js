import React, { Component } from 'react';
import {Header} from '../components/Header'
import {LABEL} from '../utils/constants';
export class Shop extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return (
       <div >
       <h1 className='alert-info text-center'>Shopping</h1>
       <Header brandName={LABEL.BrandName}/>
       </div>
        );
    }
}