import React from 'react'
import {connect} from 'react-redux'
import {Result, List, WhiteSpace, Modal} from 'antd-mobile'

@connect(
	state=>state.user
)

class User extends React.Component{

	constructor(props){
		super(props)
		this.logout = this.logout.bind(this)
	}
	logout(){
		console.log("logout")
	}
	render(){
		const props = this.props;
		const Item = List.Item;
		const Brief = Item.Brief;
		return props.user?(
			<div>
				<Result
					img={<img src={require(`../img/${props.avatar}.png`)} style={{width:50}} alt=""/>}
					title = {props.user}
					message = {props.type == 'boss'?props.company:null}
				>
				</Result>
				<List renderHeader={()=>'brief introduction'}>
					<Item
						multipleLine
					>
						{props.title}
						{this.props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
						{props.money?<Brief>Salary:{props.money}</Brief>:null}
					</Item>
				</List>
				<WhiteSpace></WhiteSpace>
				<List>
					<Item onClick={this.logout}>Logout</Item>
				</List>

			</div>
		):null
		
	}
}

export default User