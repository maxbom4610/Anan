import React, { Component } from 'react';
import './Form.css'
import { Table } from 'reactstrap';
import axios from 'axios';

const header = [{
  title: 'Iteration',
  dataIndex: 'iteration',
}, {
  title: 'Xi',
  dataIndex: 'xi',
}, {
  title: 'Xi+1',
  dataIndex: 'xr',
},  {
  title: 'Error',
  dataIndex: 'Error',
}];

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Formula: "",
            xl: 0,
          xr: 0,
         
        };
      }
      

      onChange1= (x) => {
        this.setState({
          [x.target.name]: x.target.value
        })
      }


      handleSubmit = () => {
        axios
        .post("http://localhost:8000/Bisecapi/Bisecapi", {
          xl: parseFloat(this.state.xl),
          xr: parseFloat(this.state.xr),
          Formula: this.state.Formula
        })
        .then(res => {
          this.setState({result:res.data.result})
          console.log(this.state.result)
        })
        .catch(err => {
          console.log(err);
        });
  
      }
   
render() {
 
    return (
      

      <div  id="continent">
     
    
      <br></br>
      <p>Formula:</p>
      <input type = "text"  name="Formula" onChange={this.onChange1.bind(this)}/>
      <p>X:</p>
      <input type = "text" name="xr" onChange={this.onChange1.bind(this)}/>
      <br></br>
      <br></br>
      <button onClick={this.handleSubmit.bind(this)}>submit</button>
      
      {<Table style={{width:"800px",margin:"auto"}} dataSource={this.state.result} columns={header} pagination={false} />}
      <h1>{this.state.xr}</h1>
   </div>
    );
  }

}
  export default New;