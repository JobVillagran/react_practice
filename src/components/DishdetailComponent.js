import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return(<div></div>);
    }

    renderComments(comments = []) {
        if (comments.length > 0 || comments != null) {
            let options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
            comments = comments.map(item =>  {
                return(
                    <li key={item.id}>
                        <p>{item.comment}</p>
                        <p>-- {item.author}, {new Date(item.date).toLocaleDateString('en-US', options)}</p>
                    </li>
                )
            });
            return(
                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {comments}
                    </ul>
                </div>
            );
        } else
            return(
                <div></div>
            );
    }

    render() {
        const {dish} = this.props;
        console.log(dish)
        return (
            <div className="row">
                {this.renderDish(dish)}
                {dish && this.renderComments(dish.comments)}
            </div>
        );
    }
}

export default DishDetail;