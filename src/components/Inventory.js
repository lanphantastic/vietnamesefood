import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <p>Inventory</p>
        <AddFishForm addFish={this.props.addfish}/>
        <button onClick={this.props.loadSamples}>Load Sample Foods</button>
      </div>

    )
  }
}

export default Inventory;
