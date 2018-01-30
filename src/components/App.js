import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor(){
    super();
    this.addFish = this.addFish.bind(this);

    this.loadSamples = this.loadSamples.bind(this);

    // get initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }

  // This methods will let the fish 'swim' up to the App.js from AddFishForm.js
  addFish(fish){

    // udpate our state
    const fishes = {...this.state.fishes}; // takes the current fishes state and put it into a new fishes state.

    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes }); // alternative: fishes: fishes (line 13: line 22)
  }

  loadSamples(){
    this.setState({
      fishes: sampleFishes
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="You can’t it eat just one"/>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSamples={this.loadSamples}
          />
      </div>
    )
  }
}

export default App;
