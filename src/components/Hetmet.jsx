import React from 'react';
import PropTypes from 'prop-types';

Hetmet.propTypes = {
    title: PropTypes.string.isRequired
};

function Hetmet(props) {
    document.title = 'Yolo - ' + props.title


    return (
        <div>
            {
                props.children
            }
        </div>
    );
}

export default Hetmet;