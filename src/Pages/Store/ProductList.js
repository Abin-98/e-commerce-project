import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import React, { useContext, useEffect } from "react";
import CartContext from '../../Context/cart-context';

const ProductList = (props) => {
  const cartCtx = useContext(CartContext);
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      review: "rr",
      otherImages:[],
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      review: "rr",
      otherImages:[],
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      review: "rr",
      otherImages:[],
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      review: "rr",
      title: "Blue Color",
      price: 100,
      otherImages:[],
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  useEffect(()=>{
      cartCtx.addProducts(productsArr);
      console.log(cartCtx.actualItems)
  },[])

  const addtoCart = (e) => {
    const index = productsArr.findIndex((item) => item.id === Number(e.target.id));
    cartCtx.addItem({...productsArr[index] ,quantity:1});
  };

  //

  return (
    <section className="section">
      <div className="musictitle">
        <h2>Music</h2>
      </div>
      <div className="list">
        <Container>
          <Row>
            {productsArr.map((prod) => {
              return (
                <Col className="column" xs={12} md={6} key={prod.id}>
                  <div className="item">
                    <h4 className="itemtitle">{prod.title}</h4>
                    <Link to={`/store/${prod.id}`}><img className="list-img" src={prod.imageUrl} alt="img" /></Link>
                    
                    <div className="list-footer">
                      <span>${prod.price}</span>
                      <Button
                        variant="primary"
                        id={prod.id}
                        onClick={addtoCart}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ProductList;
