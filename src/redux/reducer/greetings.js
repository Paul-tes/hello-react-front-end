import axios from 'axios';

const GET_GREETING = 'GET_GREETING';
const API_URL = 'http://localhost:3000/greetings/random_greeting';

const getGreeting = (payload) => ({
  type: GET_GREETING,
  payload,
});

const fetchGreetingFromApi = () => (dispatch) => {
  axios.get(API_URL).then((response) => {
    const greeting = response.data;
    dispatch(getGreeting(greeting));
  });
};

const greetingReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export { greetingReducer, fetchGreetingFromApi };
