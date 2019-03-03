// ./src/layouts/index.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import { Container } from '../styledComponents/layout';

import '../css/main.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Polling App"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header background="background-image: linear-gradient(116deg, #08AEEA 0%, #2AF598 100%)" />
    <Container>{children()}</Container>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
