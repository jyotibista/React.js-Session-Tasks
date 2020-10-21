import React,{Component} from 'react';

class Counter extends Component{
     constructor(){
         super()
         this.state = {
             count:0,
             msg: "Counter",
         }
     }
      increment(){
          this.setState(
              {
                 count: this.state.count + 2,
                 msg : "Incrementing",
              }
          )
        }

        decrement(){
            if (this.state.count === 0){
                 this.setState(
                        {
                        count: 0,
                        msg: "Value should not be less than zero",
                     })
                }else{
                    this.setState({
                        count: this.state.count -1,
                        msg : "Decrementing",
                    })
                }
        }       
         reset(){
                this.setState(
                    {
                        count: 0,
                        msg : "Click Again!"
                    })
                }
        
        render(){
            return(
                <div>
                    <h1> Count = {this.state.count}</h1>
                    <h3> {this.state.msg}</h3>
                    <button className="btn btn-success btn-lg" onClick={() => this.increment()}> Increment</button>
                    <button className="btn btn-success btn-lg" onClick={() => this.decrement()}> Decrement</button>
                    <button className="btn btn-success btn-lg" onClick={() => this.reset()}> Reset</button>
                </div>
            )
        }
    }
    

    

export default Counter