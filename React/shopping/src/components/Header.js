import React from 'react';
import {HeaderServices} from '../Services/HeaderServices'
export const Header=(props)=>{
  const menus=HeaderServices()['menu'];
  console.log(menus);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">{props.brandName}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          {
            menus.map(element=>{
              return(
                <li className="nav-item active">
                <a className="nav-link" href={element.link}>{element.name} <span className="sr-only">(current)</span></a>
              </li>
              )
            })
          }
           </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav> 
    );
}