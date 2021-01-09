import React from "react";

class ProductRow extends React.Component{ 

    render() {
        console.log(this.props.product);

        return ( 
            
          <div>
              <p>Products map</p>
          </div>  

        );
    };
};

export default ProductRow;