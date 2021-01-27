import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default function Navigator() {
  return (
    <React.Fragment>
      <div>
        <ul>
          <li>
            <Link to="Home">Home</Link>
          </li>
          <li>
            <Link to="Contents">Contetns</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

Navigator.propTypes = propTypes;
Navigator.defaultProps = defaultProps;