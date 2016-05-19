// a reducer takes in 2 things:
// 1. the action (information of what happened)
// 2. a copy of current state

function posts(state = [], action) {
  const i = action.index
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return [
        ...state.slice(0, i), // before the one changing
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1)
      ]
    default:
      return state
  }
}

export default posts;
