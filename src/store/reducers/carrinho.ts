import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      if (state.itens.find((produto) => produto.id === product.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(product)
      }
    }
  }
})

export const { add } = carrinhoSlice.actions
export default carrinhoSlice.reducer
