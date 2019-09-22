import React,{Component} from "react"
import "./main.css"

class ModalPopup extends Component{
	render(){
		return(
			<div id="modal">
			  	<div className="modal-content">
				   	<div className="header">
				     <h2>Payment Confirmation</h2>
				    </div>
				    <div className="copy">
				      <p>Total Amount: {this.props.TotalAmount}</p>
				      <p><b>Transaction SucessFull!</b></p>
				      <a href="/">Close Link</a> 
				     </div>
				</div>
			</div>
			)
	}
}
export default ModalPopup;