import React from 'react';
import PropTypes from 'prop-types';


const Frame = ({children}) => <div className={'frame'}>{children}</div>;


Frame.propTypes = {
    children: PropTypes.object,
};


export default Frame;