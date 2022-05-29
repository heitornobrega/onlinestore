import React from 'react';

class CheckoutProducts extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="fullName">
          Nome completo:
          <input
            id="fullName"
            type="text"
            placeholder="Digite seu nome"
            data-testid="checkout-fullname"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="email"
            placeholder="exemplo@email.com"
            data-testid="checkout-email"
          />
        </label>
        <label htmlFor="CPF">
          CPF:
          <input
            id="CPF"
            type="text"
            placeholder="xxx-xxx-xxx-xx"
            data-testid="checkout-cpf"
          />
        </label>
        <label htmlFor="phoneNumber">
          Número de Telefone:
          <input
            id="phoneNumber"
            type="tel"
            placeholder="(xx) xxxx-xxxx"
            data-testid="checkout-phone"
          />
        </label>
        <label htmlFor="CEP">
          CEP:
          <input
            id="CEP"
            type="text"
            placeholder="xxxxx-xxx"
            data-testid="checkout-cep"
          />
        </label>
        <label htmlFor="address">
          Endereço:
          <input
            id="address"
            type="text"
            placeholder="Rua Nome da Rua, Nºx"
            data-testid="checkout-address"
          />
        </label>
        <button type="button">Finalizar compra</button>
      </form>
    );
  }
}

export default CheckoutProducts;
