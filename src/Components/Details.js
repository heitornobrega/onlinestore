import React from "react";


class Details extends React.Component{
    render() {
        const { title } = this.props;
        return (
            <div>
                <p data-testid="product-detail-name" >{title}</p>
                {/* <p> `R$ ${precoDoProduto}`</p>
                <img src={urlDaImagemDoProduto} alt={imagemDoProduto} /> */}
            </div>
        )
    }
}

export default Details;
