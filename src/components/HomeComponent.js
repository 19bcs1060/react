import React ,{Component} from 'react';
import {Card, CardText, CardTitle,CardSubtitle,CardImg, CardBody} from 'reactstrap';
function RenderCard({item}){
    return(
      <Card>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation?<CardSubtitle>{item.designation}</CardSubtitle>:null}
          <CardText>{item.description}</CardText>
        </CardBody>
    </Card>
  );
}

function Home(props){
  return(
    <div className='container'>
      <div className='row align-items-start'>
        l<div className='col-12 col-md m-1'>
          <RenderCard item={props.dish} />
        </div>
        l<div className='col-12 col-md m-1'>
          <RenderCard item={props.promotion} />
        </div>
        l<div className='col-12 col-md m-1'>
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}
export default Home;
