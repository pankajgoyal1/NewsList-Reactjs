import React from 'react';
import './Filters.css';
class FilterOptions extends React.Component
{
	constructor(props){
		super(props);
		this.state={

		}

	}
	changeOption = (type,e)=>{
		var val = e.target.value;
		//console.log(val);
		this.props.changeOption(val,type);
	}

	render()
	{
		//console.log(this.props.category)
		const {filters}=this.props;
		return(
				<div>
					<div className="single_filter">
					  <label>{this.props.filters[0].type}</label>
			          <select id={filters[0].type} className="select" value={this.props.category} onChange={this.changeOption.bind(this,filters[0].type)}>
			          {
			          	filters[0].content.map(function(option) {
			            return (
			             <option className="options" key={option} value={option}>{option}</option> )
			          	})
			          }
			          </select>
					</div>
					<div className="single_filter">
					  <label>{filters[1].type}</label>
			          <select id={filters[1].type} className="select" value={this.props.language} onChange={this.changeOption.bind(this,filters[1].type)}>
			          {
			          	filters[1].content.map(function(option) {
			            return (
			             <option key={option} value={option}>{option}</option> )
			          	})
			          }
			          </select>
					</div>
					<div className="single_filter">
					  <label>{filters[2].type}</label>
			          <select id={filters[2].type} className="select"  value={this.props.country} onChange={this.changeOption.bind(this,filters[2].type)}>
			          {
			          	filters[2].content.map(function(option) {
			            return (
			             <option key={option} value={option}>{option}</option> )
			          	})
			          }
			          </select>
					</div>
				</div>
			)
	}
}
export default FilterOptions;