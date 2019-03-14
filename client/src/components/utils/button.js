import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';

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
    switch(props.type){
        case "delete":
            template = <IconButton color="secondary" className={classes.button} aria-label="delete" onClick={()=>{
                            props.runAction();
                        }}>
                            <Icon className="note-icon">delete</Icon>
                        </IconButton>
        break;
        case "edit":
            template = <IconButton className={classes.button} aria-label="delete">
                            <Icon className="note-icon">edit</Icon>
                        </IconButton>
        break;
        case "new":
            template = <Link to={props.linkTo} className="link">
                            <Fab color="secondary" aria-label="Add" className={classes.margin}>
                                <Icon>add</Icon>
                            </Fab>
                        </Link>
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