import React from 'react';
import {Button} from 'react-bootstrap';
import './ChannelList.css';
class ChannelList extends React.Component{
	constructor(props){
		super(props);
		this.state={
		}
	}
	render(){
		const {channels}=this.props;
		//console.log(channels);
		return(
			<div className="channellist_page">
				<div className="">
					<div className="">
						<div className="">
						</div>
						{	

							channels.map((channel)=>{
							
								return(
									<div className="single_channel" key={channel.id}>
										<div className="channel_name">
											<span className="">{channel.name}</span><br />
										</div>
										<div className="channel_description">
											<span className="">{channel.description}</span>
										</div>
										<div className="channel_category">
											<span className="">Category: {channel.category}</span><br />
										</div>
										<div className="channel_country">
											<span className="">Country Code: {channel.country}</span><br />
										</div>
										<div className="news_button">
									      <Button variant="outline-success" onClick={()=>{this.props.onChannelSelect(channel.id)}}>Find News</Button>
										</div>

									</div>
									);
							})
						}
					</div>
				</div>
			</div>
			);
	}
}
export default ChannelList;