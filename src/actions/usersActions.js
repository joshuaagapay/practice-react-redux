import {ADD_USERS} from './types'
import {DELETE_USERS} from './types'


export const addUsers = (users) => {
  return{
    users,
    type: ADD_USERS
  }
}

export const deleteUsers = (id) => {
  return{
    id,
    type: DELETE_USERS
  }
}