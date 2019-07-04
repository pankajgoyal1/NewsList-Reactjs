import React from 'react';
import './Filters.css';
import FilterOptions from './filter';
class ChannelFilters extends React.Component{
	constructor(props){
		super(props);
		this.state={
		}
	}
	componentDidMount(){
		
	}
	
	
	render(){
		//console.log(this.props.category);
		const filters =[
			{
				"type":"Category",
				content:["business","entertainment", "general", "health", "science", "sports", "technology"]
			},
			{
				"type":"Language",
				content:["ar" ,"de" ,"en" ,"es" ,"fr" ,"he" ,"it" ,"nl" ,"no", "pt" ,"ru" ,"se","ud" ,"zh"]
			},
			{
				"type":"Country",
				content:["ae", "ar", "at", "au", "be", "bg", "br","ca", "ch", 'cn', 'co', 'cu' ,'cz', 'de' ,'in','it', "jp", 'kr', 'lt', 'lv', 'ma','ua', 'us', 've', 'za']
			}
		];
		return(
			<div className="channelfilters_page">
				<div className="filters">
					<div className="filter1">
						<div className="filter7">
							<h4>Filters</h4>
							<div className="container">
						        <FilterOptions filters={filters} 
						           category={this.props.category} language={this.props.language} country={this.props.country} changeOption={(val,type)=>this.props.filterItems(val,type)} />
					      </div>
						</div>
						
					</div>
				</div>
			</div>
			);
	}
}
export default ChannelFilters;

