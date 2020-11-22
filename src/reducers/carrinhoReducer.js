import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes';


const initialState = {
  carrinho: {
    cnpj: '',
    produtos: [
      { idProduto, descProduto, valorProdutocarrinho },
    ]
  }
};


export const carrinhoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        carrinho: action.carrinho
      };
    default:
      return state;
  }
};