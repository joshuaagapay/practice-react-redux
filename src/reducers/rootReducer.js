const initState = {
	users: []
}

const rootReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {

    case 'ADD_USERS':
      const users = [action.users, ...state.users];
		  return{
			  ...state,
			  users:users
		  }
    
    case 'DELETE_USERS':
      const newUsers = state.users.filter(element => {
        return action.id !== element.id
      });
  
      return{
        ...state,
        users:newUsers
      }
    default:
      return state;

  }
}

export default rootReducer