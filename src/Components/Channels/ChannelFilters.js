import React from 'react';
import './Filters.css';
import FilterType from './filter';
class ChannelFilters extends React.Component{
	componentDidMount(){
		
	}
	render(){
		const filters=["Country","Category","Language"];
		return(
			<div className="channelfilters_page">
				<div className="filters">
					<div className="filter1">
						<div className="filter7">
							<h4>Filters</h4>
						</div>
						{	

							filters.map((filter,i)=>{
								return(
									<FilterType key={i} name={filter} />
									);
							})
						}
					</div>
				</div>
			</div>
			);
	}
}
export default ChannelFilters;