
import React from 'react';
import PropTypes from 'prop-types';
import {STRING_ARRAY} from '../../constants'

function TypeProps({movies, numb, string, bool, func}) {

  // console.log(numb);
  return (
    <div>
      TypeProps
    </div>
  )
}

export default TypeProps

TypeProps.propTypes = {
  movies: PropTypes.array,
  numb: PropTypes.number,
  string: PropTypes.oneOf(STRING_ARRAY),
  bool: PropTypes.bool,
  func: PropTypes.func,
}

TypeProps.defaultProps = {
  numb: 100
}