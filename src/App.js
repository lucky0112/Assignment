import React, { Component } from 'react';
import './App.css';
import Circle from './Circle'

class App extends Component {
  constructor(){
    super();
    this.state={
      arcPercentage:0,
      arcValue:0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
        () => this.updateArcPercentage(),
        50
    );
  }

  updateArcPercentage(){
    //Change the Value accordingly
    let finalPercentage=90;
    let circumference = 2*Math.PI;
    if (this.state.arcPercentage<=finalPercentage){
      this.setState({
        arcPercentage: this.state.arcPercentage+1,
        arcValue:(this.state.arcPercentage+1) * circumference / 100
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Tekion Assignment</h2>
        </div>
        <p className="App-intro">
          Animation
        </p>

        <Circle id="canvas1" color="red" width="300" height="200" arcName="Revenue Estimated vs Actual" arcValue={this.state.arcValue} arcPercentage={this.state.arcPercentage}/>
        <Circle id="canvas2" color="blue" width="300" height="200" arcName="Hours Estimated vs Actual" arcValue={this.state.arcValue} arcPercentage={this.state.arcPercentage}/ >
        <Circle id="canvas3" color="yellow" width="300" height="200" arcName="Jobs estimated vs Actual" arcValue={this.state.arcValue} arcPercentage={this.state.arcPercentage}/>
      </div>

    );
  }
}

export default App;
