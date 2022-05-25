import React from "react";
import Details from "../Components/Details";

class ProductDetails extends React.Component{

    render() {
        const { match: { params: { title } } } = this.props;
        return (
            <Details
                title={title}
            />
        )
    }
}

export default ProductDetails;
