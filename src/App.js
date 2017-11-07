import React, { Component } from 'react';

import {Button, List} from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css'

// import {createStore} from 'redux';

class App extends Component {
  render() {
    const boss= 'liyunlong'
    return (
      <div>
        <h2>dulituan， leader{boss}</h2>
        <FirstCamp boss='fistBoss'></FirstCamp>
        <Cavalry boss='Sun Desheng'></Cavalry>
      </div>
    );
  }
}
function Cavalry(props) {
  return <h2>cavalry leader {props.boss} charge forward</h2>
}
class FirstCamp extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      soldiers: ['soldier one','soldier two', 'soldier three']
    }
    this.addSoldier = this.addSoldier.bind(this)
  }
  addSoldier(){
    this.setState({
      soldiers: [...this.state.soldiers, 'new soldier'+Math.random()]
    })
  }
  render(){
    return (
      <div>
        <h2>firstCamp leader {this.props.boss}</h2>
        <Button type='primary' onClick={this.addSoldier}>add soldier</Button>
        <List
          renderHeader={()=>"soldier list"}
        >
          {this.state.soldiers.map(v=>{
            return (
              <List.Item key={v}>
              {v}
              </List.Item>
            )
          })}
        </List>
      </div>
    )
  }
}

export default App;
