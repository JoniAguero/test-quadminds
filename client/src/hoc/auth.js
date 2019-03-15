import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { auth } from '../actions/user_actions';

export default function(ComposedClass){
    class ExampleHOC extends Component {

        state = {
            loading: true
        }

        componentDidMount = () => {
            this.props.dispatch(auth()).then( () => this.setState({loading: false}) );
        }

        render() {
            if(this.state.loading){
                return (
                    <div className="main_loader">
                        <CircularProgress style={{color:'#2196F3'}} thickness={7}/> 
                    </div>
                )
            }
            return (
               <ComposedClass {...this.props} />
            );
        }
    }

    const mapStateToProps = (state) => {
        return {
            user: state.user
        }
    }

    return connect(mapStateToProps)(ExampleHOC)
}
