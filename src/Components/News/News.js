import React from 'react';
import NewsList from './NewsList';
import NewsFilters from './NewsFilters';

class News extends React.Component{
	constructor(props){
		super(props);
		this.state={
			detail:false
		}
	}
	detailedNews =(title)=>{
		this.setState({detail:true})
	}
	render(){
		return(
			<div className="newslist_page">
				<NewsList detailedNews={(title)=>this.detailedNews(title)} news={this.props.news} />

			</div>
			);
	}
}
export default News;