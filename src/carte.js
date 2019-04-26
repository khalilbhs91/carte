import React, { Component } from 'react';
import khalil from './khalil.jpg'
import Icone from './icone.ico'
import './App.css'



export default class Carte extends React.Component {
    
    render() {
      return ( 

  <div className='carteP'>
    <div className='carte'>
      <div className='nom'>
      <strong>CREDIT CARD</strong>
      </div>
      <img className='image' src={khalil}/>

      <p className='codeP'><strong>{this.props.number}</strong></p>

      <div className='footer'>

      <div className='code'><strong>{this.props.name}</strong></div>
      <div className='code'><strong>{this.props.date}</strong>

      <img className='image2' src={Icone}/></div>
      </div>
    </div>

  
   </div>

    
    );
  }}
    


