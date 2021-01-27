import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

const propTypes = {};
const defaultProps = {};

export default function About() {
  return (
    <React.Fragment>
      <p>This Is About Page</p>
      <Button />
    </React.Fragment>
  );
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;