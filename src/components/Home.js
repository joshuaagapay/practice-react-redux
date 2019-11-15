import React from 'react'
import Users from './Users'
import UsersForm from './UsersForm'
import { connect } from 'react-redux'
import {deleteUsers} from '../actions/usersActions'



class Home extends React.Component {
  
  render(){
    const { users } = this.props;

    return(
      <div className="container">
        <h1>Hello New World</h1>
        <UsersForm />
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
    dispatch(deleteUsers(id))
  }

})

export default connect(mapStateToProps,mapDispatchToProps)(Home);