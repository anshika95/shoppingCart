import React, {Component} from 'react';


class PostContent extends Component{
    state={
        openCounter:false,
        itemClicked:[],
        error:''
    }

    showCounterDiv=(event)=>{
        //open the counter field
        const item={
            id:event.target.id,
            title:event.target.innerText
        }
        this.setState(
            {
                openCounter:true,
                itemClicked:item
            
            });              
    }

    setPostCount=(event)=>{
       
            this.setState({
                itemClicked:{
                    ...this.state.itemClicked,
                    postCount:event.target.value
                },
                error:''
            });
        
     
    }

    addButtonHandler=()=>{
      
        if(this.state.itemClicked.postCount){
            if(this.state.itemClicked.postCount<6 && this.state.itemClicked.postCount>0){
                this.props.add(this.state.itemClicked);
                this.setState({itemClicked:[],openCounter:false})
            }
            else{
                this.setState({error:'Please enter Correct Value Between 1-5'});
            }
           
            
        }    
        else{
            this.setState({error:'Please enter the Order Value'});
        }
       
    }
    

    render(){
        const style={      
            display:'block',
            margin:'10px',
            padding:'10px',
            backgroundColor:'#FEF9E2',
            border:'1px solid green',
            color:'black',
            borderRadius:'5px',
            cursor:'pointer'                       
            }
        const counterStyle={
                textAlign:'center',
                borderRadius:'5px',
                width:'200px',
                height: '25px',
                margin: '15px'
            }

        const styleButton={
            border:'1px solid blue',
            borderRadius:'5px',
            padding:'5px',
            backgroundColor:'#63C5DA',
            margin:'10px',
            width:'100px'
        }
        
        let counter='';
        if(this.state.openCounter){

            counter=<div>Select Number of Posts:
                    <div >
                    <input style={counterStyle} onChange={this.setPostCount} type="number"></input>
                    <button style={styleButton} onClick={this.addButtonHandler}>Add</button>
                    </div>
                    </div>
        }
         
            
        let content="";
        let Note='Click on a website to show the posts!!';
        if(this.props.data.length>0){
            Note="Click on the post to add in Cart!!";
            content=Object.keys(this.props.data)
            .map(contentkey=>{
                return (
                    <div style={style} onClick={this.showCounterDiv} id={this.props.categoryClicked+contentkey}  key={contentkey}>{this.props.data[contentkey]['title']}</div>              
                );
            });
        }

        if(this.state.openCounter){
            Note="You can select Another Post!!"
        }

        const errorStyle={
            color:'red'
        }
        
    
        return (
            <fieldset>
            <legend>Posts:</legend>
            {counter}
            <div style={errorStyle}>{this.state.error}</div>
            {Note}         
            {content}
            </fieldset>
        );
    }
}


export default PostContent;