import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor(){
    super();
    this.addFish = this.addFish.bind(this);

    this.loadSamples = this.loadSamples.bind(this);

    this.addToOrder = this.addToOrder.bind(this);

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

  addToOrder(key){
    // take a copy of our state
    const order = {...this.state.order};

    // update or dadd the new number of fish ordered
    order[key] = order[key] + 1 || 1;

    // update our state
    this.setState({ order }) // or use order: order
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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="You can’t it eat just one"/>
            <ul className="list-of-fishes">
              {
                Object
                  .keys(this.state.fishes)
                  .map(key =>
                    <Fish key={key}
                    index={key}
                    details={this.state.fishes[key]}
                    addToOrder={this.addToOrder}
                    />)
              }
            </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          />
        <Inventory
          addFish={this.addFish}
          loadSamples={this.loadSamples}
          />
      </div>
    )
  }
}

export default App;
