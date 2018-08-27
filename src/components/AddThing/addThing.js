import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { postThing, deleteThing } from '../../store/things.js';

class AddThing extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            id: '',
        }
    }

        addToList = (event) => {
            event.preventDefault();
            this.props.postThing(this.state);
        }

        deleteFromList = (event) => {
            event.preventDefault();
            this.props.deleteThing(this.state.id)
        }

        onChange = event => {
            const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
            const changedBit = {
                [event.target.name]: val
            };
            this.setState(changedBit);
        };

        onChangeId = event => {
            const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
            const changedBit = {
                id: val
            };
            this.setState(changedBit);
        };


        render(){
            return(
            <Fragment>
            <form onSubmit={this.addToList} onChange={this.onChange}>
            <input name='name' placeholder='New Thing' value={this.props.value}/><br/>
            <button>Add New Thing</button><br/>
            </form>
            <form onSubmit={this.deleteFromList} onChange={this.onChangeId}>
            <input name='name' placeholder='Thing ID' value={this.props.value}/><br/>
            <button>Delete By ID</button><br/>
            </form>
            </Fragment>
            )
        }
}

const mapStateToProps = ( things ) => ({ things });
const mapDispatchToProps = dispatch => ({
    postThing: things => dispatch(postThing(things)),
    deleteThing: things => dispatch(deleteThing(things)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddThing);
