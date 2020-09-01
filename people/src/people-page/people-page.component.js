import React, {Fragment} from 'react'
import AsyncDecorator from 'async-decorator/rx6'
import { Scoped } from 'kremling'
import queryString from 'query-string'
import { find } from 'lodash'
import { getPeople } from '../utils/api.js'
import styles from './people-page.krem.css'
import PeopleList from '../people-list/people-list.component.js'
import SelectedPerson from './selected-person/selected-person.component.js'

@AsyncDecorator
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
      <div style={{padding:20,fontSize:25}}>
      Page 1 的测试数据
        <input style={{padding:20,fontSize:25}} value={data} onChange={this.changeV}/>
      </div>
    )
  }

}
