import React, {Component} from 'react';
import GoodsItem from './GoodsItem';
import { connect } from 'react-redux';
import { add_item } from '../actions';

class ListOfGoods extends Component {
  render() {
    const goodsItems = this.props.goods.map(item => {
        return (
            <GoodsItem
                key={item.id}
                gooditem={item}
                addToCart={this.props.add_item} />
        )
});
    //  Shows list of items
    return(
      <div>
        {goodsItems}
      </div>
    );
  }
}

export default connect(null, { add_item })(ListOfGoods);
