import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 2.2;
  letter-spacing: 0.01071em;
  margin: 0 1.2em;
  display: inline-block;
  width: calc(50% - 3em);

  @media only screen and (max-width: 768px) {
    width: calc(100% - 2em);
  }
`;

// Компонент списка выбранных пользователей.
export function SelectedUsers(props) {
  const selectedUsers = useSelector(state => state.users
    .filter(user => user.isSelected)
    .map(user => user.firstname)
    .join(', '));

  if (!selectedUsers) {
    return null;
  }

  return <Container {...props}>
    <p>{`Пользователи: ${selectedUsers}`}</p>
  </Container>
}