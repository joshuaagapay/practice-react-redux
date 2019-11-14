import React from 'react'

function UserList({user, deleteUsers}){
  
  return(
    <div className="post card">
      <div className="card-content done">
      
        <h5><p>Name:{user.name}</p></h5>
        <h5><p>Age:{user.age}</p></h5>
        <h5><p>Position:{user.position}</p></h5>
        <span>
          <button type="button" className="close btn red" onClick={() => {deleteUsers(user.id)}}  >&times;</button>
        </span>
      </div>
    </div>
  )
}

export default UserList