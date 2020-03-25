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
    title: 'Xold',
    dataIndex: 'xold',
}, {
    title: 'Error',
    dataIndex: 'Error',
}];

class Can extends Component {
    state = {
        result: [],
        Formula: "",
        xi: 0,
        xold: 0,

    }



    onChange1 = (x) => {
        this.setState({
            [x.target.name]: x.target.value
        })
    }


    handleSubmit = () => {
        axios
            .post("http://localhost:8000/Bisecapi/Bisecapi", {
                xi: parseFloat(this.state.xi),
                xold: parseFloat(this.state.xold),
                Formula: this.state.Formula
            })
            .then(res => {
                this.setState({ result: res.data.result })
                console.log(this.state.result)
            })
            .catch(err => {
                console.log(err);
            });

    }

    render() {

        return (


            <div >
                <div className='input'>

                    <br></br>
                    <p>Formula:</p>
                    <input type="text" name="Formula" onChange={this.onChange1.bind(this)} />
                    <p>X:</p>
                    <input type="text" name="xi" onChange={this.onChange1.bind(this)} />
                    <p>Y:</p>
                    <input type="text" name="xold" onChange={this.onChange1.bind(this)} />
                    <br></br>
                    <br></br>
                    <button onClick={this.handleSubmit.bind(this)}>submit</button>
                </div>
                {<Table style={{ width: "800px", margin: "auto" }} dataSource={this.state.result} columns={header} pagination={false} />}
            </div>
        );
    }

}
export default Can;