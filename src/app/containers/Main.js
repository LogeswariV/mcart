import React,{Component} from "react"
import {Route,Switch} from "react-router-dom"
import MainPage from "../components/MainPage"



class Main extends Component{
	render(){
		return(
			<div>
			<Switch>
			<Route path="/" exact component={MainPage}/>
			</Switch>
			</div>
			)
	}

}
export default Main;