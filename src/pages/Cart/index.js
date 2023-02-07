import { queryByLabelText } from '@testing-library/react';
import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import CartContext from '../../context/cart';

import {
  Container,
  ContainerList,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
  ContainerTotal,
} from './styles';

function Cart() {
  const { state, setState } = useContext(CartContext);

  const totalTravel = state.cart.reduceRight(
    (acc, travel) => acc + travel.quantity * travel.price,
    0,
  );

  return (
    <Container>
      <ContainerList>
        {state.cart.map((el) => (
          <TravelItem key={el.id}>
            <img src={el.photo} alt={el.title} />
            <Info>
              <p>{el.title}</p>
              <strong> {el.price} </strong>
            </Info>
            <Quantity readOnly type="number" value={el.quantity} />
            <Subtotal>
              <p>{el.quantity * el.price}</p>
              <button type="button">
                <MdDelete size={24} color="#0676d0" />
              </button>
            </Subtotal>
          </TravelItem>
        ))}
        {totalTravel > 0 && (
          <ContainerTotal>
            <p>TOTAL:</p>
            <span>{totalTravel}</span>
          </ContainerTotal>
        )}
      </ContainerList>
    </Container>
  );
}

export default Cart;
