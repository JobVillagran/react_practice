import React, {Component} from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'

class DishDetail extends Component{

    constructor(props){
        super(props);
    }


    renderDish(dish){
        if(dish!=null){
            return(
            <Card>
                <CardImg width="100%" object src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                 </CardBody>
            </Card>
            )
        }
        else return(<div> </div>)
    }

    renderComments(comments){
      if(comments!=null){  
        const result=comments.comments.map((comment)=>{
            return(
                <div key={comment.id} >
                    {/* <p>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p> */}
                    <span>--{comment.author}</span>
                </div>
                
            )
        })
        return(
            <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">{result}</ul>
            
            
            </div>
            
        )}
        else{return(<div></div>)}
    }

    render(){

        return(
            <div className="row">
                <div className="col-12 col-md-5 mt-5">
                    {this.renderDish(this.props.dishDetail)}
                </div>
                <div className="col-12 col-md-5 mt-5">
                    {this.renderComments(this.props.dishDetail)}
                </div>
                
            </div>
            
        )
    }


}

export default DishDetail;