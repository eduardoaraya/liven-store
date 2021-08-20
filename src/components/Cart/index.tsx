import React from 'react';
import {
  IconButton,
  Badge,
  styled
}from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { useSelector } from 'react-redux'
import CartList from '../CartList';
import {connect} from 'react-redux';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: -15,
    top: 13,
    padding: '0 4px',
    background: `#FFF`,
  },
}));

function Cart() {
  const cart: any = useSelector((state) => state);
  const [showList, setShowList] = React.useState(false);

  return (
    <div>
      R$ {cart.total.toFixed(2).replace('.', ',')}
      <IconButton 
        onClick={() => setShowList(!showList)}
        size="medium" color="default">
        <StyledBadge badgeContent={cart.amount}>
          <ShoppingCart></ShoppingCart>
        </StyledBadge>
      </IconButton>
      {<CartList show={showList} items={Object.values(cart.products)}/>}
    </div>
  );
}

export default connect()(Cart);