import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';

class App extends Component {
    handleChange = (event) => {
        this.setState({request:event.target.value})
    }
    handleSubmit = (event) => {
        var request = this.state.request.trim();
        if(!request){
            return;
        }
        fetch('/echo?request=request')
            .this(response => {
                return response.text();
            })
            .then(body => {
                alert(body);
            });
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Do you hear an ech?</h1>
        </header>

        <form className="App-into" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange}/>
            <input type="submit" value="Echo"/>
        </form>
      </div>
    );
  }
}

export default App;
