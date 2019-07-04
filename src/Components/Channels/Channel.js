import React from 'react';
import ChannelFilters from './ChannelFilters';
import ChannelList from './ChannelList';
import './ChannelList.css';

class Channels extends React.Component{
	constructor(props){
		super(props);
		this.state={
		}
	}
	
	render(){
		return(
			<div className="channel_page">

				<ChannelFilters filterItems={(val,type)=>this.props.filterItems(val,type)} category={this.props.category} language={this.props.language} country={this.props.country} />
				<ChannelList onChannelSelect={(id)=>this.props.onChannelSelect(id)} channels={this.props.filterChannels} />
			</div>
			);
	}
}
export default Channels;