import React, { Component } from 'react';
import Menu from './MenuComponent';
import Detail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {COMMENTS } from '../shared/comments';
import {PROMOTIONS } from '../shared/promotions';
import {LEADERS } from '../shared/leader';
import {Switch,Route, Redirect} from 'react-router-dom';
import About from './AboutComponent';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions:PROMOTIONS,
    };
  }

  render(){
    const  HomePage = () => {
       return(
           <Home
              dish= {this.state.dishes.filter((dish)=> dish.featured)[0]}
              promotion = {this.state.promotions.filter((promo)=> promo.featured)[0]}
              leader= {this.state.leaders.filter((leader)=> leader.featured)[0]}
           />
       );
     }
    const DishWithId =({match})=>{
      return(
        <Detail dish={this.state.dishes.filter((dish)=> dish.id===parseInt(match.params.dishId,10))[0]}
          comments ={this.state.comments.filter((comment)=>   comment.dishId===parseInt(match.params.dishId,10))}/>
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/contactus" component={Contact}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/aboutus" component= {()=> <About leaders={this.state.leaders}  /> }/>
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
