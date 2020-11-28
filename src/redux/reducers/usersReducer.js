// Действия над пользователями.
export default (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS':
      return action.users?.map(user => {
        return { ...user, isSelected: user.isSelected || false };
      });
    case 'UPDATE_IS_SELECTED':
      return state.map(user => {
        return { ...user, isSelected: action.ids.includes(user.id) };
      });
    default: return state;
  }
}