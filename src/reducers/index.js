import { combineReducers } from 'redux';

const mockState = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
};

function auth() {
  return mockState;
}

export default combineReducers({
  auth,
});
