import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import LoginComp from './components/Login';


class App extends Component{


	render(){
		return(
			<div>
				<LoginComp />
			</div>
		);
	}
}

ReactDOM.render(<App />,document.querySelector("#root"))