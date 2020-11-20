import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes';


const initialState = {
    Carrinho:  [
          { idProduto: 1, descProduto: 'Racao da cachorro', valorProduto:'10.00' },
          { idProduto: 2, descProduto: 'Racao da cachorro', valorProduto:'10.00' },
          { idProduto: 3, descProduto: 'Racao da cachorro', valorProduto:'10.00' },
        ]  
    
  };


  export const carrinhoReducer = (state = initialState, action) => {
    switch (action.type) {
      case CLICK_UPDATE_VALUE:
        return {
          ...state,
          newValue: action.newValue
        };
      default:
        return state;
    }
  };