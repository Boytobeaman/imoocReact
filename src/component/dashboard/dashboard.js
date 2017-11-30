import React from 'react'
import {connect} from 'react-redux'
import{NavBar} from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'

function Boss() {
	return <h2>Boss homepage</h2>
}
function Genius() {
	return <h2>Genius homepage</h2>
}
function Msg() {
	return <h2>Message homepage</h2>
}
function User() {
	return <h2>User homepage</h2>
}

@connect(
	state=>state
)



class Dashbord extends React.Component{

	render(){
		const {pathname} = this.props.location
		const user = this.props.user
		const navList = [
			{
				path: '/boss',
				text: 'genius',
				icon: 'boss',
				title: 'genius list',
				component: Boss,
				hide: user.type=='genius'
			},
			{
				path: '/genius',
				text: 'boss',
				icon: 'job',
				title: 'Boss list',
				component: Genius,
				hide: user.type=='boss'
			},
			{
				path: '/msg',
				text: 'message',
				icon: 'msg',
				title: 'Message list',
				component: Msg
			},
			{
				path: '/me',
				text: 'me',
				icon: 'user',
				title: 'myself center',
				component: User
			}
		]
		return (
			<div>
				<NavBar mode='dard'>{navList.find(v=>v.path==pathname).title}</NavBar>
				<h2>content</h2>

				<NavLinkBar data={navList}></NavLinkBar>
				<h2>footer</h2>
			</div>
			
		)
	}
}

export default Dashbord;