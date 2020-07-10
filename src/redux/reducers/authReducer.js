import { FETCH_USER } from 'redux/actions/types';

const authReducer = (state = false, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || null;
    default:
      return state;
  }
};

export default authReducer;