

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCard({img,title,content,btnText,width,height}) {
  return (
    <Card style={{ width: {width},height:{height} }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Button variant="outline-secondary">{btnText}</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;