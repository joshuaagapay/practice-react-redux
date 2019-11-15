import React from 'react';
import UserList from './UserList'

function Users({users, deleteUsers}) {
  
  
  const usersList = users.length 
    ?(users.map((user, index) => {   
      return (
        <UserList key={index} user={user} deleteUsers={deleteUsers} />
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