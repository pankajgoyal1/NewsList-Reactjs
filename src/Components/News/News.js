import React from 'react';
import NewsList from './NewsList';
import NewsFilters from './NewsFilters';

class News extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}
	}
	render(){
		return(
			<div className="newslist_page">
				<NewsFilters />
				<NewsList news={this.props.news} />

			</div>
			);
	}
}
export default News;