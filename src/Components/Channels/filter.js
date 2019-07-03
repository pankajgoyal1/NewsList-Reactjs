import React from 'react';
import './Filters.css';
class FilterType extends React.Component
{
	constructor(props){
		super(props);
		this.state={

		}

	}
	render()
	{
		const {name}=this.props;
		return(
			<div className="single_filter">
				<div >
					<span className="filter4" >{name}</span>
				</div>
				<div className="">
					<svg width="4.7" height="8" viewBox="0 0 16 27" 
						xmlns="http://www.w3.org/2000/svg" className="filterSvg">
						<path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 
						0 13.161l12.955 13.161z" fill="#212121" className="filter4">
						</path>
					</svg>
				</div>
			</div>
			);
	}
}
export default FilterType;