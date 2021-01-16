import { connect } from 'react-redux';
import { filterChange } from '../../redux/actions';

import PropTypes from 'prop-types';

function Filter({ filterInput }) {
  const handleInput = e => {
    filterInput(e.currentTarget.value);
  };

  return (
    <label className="label">
      Find contacts by name
      <input
        className="input"
        name="filter"
        type="text"
        onChange={handleInput}
      ></input>
    </label>
  );
}

Filter.propTypes = {
  filterInput: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  filterInput: filter => dispatch(filterChange(filter)),
});

export default connect(null, mapDispatchToProps)(Filter);
