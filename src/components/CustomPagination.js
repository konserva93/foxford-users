import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

// Компонент кастомной пагинации в таблице.
export function CustomPagination(props) {
  const { pagination, api } = props;
  const classes = useStyles();

  let pagesCount = Math.ceil(pagination.rowCount / pagination.pageSize);

  return pagesCount > 1 ?
    <Pagination
      className={classes.pagination}
      size="small"
      page={pagination.page}
      count={pagesCount}
      defaultPage={0}
      siblingCount={0}
      onChange={(event, value) => api.setPage(event, value)}
    /> :
    null;
}

const useStyles = makeStyles({
  pagination: {
    display: 'flex',
    float: 'right',
    height: '100%',
    maxWidth: '50%',
    alignItems: 'center',
    padding: '1em 0',
    marginRight: '1em',
  },
});

CustomPagination.propTypes = {
  api: PropTypes.shape({
    setPage: PropTypes.func.isRequired,
  }).isRequired,

  pagination: PropTypes.shape({
    page: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    rowCount: PropTypes.number.isRequired,
  }).isRequired,
};