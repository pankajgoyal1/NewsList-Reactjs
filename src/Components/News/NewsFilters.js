import React from 'react';
class NewsFilters extends React.Component{
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
									<div />
									);
							})
						}
					</div>
				</div>
			</div>
			);
	}
}
export default NewsFilters;