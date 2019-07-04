import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Channels from './Components/Channels/Channel';
import News from './Components/News/News';
import Loader from 'react-loader-spinner';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      route:'home',
      channels:[],
      id:null,
      news:[],
      loader:true
    }
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/sources?apiKey=b3bb678da39741988a34ecbfee58beed')
    .then(response=>response.json())
    .then(data=>this.setState({channels:data.sources,loader:false}))
    .catch(err=>console.log(err))
  }
  onChannelSelect =(id)=>{
    this.setState({loader:true});
    this.setState({id:id},this.callAPI(id));
    this.setState({route:'news'})
  }
  callAPI(id){
    fetch(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=b3bb678da39741988a34ecbfee58beed`)
    .then(response=>response.json())
    .then(data=>{this.setState({news:data.articles,loader:false})})
  }
  render(){
    console.log(this.state.route);
    return (
      <div className="App">
        <NavBar />
        {
          this.state.loader === true
          ? <Loader 
               type="ThreeDots"
               color="#00BFFF"
               height="100" 
               width="100"
            />  
          :[
            (this.state.route === 'home'
             ?
             <Channels channels={this.state.channels} onChannelSelect={(id)=>{this.onChannelSelect(id)}}/>
             : <News id={this.state.id} news={this.state.news} />)
          ]
        }        
      </div>
    );
  }
  
}

export default App;



//b3bb678da39741988a34ecbfee58beed