import React, {Component} from 'react';
import { connect } from 'react-redux';
import { searchChange } from '../actions';

class Search extends Component {

  onSubmitForm(e) {
    e.preventDefault();
    const searchText = this.refs.searchText.value;
    this.props.searchChange(searchText);
  }
  // Renders search form
  render() {
    return(
      <div>
        <form onSubmit={e => this.onSubmitForm(e)} >
          <div className="input_and_button">
            <input type="search" ref="searchText" placeholder="Search..." />
            <button className="button">Go</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { searchChange })(Search);
