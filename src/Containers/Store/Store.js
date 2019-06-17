import React, { Component } from 'react';
import axios from 'axios';
import Categories from '../../Components/Categories/Categories';
import PostContent from '../PostContent/PostContent';
import Cart from '../Cart/Cart';
import './Store.css';
import Aux from '../../Hoc/auxilary/auxilary';
import {Route,Link} from 'react-router-dom';





class Store extends Component{

    state={
        categories:[],
        showCategories:true,
        catClick:false,
        posts:[],
        categoryClicked:'',
        cartItems:[]
      //  showCart:false
       

    }

    componentDidMount(){
        //to avoid calling of the function again:state change should not be done
        if(this.state.showCategories){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
               console.log(response.data);
                this.setState({categories:response.data,showCategories:false});
                
            })
        }
       
    }

    componentDidUpdate(){
        if(this.state.catClick){
            axios.get("https://jsonplaceholder.typicode.com/posts/?userId="+this.state.categoryClicked)
            .then(response=>{
                console.log(response.data);
                this.setState({posts:response.data, catClick:false});
                //else isCategoryClicked=false and post value is null check implement
            })
        }
    }

    postsOnCategoryClick=(event)=>{
        this.setState({catClick:true,categoryClicked:event.target.id});      
    }

  
    addToCart=(item)=>{
        
     const content= this.state.cartItems;
     content.push(item);
      this.setState({
          cartItems:content
      })
      console.log(this.state.cartItems);

    }
    toggleCart=()=>{
        
        this.setState({
            showCart:!(this.state.showCart)
        });
    }


    render(){
        
       let categories=<Categories/>; 
        if(this.state.categories){
             categories=<Categories click={this.postsOnCategoryClick} data={this.state.categories}></Categories>
        }
        
        let posts=<PostContent />
        if(this.state.posts){
            posts=<PostContent add={this.addToCart} categoryClicked={this.state.categoryClicked} data={this.state.posts}></PostContent>
        }
      //  let cartButton=<button onClick={this.toggleCart}>View Cart</button>
        
      //  let cart='';
       // if(this.state.showCart){
           let  cart=<Cart data={this.state.cartItems}></Cart>
      //  }
       
        return (
            <div>
                <div className="navBar">
                <Link to="/">Home</Link>
                <Link to="/Store">Store</Link>
                <Link to="/Cart">Cart</Link>
                </div>
                <Route path="/" exact render={()=><h1>WELCOME TO DEMO APP</h1>}></Route>
                <Route path="/Store" exact render={()=>{return (<Aux>{categories}{posts}</Aux>)}}></Route>
                <Route path="/Cart" render={()=>cart}></Route>
                
                
                
            
            </div>
            
            
        
        );
    }
}

export default Store;