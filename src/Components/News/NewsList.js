import React from 'react';
import './news.css';
import {Button} from "react-bootstrap";
import StackGrid from "react-stack-grid";
class NewsList extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}
	}
	render(){
		return(
			<div className="all_news">
				<StackGrid columnWidth={250} monitorImagesLoaded={true} >
				{
					this.props.news.map((single)=>{
						return(
							<div className="single_news" key={single.title}>
									<img className="news_image" alt="news" src={single.urlToImage} />
							        <div className="news_title" key="key1">{single.title}</div>
							        <Button className="more_button" variant="outline-success">Know More</Button>
							</div>
							);
					})
				}
				</StackGrid>
			</div>
			);
	}
}
export default NewsList;