import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/search.scss';

import DrugContainer from '../../containers/DrugContainer';
import Drug from '../Drug/Drug';


const SelectedDrug = ({ idToShow, drugs, ...otherProps }) => (
      <div>
          <Drug
              { ...drugs[idToShow] }
              { ...otherProps }
              removeDetails
          />
        <div className="underscore-element pull-right"></div>
      </div>
);

export default SelectedDrug;