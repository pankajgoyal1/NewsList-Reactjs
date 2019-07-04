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
				<a href="/" className="back_link">Back To Previous Page</a>

				{
					this.props.news.length > 0
					? 
					<StackGrid columnWidth={350} monitorImagesLoaded={true} >
					{
						this.props.news.map((single)=>{
							return(
								<div className="single_news" key={single.title}>
										<img className="news_image" alt="Loading" src={single.urlToImage} />
								        <div className="news_title" >{single.title}</div>
								        <div className="news_description" >{single.content}</div>
								        <a href={single.url}><Button className="more_button" variant="outline-success">Know More</Button></a>
								</div>
								);
						})
					}
					</StackGrid>
					:<div className="empty_page">No News Available. Kindly Search For Another KeyWord</div>
				}
			</div>
			);
	}
}
export default NewsList;