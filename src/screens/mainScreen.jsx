import axios from "axios";
import { useEffect, useState } from "react";
import CustomCard from "../components/card";
import { Container, Row, Col, Button } from "react-bootstrap";

const MainScreen = () => {
  const [data, setData] = useState([]);
  const filter = ["filter", "veg", "Non-veg", "Popular", "Deals"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, status } = await axios("https://dummyjson.com/recipes");
        if (status === 200) {
          setData(data.recipes);
        }
      } catch (err) {
        console.error(`Error is ${err}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="mb-3">
          {
            filter.map((each, index) => (
              <Col className="flex-0"key={index}>
                <Button variant="outline-secondary">{each}</Button>
              </Col>
            ))
          }
        </Row>

        <Row className="gap-2 justify-content-center">
          {data.map((eachRecipe) => (
            <Col key={eachRecipe.id} xs={6} sm={6} md={3} lg={3} xl={3}>
              <CustomCard width={"12rem"}
              height={"12rem"}
                img={eachRecipe.image}
                title={eachRecipe.name}
                btnText={"Order Now"}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MainScreen;
