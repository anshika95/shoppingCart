import React, {Component} from 'react';
import CartItems from '../../Components/CartItems/CartItems';

class Cart extends Component{
    state={
        items:[],
        ClickedItem:{},
        showCounter:false
    
    }
    
    constructor(props){
        super(props);
        this.state={
            items:this.props.data,
        
        }
    }

  
    deleteCartItems=(id)=>{
        let  newItems=this.state.items;
        // console.log(event.currentTarget)
        // console.log(event.currentTarget.id)
        console.log(id);
        let index=newItems.findIndex(item=>{return item.id===id});
        newItems.splice(index,1);
       //newItems.filter(item=>{return item.id!== event.target.name})
        this.setState({
            items:newItems
        })

    

    }

    inputHandler=(id)=>{
        this.setState({showCounter:true,ClickedItem:{id:id}});
    }
    updateOrderValue=()=>{
       
        const index=this.state.items.findIndex((item)=>{return item.id===this.state.ClickedItem.id});
        let newItems=[...this.state.items];
        newItems[index].postCount=this.state.ClickedItem.postCount;
        this.setState({items:newItems,ClickedItem:{},showCounter:false});
    }
    
    inputHandler2=(event)=>{
        this.setState({
            ClickedItem:{
                ...this.state.ClickedItem,
                postCount:event.target.value
            }
        })
    }
    

    render(){
       
            let Note='Select the posts to add in CART';
            let cartItems='';
            if(this.state.items.length>0){
                Note='Click on the items to delete!!';
                cartItems=<CartItems data={this.state.items} update={this.inputHandler} delete={this.deleteCartItems}></CartItems>
                
                
            }       
            let UpdateDiv='';
            if(this.state.showCounter){
                 UpdateDiv=<div> New Order Value:
                            <input onChange={this.inputHandler2}></input>
                            <button onClick={this.updateOrderValue}>Update</button>
                            </div>

            }
        
            
            
        
            
        return (
            <fieldset>
            <legend>Cart:</legend>   
            {UpdateDiv}  
            {Note}
            {cartItems}                   
            </fieldset>
        );
               
                
            
        
    }

}

export default Cart;