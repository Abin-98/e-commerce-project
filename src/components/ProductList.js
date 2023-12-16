import { Container, Row, Col, Image, Button } from "react-bootstrap";

const ProductList = (props) => {
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
  return (
    <section className="section">
      <div className="musictitle">
        <h2>Music</h2>
      </div>
      <div className="list">
        <Container>
          <Row className="g-5">
            {productsArr.map((prod) => {
              return (
                <Col xs={6} key={prod.id}>
                  <div className="item">
                    <h3 className="itemtitle">{prod.title}</h3>
                    <Image src={prod.imageUrl} rounded />
                    <div className="list-footer">
                      <span>${prod.price}</span>
                      <Button variant="primary">Add to Cart</Button>
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
