import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedItem: null
        }
    }

    onClickItem(item) {
        this.setState({ selectedItem: item});
    }

    render() {
        let {dishes} = this.props;
        let {selectedItem} = this.state;
        const menu = dishes.map((item) => {
            return (
              <div className="col-12 col-md-5 m-1" key={item.id}>
                <Card onClick={() => this.onClickItem(item)}>
                  <CardImg width="100%" src={item.image} alt={item.name} />
                  <CardImgOverlay>
                      <CardTitle>{item.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail dish={selectedItem}/>
            </div>
        );
    }
}

export default Menu;