// import React from 'react';

// const DescriptionCard = props => {
//   return (
//     <div className = 'description-card' key = '{props.id}'>
//       <h1>Description for image:</h1>
//       <p>{props.explanation}</p>
//     </div>
//   )
// }

// export default DescriptionCard;

import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const DescriptionCard = (props) => {
  return (
    <div className = 'description-card' key = '{props.id}'>
      <Card body inverse color="success">
        <CardBody>
          <CardTitle><h1>Description for image:</h1></CardTitle>
          <CardText>{props.explanation}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default DescriptionCard;