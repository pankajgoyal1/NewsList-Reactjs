import React from 'react';
import ChannelFilters from './ChannelFilters';
import ChannelList from './ChannelList';
import './ChannelList.css';

class Channels extends React.Component{
	constructor(props){
		super(props);
		this.state={
			channels:[]
		}
	}
	componentDidMount(){
		fetch('https://newsapi.org/v2/sources?apiKey=b3bb678da39741988a34ecbfee58beed')
		.then(response=>response.json())
		.then(data=>this.setState({channels:data.sources}))
		.catch(err=>console.log(err))
	}
	render(){
		return(
			<div className="channel_page">

				<ChannelFilters />
				<ChannelList onChannelSelect={(id)=>this.props.onChannelSelect(id)} channels={this.state.channels} />
			</div>
			);
	}
}
export default Channels;