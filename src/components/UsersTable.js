import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as usersApi from '../api/users';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { CustomPagination } from './CustomPagination';
import { SelectedUsers } from './SelectedUsers';
import { Card, makeStyles } from '@material-ui/core';

// Настройки колонок и шапки таблицы.
const columns = [
  { field: 'firstname', headerName: 'Имя' },
  { field: 'lastname', headerName: 'Фамилия' },
  { field: 'age', headerName: 'Возраст' },
];

// Хук для связывания стилей с компонентом.
const useStyles = makeStyles({
  thead: {
    backgroundColor: '#32292F',
    color: '#fff',
  },

  tcell: {
    color: 'inherit',
  },
});

// Компонент таблицы пользователей.
export function UsersTable(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  let [users, setUsers] = useState({ loaded: false, list: null });
  useEffect(() => {
    // Использование redux - условие задания, а вообще острой необходимости здесь нет.
    usersApi.getAll().then(response => {
      setUsers({ loaded: true, list: response });
      dispatch({ type: 'SET_USERS', users: response });
    });
  }, [dispatch]);

  const [selected, setSelected] = useState([]);
  useEffect(() => {
    dispatch({
      type: 'UPDATE_IS_SELECTED',
      ids: selected,
    });
  }, [selected, dispatch]);

  // Обработчик события выбора строки.
  const handleSelectRow = (id, checked) => {
    setSelected(checked ? [...selected, id] : selected.filter(selectedId => selectedId !== id));
  }

  // Обработчик события выбора всех строк.
  const handleSelectAllClick = checked => {
    setSelected(checked ? users.list.map(n => n.id) : []);
  };

  // Пагинация.
  const pageSize = 5;
  const [page, setPage] = React.useState(1);

  // Обработчик события переключения страницы.
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  if (!users.loaded) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead className={classes.thead}>
            <TableRow>
              <TableCell padding="checkbox" className={classes.tcell}>
                <Checkbox
                  className={classes.tcell}
                  indeterminate={selected.length > 0 && selected.length < users.list.length}
                  checked={users.list.length > 0 && selected.length === users.list.length}
                  onChange={e => handleSelectAllClick(e.target.checked)}
                />
              </TableCell>
              {columns.map((headCell, index) => (
                <TableCell key={index} className={classes.tcell}>
                  {headCell.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.list.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize).map((row, index) => {
              return <TableRow key={index} selected={selected.includes(row.id)}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.includes(row.id)}
                    onChange={e => handleSelectRow(row.id, e.target.checked)}
                  />
                </TableCell>
                {columns.map((col, index) => <TableCell key={index} align="left">{row[col.field]}</TableCell>)}
              </TableRow>
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <CustomPagination
          pagination={{
            page,
            rowCount: users.list.length,
            pageSize,
          }}
          api={{
            setPage: handleChangePage
          }}
        />
        <SelectedUsers />
      </div>
    </Card>
  );
}