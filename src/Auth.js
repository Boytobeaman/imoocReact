import React from 'react';
import { connect } from 'react-redux';
import { login } from './Auth.redux';
import { Redirect } from 'react-router-dom';

@connect(
    state=>state.auth,
    {login}
)
class Auth extends React.Component{
    render(){
        return (
            <div>
                { this.props.isAuth? <Redirect to="/dashboard"></Redirect> : null}
                <h2>you need to login to see the content</h2>
                <button onClick={this.props.login}>Login</button>
            </div>
        )


    }
}

export default Auth