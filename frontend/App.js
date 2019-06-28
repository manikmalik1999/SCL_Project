import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import { Bar, Line } from 'react-chartjs-2';
class App extends Component{

    state = {
        // Pressure: [],
        Temperature: []
    }

    HandleSubmit1 = event => {
      event.preventDefault();
    axios.get('http://localhost:3000/Temperature')
    .then(res =>{
      console.log(res);
      this.setState({
        Temperature: res.data.products
      })
    })
    }

    render()
    {    
      console.log("Entered")
        const {Temperature}= this.state;
          const post = Temperature.map(P=>{
          return(
          // <Line data={Temperature}/>
          <ul>
            <li key= {P._id} >Time: {P.Time}       Temperature: {P.value} </li>
          </ul>
          )});
  
    return(
        <div>
        <button type="button home-button" id="button1" onClick= {this.HandleSubmit1} >Pressure</button>
        <button type="button contact-button" id="button2" onClick={this.HandleSubmit1}>Temperature</button>
        <div>{post}</div>
        </div>
    );
    };
                 
    }

  
  export default App