import React from 'react'
import Users from './Users'
import PirateForm from './PirateForm'
import { connect } from 'react-redux'

class Home extends React.Component {
  
  render(){
    const { users } = this.props;

    return(
      <div className="container">
        <h1>Hello New World</h1>
        <PirateForm />
        <Users users={users} deleteUsers={this.props.deleteUsers}/>
      </div>
    )
  }
}



const mapStateToProps = state =>({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  deleteUsers: (id) =>{
    dispatch({type:'DELETE_USERS', id: id})
  }

})

export default connect(mapStateToProps,mapDispatchToProps)(Home);