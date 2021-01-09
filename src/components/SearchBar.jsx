import React from "react";

class SearchBar extends React.Component {

    state = {
       search : []
    };

    render() {
        return ( 
<div>
    <form className="form flex" ></form>
    <label htmlFor="search">SearchBar</label>
    <input name="search" value={this.state.search} type="text"/>
    <input type="checkbox" name="onstock" id=""/>
    <label htmlFor="onStock">Only show products on stock.</label>
</div>


        );
    };
};

export default SearchBar;