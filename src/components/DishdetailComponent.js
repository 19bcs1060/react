import React, { Component } from 'react';
import {Card,CardTitle,CardImg,CardImgOverlay, CardText, CardBody} from 'reactstrap';

function RenderDish({dish1}){
    return(
    <Card>
      <CardImg top src={dish1.image} alt={dish1.name} />
      <CardBody>
        <CardTitle>{dish1.name}</CardTitle>
        <CardText>{dish1.description}</CardText>
      </CardBody>
    </Card>
  );
  }
function RenderComments({dish1}){
    return(
      dish1.comments.map((com)=>{
          return(
              <CardBody>
                <CardText>{com.comment}</CardText>
                <CardText>--{com.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</CardText>
              </CardBody>
    );
  })
);
}
const Details=(props)=>{
    const dish1= props.dish;

  if(dish1!=null){
    return(
      <div className='container'>
        <div className='row'>
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish1={dish1} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <Card>
            <h3>Comments</h3>
            <RenderComments dish1={dish1} />
          </Card>
        </div>
        </div>
      </div>
    );}
  else {
    return(
      <div></div>
    );
  }
}
export default Details;
