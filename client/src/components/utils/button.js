import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});
  
const Buttons = (props) => {
    const { classes } = props;
    let template = '';
    console.log(classes);
    switch(props.type){
        case "delete":
            template = <IconButton color="secondary" className={classes.button} aria-label="delete">
                            <Icon>delete</Icon>
                        </IconButton>
        break;
        case "edit":
            template = <IconButton className={classes.button} aria-label="delete">
                            <Icon>edit</Icon>
                        </IconButton>
        break;
        default:
            template='';
    }
    return template
};

Buttons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Buttons);