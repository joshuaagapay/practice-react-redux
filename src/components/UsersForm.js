import React from 'react'
import { connect } from 'react-redux'
import {addUsers} from '../actions/usersActions.js'


class UserForm extends React.Component{
  state = {
    name: null,
    age: null,
    position: null
  }

  componentDidMount(){
    console.log(this.props);
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value,
    });    
  }

  submitChange = (e) =>{
    e.preventDefault();

    let newUsers = {};

    newUsers.id = Math.random();
    newUsers.name = this.state.name;
    newUsers.age = this.state.age;
    newUsers.position = this.state.position;
    
    this.props.addUsers(newUsers);
    this.refs.form.reset();   
    this.refs.name.focus();      
  }
  
  render(){
  
    return(
      <div>
        <form ref="form" onSubmit={this.submitChange}>
          <label htmlFor="name">Name:</label>
          <input ref="name" type="text" id="name" onChange={this.handleChange} required/>
          <label htmlFor="age">Age:</label>
          <input ref="age" type="number" id="age" onChange={this.handleChange} required/>
          <label htmlFor="position">Position:</label>
          <input ref="position" type="text" id="position" onChange={this.handleChange} required/>
          <button className="btn primary" type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addUsers: (users) => {
      dispatch(addUsers(users)) 
    }
  }
}

export default connect(null,mapDispatchToProps)(UserForm)