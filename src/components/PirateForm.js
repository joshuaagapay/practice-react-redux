import React from 'react'
import { connect } from 'react-redux'


class PirateForm extends React.Component{
  state = {
    name: null,
    age: null,
    position: null
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value,
    });    
  }

  submitChange = (e) =>{
    e.preventDefault();

    let newPirates = {};

    newPirates.id = Math.random();
    newPirates.name = this.state.name;
    newPirates.age = this.state.age;
    newPirates.position = this.state.position;
    
    this.props.addPirates(newPirates);
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
    addPirates: (users) => {
      dispatch({type:'ADD_USERS', users:users})
      
    }
  }
}

export default connect(null,mapDispatchToProps)(PirateForm)