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
  Modal,
  Box
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, connect } from 'react-redux'
import { cleanCart, removeToCard } from '../../store/actions/cart';

function CartList({ show, items }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);

  const clean = () => {
    dispatch(cleanCart());
  }

  const removeItem = ({amout, id}) => {
    dispatch(removeToCard({amout, id}));
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
            <>
              <ListItem key={item.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={item.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        R$ {item.price.replace('.', ',')} x {item.amount} 
                      </Typography>
                      <IconButton size="small" onClick={() => removeItem({amount: item.amount, id: item.id })}>
                        <DeleteIcon></DeleteIcon>
                      </IconButton>
                    </div>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </>
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