import React, {Fragment} from 'react'


//@AsyncDecorator
export default class PeoplePage extends React.Component {

  state = {
    pageNum: 1,
    nextPage: true,
    loadingPeople: false,
    selectedPerson: undefined,
    people: [],
    data:""
  }
  changeV=(e)=>{
    this.setState({data:e.target.value})
  }
  render () {
    const { nextPage, loadingPeople, people, selectedPerson,data} = this.state
    return (
      <div style={{padding:20,fontSize:25,color:"yellow"}}>
      Planets  的测试数据
        <input style={{padding:20,fontSize:25}} value={data} onChange={this.changeV}/>
      </div>
    )
  }

}
