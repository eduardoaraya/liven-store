import React from "react";
import { IconButton, Badge, styled } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import CartList from "../CartList";
import { connect } from "react-redux";
import useComputeTotal from "../../hooks/Cart/compute-total";
import formatPrice from "../../utils/format-price";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -15,
    top: 13,
    padding: "0 4px",
    background: `#FFF`,
  },
}));

function Cart() {
  const cart: any = useSelector((state) => state);
  const [showList, setShowList] = React.useState(false);
  const totalCart = useComputeTotal();

  return (
    <div>
      {formatPrice(totalCart.total.toString())}
      <IconButton
        onClick={() => setShowList(!showList)}
        size="medium"
        color="default"
      >
        <StyledBadge badgeContent={totalCart.amount}>
          <ShoppingCart></ShoppingCart>
        </StyledBadge>
      </IconButton>
      {<CartList show={showList} items={Object.values(cart.products)} />}
    </div>
  );
}

export default connect()(Cart);
