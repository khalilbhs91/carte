import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
          name: '',
          number: '',
          date: '',
        }
      }


    handelchange=(event)=>
    {  
        this.setState({
            [event.target.name]:event.target.value
        },()=>this.props.getdata(this.state.name,this.state.number,this.state.date))
        
     
    }

    //   //Name Card 
    // nameChange(name) {
    //     this.setState({
    //       name: name.target.value
    //     });
    //   }
    //   //Card Number
    //   numberChange(c) {
    //     this.setState({
    //       number: c.target.value
    //     });
    //   }
    //   //Expiration
    //   dateChange(d) {
    //     this.setState({
    //      month: d.target.value
    //     });
    //   }
    
      
    render() { 
        return ( 
            <div className='card'>
        <label>
         NAME
         <input type="text" maxLength="16" name='name' onChange={this.handelchange}/>
        </label>
        <label>
          NUMBER
         <input type="text" maxLength="16" name='number' onChange={this.handelchange}/>
        </label>
        <label>
          EXPIRATION DATE
         <input type="text" maxLength="4" name='date' onChange={this.handelchange}/>
        </label>

</div>
         );
    }
}
 
export default Form;