import { Container, Row, Col, NavLink } from "react-bootstrap";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa"; // Assuming you want to use these social icons

const Footer = () => {
  const data = {
    "E-zomato": [
      "Who We Are", "Blog", "Work With Us", "Investor Relations", 
      "Report Fraud", "Press Kit", "Contact Us"
    ],
    "ZomatoVerse": [
      "Zomato", "Blinkit", "Feeding India", "Hyperpure", 
      "Zomato Live", "Zomaland", "Weather Union"
    ],
    "Social Links": [
      { name: "Instagram", icon: <FaInstagram /> },
      { name: "YouTube", icon: <FaYoutube /> },
      { name: "Facebook", icon: <FaFacebook /> }
    ]
  };

  return (
    <section>
      <Container fluid>
        <Row className="gap-2 justify-content-center">
          {Object.entries(data).map(([category, links], index) => (
            <Col key={index} xs={6} sm={6} md={3} lg={3} xl={3}>
              <h5>{category}</h5>
              <ul>
                {links.map((link, idx) => (
                  <li key={idx}>
                    {category === "Social Links" ? (
                      <NavLink href={`#${link.name}`} className="d-flex align-items-center">
                        {link.icon} <span className="ms-2">{link.name}</span>
                      </NavLink>
                    ) : (
                      <NavLink>{link}</NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
