import React, { PropTypes } from 'react';

import Result from 'Result';

const ListResults = props => (
  <ul className="results">
    {props.results.map(result => (
      <Result
        key={result.id}
        {...result}
      />
    ))}
  </ul>
);

ListResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListResults;
