import React, { Component } from 'react';
import khalil from './khalil.jpg'
import Icone from './icone.ico'
import './App.css'



class App extends Component {
  render() {
    return (
  <div className='carteP'>
    <div className='carte'>
      <div className='nom'>
      <strong>CREDIT CARD</strong>
      </div>
      <img className='image' src={khalil}/>
      <p className='codeP'><strong>6543876543218</strong></p>
      <div className='footer'>
      <div className='code'><strong>5422</strong></div>
      <div className='code'><strong>dt11/mh/50</strong>
      <img className='image2' src={Icone}/></div>
      </div>

    </div>
  </div>
    );
  }}
    


export default App;
