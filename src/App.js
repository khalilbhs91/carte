import React, { Component } from 'react';
import './App.css'
import Carte from "./carte";
import Form from './form'

class App extends Component {
  state={
    nameapp:'votre nom',
    numberapp:'0000000000000000',
    dateapp:'xx/xx'
  }


 //function aspirator
 
 getform=(x,y,z)=>
 {
    this.setState({
      nameapp:x,
      numberapp:y,
      dateapp:z
    })
 }

  render() {
    return (
  <div id="app">
    <Carte name={this.state.nameapp} number={this.state.numberapp} date={this.state.dateapp}/>
    <Form getdata={this.getform}/>
    
  </div>
    );
  }}
    


export default App;