import React,{Component} from "react"
import ModalPopup from "./modalPopup"
import "./main.css"


class Footer extends Component{
	constructor(props){
        super(props);
        this.state={
        	showComponent:false,
        }
        this._onButtonClick = this._onButtonClick.bind(this);
    }
    _onButtonClick(){
    	this.setState({
    		showComponent:true,
    	})
    }
	render(){
		return(
			<div className="footer">
				  <p className="footerTotal">Qty:{this.props.Qty}<br></br>
				  Total:{this.props.Total}
				  </p>
				  
				  	{this.props.Qty === 0 ? 
				  		<div>
				  		<button className="footerCheckout disabled" disabled>
	  						Checkout
				  		</button>	
				  		</div>
				  		:	
				  		<div>
				  		<button className="footerCheckout" onClick={this._onButtonClick}>Checkout</button>	
				  		{this.state.showComponent ? <ModalPopup TotalAmount={this.props.Total}/> : null }
				  		</div>
				  				  	}
					  
			</div>
			)
	}
}
export default Footer;