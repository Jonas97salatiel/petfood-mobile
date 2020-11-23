import { CLICK_UPDATE_VALUE, NEW_VALUE, CLICK_DOWN_VALUE } from '../actions/actionsTypes';


const initialState = {
  carrinho: {
    cnpj: '',
    produtos: [
      { idProduto: 0, nome: '', valor: 0.00, qtd: 0 }
    ]
  }
};


export const carrinhoReducer = (state = initialState, action) => {
  console.log('Recebendo dados para no redux')
  console.log(action)
  switch (action.type) {
    case NEW_VALUE:
      return { ...state, carrinho: action.carrinho };
    default:
      return state;
  }
};