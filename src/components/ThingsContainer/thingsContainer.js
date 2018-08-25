import React, { Component, Fragment } from 'react';
import ThingsList from '../ThingsList/thingsList.js';
import AddThing from '../AddThing/addThing.js';
import { fetchThings, postThing } from '../../store/things.js';

class ThingsContainer extends Component {
    render() {
        return(
            <Fragment>
                <ThingsList />
                <AddThing/>
            </Fragment>
        )
    }
}

const mapStateToProps = ( things ) => ({ things });

const mapDispatchToProps = dispatch => ({
  fetchThings: () => dispatch(fetchThings()),
  postThing: things => dispatch(postThing(things)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ThingsContainer);