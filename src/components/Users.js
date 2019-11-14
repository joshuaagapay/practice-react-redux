import React from 'react';
import UserList from './UserList'
import { Link } from 'react-router-dom'

function Users({users, deleteUsers}) {
  
  
  const usersList = users.length 
    ?(users.map((user, index) => {   
      return (
      <Link to={'/'+ user.id} key={user.id}>
        <UserList user={user} deleteUsers={deleteUsers} />
      </Link>
      )
    }))  
    :(<div className="center"><h3>No Users Yet!</h3></div>)    
      
     
    return(
      <div className="pirate-list">
        {usersList}
      </div>
    )
}


export default Users