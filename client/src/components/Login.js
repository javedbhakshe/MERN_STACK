import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class LoginComp extends Component{

	constructor(props){
		super(props);
		
	}


	render(){
		return(
			<form>
				<div className="col-lg-4 form-group">
				    <label >Username</label>
				    <input type="text" className="form-control" placeholder="Enter username" />
			    	<label >password</label>
				    <input type="password" className="form-control" placeholder="Enter password" />
			  		<button type="submit" className="btn btn-primary">Submit</button>
			  	</div>
			</form>
		);
	}
}

export default LoginComp;