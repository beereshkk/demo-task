import React from "react";
import Card from "react-bootstrap/Card";

const BasicCard = (props) => {
  const { title, content, footer } = props;
  return (
    <Card className="h-100" border="light">
      {content && (
        <Card.Body>
          <Card.Title className="pb-2">{title}</Card.Title>
          <div className="d-flex justify-content-center">{content}</div>
        </Card.Body>
      )}
      {footer && <Card.Footer>{footer}</Card.Footer>}
    </Card>
  );
};

export default BasicCard;
