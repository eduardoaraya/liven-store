import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image'
import {AppBar,
  Toolbar,
  Grid,
  Container,
  Box
}from '@material-ui/core';
import CardProduct from '../components/CardProduct'
import Cart from '../components/Cart';
import Banner from '../public/banner.jpg';

interface Product {
  id: string;
  image: string;
  name: string;
  price: string;
  stock: number;
}

const Home: NextPage = () => {

  const [products, setProducts] = useState<Product[]>([]);

  const getAllProducts = async () => {
    let data = await fetch("https://5d6da1df777f670014036125.mockapi.io/api/v1/product");
    data = await data.json();
    if ((data instanceof Array) && data.length > 0) {
      setProducts(data);
    }
  };

  useEffect(() => {
    getAllProducts();

    return () => {
      setProducts([]);
    }
  }, []);


  return (
    <div>
       <AppBar position="fixed">
        <Toolbar>
        <Container>
          <Cart />
        </Container>
        </Toolbar>
      </AppBar>
      <Container style={{padding: "105px 25px"}}>
        <Box component="div" style={{marginBottom: "75px"}}>
            <Image src={Banner} layout="responsive" alt="banner"/>
        </Box>
        <Grid 
          style={{gap: 25}}
          container
          justifyContent="center"
          item
          xs={12}>
            {
              products.map(product => <CardProduct key={product.id} {...product} />)
            }
        </Grid>
      </Container>
    </div>
  )
}

export default Home
