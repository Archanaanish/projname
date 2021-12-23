import React from 'react';

class Card extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state={
            count:0,
            deliveryOption:true
        
            


        }
        //this.increment=this.increment.bind(this)//
       // this.increment=this.increment.bind(this)//
    }
    increment=()=>{
        this.setState({count:this.state.count+1} )
    }
    decrement=()=>{
        this.setState({count:this.state.count-1} )
    }
     toggle=()=>{ 
         this.setState({deliveryOption:this.state.deliveryOption?!(true):!(false)}) 
        
    }
   
    render(){
        return(  
           
        
        <div className="card text-center">
            
                
           <div className="images bg-info pt-5" >
         <img src={this.props.imgSource}></img><br></br><br></br>
         </div>
         
         
         <div className="card-body bg-info">
        

            <a className='bg-warning text-dark' href={this.props.buyLink}><strong>Click here to buy</strong></a>
            <h2>{this.props.price}</h2>
            <button className='btn-warning' onClick={this.increment}>+</button>
            {this.state.count}
            <button className='btn-warning' onClick={this.decrement}>-</button></div>
             {this.state.deliveryOption?<h3 className="bg-info m-0">Express Delivery</h3>:<h3 className="bg-info m-0">Standard Delivery</h3>} 
            <div className="footer bg-info pb-4">
           
            <button className='btn btn-warning mt-3 ' onClick={this.toggle}><strong>Change Delivery Option</strong></button></div>
             <div  className="btns bg-info">
               <button className="m-2 btn btn-outline-dark "><strong>Buy Now</strong></button>
               <button className="m-2 btn btn-outline-dark "><strong>Add to Cart</strong></button>
               </div>
           
           
            </div>
           
            )
    }
 
        



}
export default Card;