import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Channels from './Components/Channels/Channel';
import News from './Components/News/News';
import Loader from 'react-loader-spinner';

import './App.css';
let flag=0;
class App extends React.Component {
  constructor(){
    super();
    this.state={
      route:'home',
      channels:[],
      id:null,
      news:[],
      loader:true,
      category:'general',
      country:'us',
      language:'en',
      filterChannels:[]
    }
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/sources?apiKey=b3bb678da39741988a34ecbfee58beed')
    .then(response=>response.json())
    .then(data=>this.setState({channels:data.sources,filterChannels:data.sources,loader:false}))
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
  filterItems = async (val,type)=>{
    console.log(val,type);
    if(flag === 1)
    {
      await this.setState({filterChannels:this.state.channels})
      flag=0;
    }
    switch (type) {
        case 'Category':
          await this.setState({category: val},this.filterAPI(val,type));
          break;
        case 'Language':
          await this.setState({language: val},this.filterAPI(val,type));
          break;
        case 'Country': 
          await this.setState({country: val},this.filterAPI(val,type));
          break;
        default:
          break;
      }
  }
   filterAPI = (val,type)=>{
    console.log("Before Filter",this.state.filterChannels);
    //console.log(val);
    var filterChannels= this.state.filterChannels.filter((channel)=>{
        if(type === "Category")
        {
          flag=1;
          if((channel.country === this.state.country) && (channel.language === this.state.language))
          return (channel.category === val);
        }
        else if(type === "Language")
          {
            flag=1;
            if(channel.category === this.state.category && channel.country === this.state.country)
            return channel.language === val;
          }
        else 
          {
            flag=1;
            if(channel.language === this.state.language && channel.category === this.state.category)
            return channel.country === val ;
          }
    })
     this.setState({filterChannels:filterChannels});
    console.log("After Filter",this.state.filterChannels);

    }
  render(){
    console.log("render",this.state.filterChannels);
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
             <Channels
              filterChannels={this.state.filterChannels}
               onChannelSelect={(id)=>{this.onChannelSelect(id)}}
               filterItems={(val,type)=>{this.filterItems(val,type)}}
              category={this.state.category} language={this.state.language} country={this.state.country} />
             : <News id={this.state.id} news={this.state.news} />)
          ]
        }        
      </div>
    );
  }
  
}

export default App;



//b3bb678da39741988a34ecbfee58beed