import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard'

@connect(
	state=>state.chatuser,
	{getUserList}
)


class Genius extends React.Component{

	componentDidMount(){
		this.props.getUserList('boss')
	}

	render(){
		console.log("kkk===",this.state)
		console.log("kkkpppp===",this.props)
		const Header = Card.Header;
		const Body = Card.Body;
		return (
			<UserCard userlist={this.props.userList}></UserCard>
		)
	}

}

export default Genius