import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    let addfish = this.props.addfish;
    let loadSamples = this.props.loadSamples;
    return (
      <div>
        <p>Inventory</p>
        <AddFishForm addFish={addfish}/>
        <button onClick={loadSamples}>Load Sample Foods</button>
      </div>

    )
  }
}

export default Inventory;
