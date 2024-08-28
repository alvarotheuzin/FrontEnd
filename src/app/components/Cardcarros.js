"use client";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardcarros({ title, text, imageSrc, buttonText }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img 
        variant="top" 
        src={imageSrc} 
        style={{ width: '100%', height: '200px', objectFit: 'cover'}} 
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={{ __html: text }} />
        <Button variant="primary">{buttonText}</Button>
        
      </Card.Body>
    </Card>
  );
}

export default Cardcarros;