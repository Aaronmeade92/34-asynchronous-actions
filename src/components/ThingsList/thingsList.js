import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchThings } from '../../store/things.js';
import AddThing from '../AddThing/addThing.js';

class ThingsList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchThings();
  }


  render() {
    return (
      <div>
        <h1>Things</h1>
        <ul>
          {this.props.things.map((thing, i) => <li key={thing.id} id={thing.id}>{thing.id}: {thing.name}</li>)}
        </ul>
        <AddThing onComplete={this.props.onComplete}/>
      </div>
    );
  }
};

const mapStateToProps = ( things ) => ({ things });

const mapDispatchToProps = dispatch => ({
  fetchThings: () => dispatch(fetchThings()),
  postThing: things => dispatch(postThing(things)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ThingsList);
