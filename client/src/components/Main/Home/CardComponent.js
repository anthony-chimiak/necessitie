import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function CardComponent(props) {
    const { image, name, description } = props;

return(
    <Card>
      <Image src={image} wrapped ui={false} />
      <img loading="lazy" src={image}/>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
      <Card.Description>
          {description}
      </Card.Description>
    </Card>
  )
}
  export default CardComponent;