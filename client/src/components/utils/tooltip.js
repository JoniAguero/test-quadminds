import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

function Tooltips(props) {

  return (
    <Tooltip title={props.title} aria-label={props.title}>
      {props.children}
    </Tooltip>
  );
}

export default Tooltips;