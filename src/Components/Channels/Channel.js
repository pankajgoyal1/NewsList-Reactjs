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

				<ChannelFilters />
				<ChannelList onChannelSelect={(id)=>this.props.onChannelSelect(id)} channels={this.props.channels} />
			</div>
			);
	}
}
export default Channels;