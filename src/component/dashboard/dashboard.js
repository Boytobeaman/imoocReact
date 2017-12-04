import React from 'react'
import {connect} from 'react-redux'
import{NavBar} from 'antd-mobile'
import {Switch, Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'

function Msg() {
	return <h2>Message homepage</h2>
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
				<NavBar mode='dard' className='fixed-header'>{navList.find(v=>v.path==pathname).title}</NavBar>
				<div style={{marginTop:45}}>
					<Switch>
						{navList.map(v=>(
							<Route key={v.path} path={v.path} component={v.component}></Route>
						))}
					</Switch>
				</div>
				<h5>test</h5>
				<NavLinkBar data={navList}></NavLinkBar>
				<h2>footer</h2>
			</div>
			
		)
	}
}

export default Dashbord;