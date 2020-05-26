import {
  CHANGE_SEARCH_FIELD,
  REQUEST_FRIENDS_FAILED,
  REQUEST_FRIENDS_PENDING,
  REQUEST_FRIENDS_SUCCESS,
} from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => (dispatch) => {
  dispatch({
    type: REQUEST_FRIENDS_PENDING,
  });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then((data) =>
      dispatch({
        type: REQUEST_FRIENDS_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: REQUEST_FRIENDS_FAILED,
        payload: error,
      })
    );
};
