import { Container, Row, Col, Image, Button } from "react-bootstrap";
import React, { useContext } from "react";
import CartContext from "../../../Context/cart-context";

const ProductList = (props) => {
  const cartCtx = useContext(CartContext);
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const addtoCart = (e) => {
    const index = productsArr.findIndex((item) => item.id === Number(e.target.id));
    cartCtx.addItem({...productsArr[index],quantity:1});
  };

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
                    <Image className="list-img" src={prod.imageUrl} rounded />
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
