import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Channels from './Components/Channels/Channel';
import News from './Components/News/News';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      route:'home',
      id:null,
      news:[]
    }
  }
  onChannelSelect =(id)=>{

    this.setState({id:id},this.callAPI(id));
  }
  callAPI(id){
    fetch(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=b3bb678da39741988a34ecbfee58beed`)
    .then(response=>response.json())
    .then(data=>{this.setState({news:data.articles})})
  }
  render(){
    console.log(this.state.news);
    return (
      <div className="App">
        <NavBar />
        {
          this.state.route === 'home'
          ? <Channels onChannelSelect={(id)=>{this.onChannelSelect(id)}}/>
          : <News id={this.state.id} news={this.state.news} />
        }        
      </div>
    );
  }
  
}

export default App;



//b3bb678da39741988a34ecbfee58beed