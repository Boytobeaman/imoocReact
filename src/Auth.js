import React from 'react';
import { connect } from 'react-redux';
import { login,getUserData } from './Auth.redux';
import { Redirect } from 'react-router-dom';
// import axios from 'axios';

@connect(
    state=>state.auth,
    {login, getUserData}
)
class Auth extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         data: {}
    //     }
    // }
    componentDidMount(){
        this.props.getUserData();
    }
    render(){
        return (
            <div>
                { this.props.isAuth? <Redirect to="/dashboard"></Redirect> : null}
                <h2>my name is {this.props.user},my age is {this.props.age}</h2>
                <h2>you need to login to see the content</h2>
                <button onClick={this.props.login}>Login</button>
            </div>
        )


    }
}

export default Auth