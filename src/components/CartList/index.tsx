import * as React from 'react';
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Typography,
  Button,
  Paper,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useDispatch, connect } from 'react-redux'
import { addToCart, cleanCart, removeToCart } from '../../store/actions/cart';

function CartList({ show, items }) {
  const dispatch = useDispatch();

  const clean = () => {
    dispatch(cleanCart());
  }

  const remove = ({id, option}) => {
    dispatch(removeToCart({id, option}));
  }

  const add = ({ id }) => {
    dispatch(addToCart({ id }))
  }

  return (
    <Paper component="div" 
      style={{
        position: 'absolute',
        minWidth: 360,
        display: show ? 'block' : 'none'
      }}>
      <List 
        sx={{ 
          width: '100%', 
          maxWidth: 360,
          bgcolor: 'background.paper'}}>
        {
         items.length > 0 ? 
          items.map((item:any) => (
            <div key={item.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={item.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <span style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="primary">
                        R$ {item.price.replace('.', ',')} x {item.amount} 
                      </Typography>
                      <span>
                        <IconButton size="small" onClick={() => remove({
                          id: item.id,
                          option: 'all'
                         })}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton size="small" onClick={() => remove({id: item.id, option: 'only'})}>
                          <RemoveIcon />
                        </IconButton>
                        <IconButton size="small" onClick={() => add({id: item.id })}>
                          <AddIcon />
                        </IconButton>
                      </span>
                    </span>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </div>
          ))
        : <Typography variant="body2" style={{padding: 15}}>Nenhum produto adicionado!</Typography>}
      {
          (items.length > 0) &&
          <>
            <Divider component="li" />
            <ListItem>
                <Button color="primary" onClick={() => clean()}>Limpar</Button>
            </ListItem>
          </>
        }
      </List>
    </Paper>
  );
}

export default connect()(CartList);