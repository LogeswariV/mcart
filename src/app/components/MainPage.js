import React,{Component} from "react"
import  "./main.css"
import Footer from "./footer"



class MainPage extends Component{
	constructor(props){
        super(props);
        this.state={
        	items:'',
            addedItems:[],
            total:0,
            Qty:0
        }
    }
    componentDidMount(){  	
    	const fetchPromise = fetch("http://localhost:3000/Product");
		fetchPromise.then(response => {
		  return response.json();
		}).then(products => {
		  this.setState({items:products})
		});
	}	
	handleAddtoCart = (id) =>{
			let filtereditem =  this.state.items.find(item=> item.id === id)
			let item_quantity = this.state.items[id-1].Quantity
			let item_price = this.state.items[id-1].Price
			filtereditem.Quantity = 1
			this.setState({
			  item_quantity: 1
			})
			this.setState({
				total:this.state.total+item_price
			})
			this.setState({
				Qty:this.state.Qty+1
			})
	        let array_value = this.state.addedItems.push(filtereditem)
	        
	}
	handlePlus = (id) =>{
			let addmore = this.state.addedItems.find(item=> item.id === id)
			if(addmore){
				addmore.Quantity = addmore.Quantity+1
				let item_quantity = this.state.items[id-1].Quantity
				let item_price = this.state.items[id-1].Price
				this.setState({
				  item_quantity: item_quantity+1
				})
				this.setState({
					total:this.state.total+item_price
				})
				this.setState({
					Qty:this.state.Qty + 1
				})
			}
			
	}
	handleMinus = (id) =>{
			let removeitem = this.state.addedItems.find(item=> item.id === id)
			if(removeitem){
				removeitem.Quantity = removeitem.Quantity-1
				let item_quantity = this.state.items[id-1].Quantity
				let item_price = this.state.items[id-1].Price
				this.setState({
				  item_quantity: item_quantity-1
				})
				this.setState({
					total:this.state.total-item_price
				})
				this.setState({
					Qty:this.state.Qty - 1
				})
			}
	
	}
			
	render(){
		return(
			<div>
				<h4 align="center">Shopping</h4>
				<div className="shopping-cart">
					{this.state.items.length && this.state.items.map((item)=>{
						return(
							<div className="container" key={item.id}>
								<div >
							  		<img className="img" src="https://www.archlinux.org/static/vector_tux.864e6cdcc23e.png" />
							 	 	<p className="offerPercent" align="center"><b>{item.OfferText}</b></p>
							 	 </div>
							  <div className="text">
							  <span className="spacing">{item.BrandName}</span>
							  <p className="spacing">{item.ProductName}</p>
							  <p className="spacing">{item.MRP}</p>
							  <p className="spacing">{item.Price}</p>
							  {item.Quantity === 0 ?  <button className="addCartButton" onClick={()=>{this.handleAddtoCart(item.id)}}>Add to Cart</button> : 
							  <span>
							  	 <button className="plus-minusButton" onClick={()=>{this.handleMinus(item.id)}}>-</button>
								  <span>{item.Quantity}</span>
								  <button className="plus-minusButton" onClick={()=>{this.handlePlus(item.id)}}>+</button>
							  </span>
							    }
							</div>
							</div>
							)
					})}
				</div>
				<Footer Qty={this.state.Qty} Total={this.state.total}/>
			</div>
		)
	}
}
export default MainPage;