import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
    constructor(props) {
        super(props);
        let today = Date.now();
        let fathersday = Date.parse('June 16, 2019 00:00:00');
        var isItTime = (today > fathersday);
        this.state = {
            isItTime: isItTime,
            clicked: false,
            remind: false,
        };
    
    }
    componentDidMount(){
        setTimeout(() => this.reminder(),10000);
    }
    
    reminder(){
        if (!(this.state.clicked)){
            this.setState({remind:true,});
        }
    }
    
    
    handleClick = (e) => {
        console.log("clicked!");
        this.setState({
            clicked:true,
        });
    }
    
    render() {
        let animation = ((this.state.isItTime) ? "animate":"animate");
        console.log(animation);
        return (
        <div className="App">
          <header className="App-header">
            
            <PartyPopper 
                isItTime={this.state.isItTime} 
                handleClick={this.handleClick}
                remind={this.state.remind}/>
            <Text isItTime={this.state.isItTime} clicked={this.state.clicked}/>
          </header>
        </div>
        );
    }
}

class PartyPopper extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        let reminder=this.props.remind ? "hint, click the popper!":"";
        
        console.log(reminder);
        if (this.props.isItTime){
            return(
            
            <div class="centerStage" onClick={this.props.handleClick}>
                    <p>{reminder}</p>
                <h1>
                    <span role="img" aria-label="party-popper">🎉</span>
                </h1>
            </div>
            );
        } else {
            return(
            <div class='centerStage'>
                
                    
                <h1>
                    <span role="img" aria-label="man crossing arms">🙅‍♂️</span>
                </h1>
            </div>
            );
        }

    }
}

function Text(props){
    
    var title = "";
    if (props.isItTime){
        title = "Happy Father's Day!";
    } else {
        title = "Wait until Father's Day to open!";
    }
    return(
        <div>
            <h2>{title}</h2>
            <FathersDayMessage clicked={props.clicked}/>
            <br></br>
        </div>
    );
}

function FathersDayMessage(props){
    if(props.clicked){
    return(<p> Hi Dad!<br></br> I have to admit that I forgot to mail you a fathers day card this year... so I e-mailed one! And it's not quite handmade/hand wirtten, but hey, I made it myself! <br></br><br></br>Wanted to say thanks for being a great father, and I hope you have a great day today! I'll give you a call later, but it'll likely be in the afternoon for you as it's a Sunday morning and I'm likely sleeping in here in PST. <br></br><br></br>Talk soon! Love,<br></br><br></br>Ben</p>);
    }
    else{
        return(<p></p>);
    }
}

export default App;
