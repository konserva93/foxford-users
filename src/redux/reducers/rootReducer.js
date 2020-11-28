import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

// Объединяет редьюсеры, выдавая каждому часть стора.
// Можно было сделать проще, но это же тестовое ;) В проде так и выглядит, когда дерево сложное.
export default combineReducers({
  users: usersReducer,
})