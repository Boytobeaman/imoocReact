import React from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem,Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../../redux/user.redux';

@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: "genius"
        };
        this.handleRegister = this.handleRegister.bind(this);
    }
    handleChange(key, val){
        console.log(1);
        this.setState({
            [key]: val
        })
    }
    handleRegister(){
        this.props.register(this.state);
        console.log(this.state)
    }
    login(){
        console.log(this.props);
        this.props.history.push('/login');
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                {this.props.redirectTo? <Redirect to={this.props.redirectTo} />: null}
                <Logo></Logo>
                <h2>Register page</h2>
                <WingBlank>
                    <List>
                        {this.props.msg? <p className="error-msg">{this.props.msg}</p>: null}
                        <InputItem
                            onChange ={v => this.handleChange("user",v)}
                        >UserName</InputItem>
                        <InputItem
                            type="password"
                            onChange ={v => this.handleChange("pwd",v)}
                        >Password</InputItem>
                        <InputItem
                            type="password"
                            onChange ={v => this.handleChange("repeatpwd",v)}
                        >Confirm Password</InputItem>
                    </List>
                    <WhiteSpace />
                    <RadioItem
                        checked={this.state.type === 'genius'}
                        onClick={() => this.handleChange('type','genius')}
                    >
                        Genius
                    </RadioItem>
                    <RadioItem
                        checked={this.state.type === 'boss'}
                        onClick={() => this.handleChange('type','boss')}
                    >
                        Boss
                    </RadioItem>
                    <Button type="primary" onClick={this.handleRegister}>Register</Button>
                    <WhiteSpace />
                    <Button onClick={this.login} type="primary">login</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register;