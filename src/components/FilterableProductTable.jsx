import React from "react";
import ProductTable from "./ProductTable";

class FilterProductTable extends React.Component {

    state = {
        data: [],
    };

    render() {
        return (
            <div> <h1>Product Table</h1>
                <ProductTable products = {this.props.product}/></div>

        );
    };
};

export default FilterProductTable;