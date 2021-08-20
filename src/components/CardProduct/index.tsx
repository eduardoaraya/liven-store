import React from 'react';
import {
  CardActionArea,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from "react-redux";
import { addToCart } from '../../store/actions/cart';

interface Props {
  image?: string;
  name?: string;
  price?: string;
  id?: string;
}

export default function CardProduct({image, name, price, id} : Props) {
  const dispatch = useDispatch();

  const addProductToCard = (product: any) => {
    dispatch(addToCart(product));
  }

  return (
    <Card style={{width: "250px", minHeight: "250px"}}>
      <CardActionArea>
        <CardMedia
          image={image}
          loading="lazy"
          component="img"
          title="Contemplative Reptile"
          style={{maxWidth: "250px", minHeight: "250px", background: '#DDD'}}
        />
        <CardContent>
          <Typography style={{fontSize: 16}} variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton size="medium" color="primary" onClick={() => addProductToCard({image, name, price, id})}>
          <AddShoppingCart></AddShoppingCart>
        </IconButton>
        <Typography gutterBottom component="p">
          R$ {price?.replace('.', ',')}
        </Typography>
      </CardActions>
    </Card>
  );
}
