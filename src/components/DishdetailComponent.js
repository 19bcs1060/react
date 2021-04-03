import React, { Component } from 'react';
import {Card,CardTitle,CardImg,CardImgOverlay, CardText, CardBody, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
function RenderDish({dish}){
    return(
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
  }
function RenderComments({comment}){
    return(
      comment.map((com)=>{
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
  if(props.dish!=null){
    return(
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <h3>Comments</h3>
              <RenderComments comment={props.comments} />
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
