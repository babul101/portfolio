
import React, { Component } from 'react'
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';

import {Container,Row,Col} from 'reactstrap';


class Index extends Component  {
    constructor(props){
        super(props);

        this.state = {
          isFlipping:false
        }
        this.roles= ['Developer','Team Player','Tech Enthusiast','Consultant'];
    }

    componentDidMount() {
      this.animateCard();
    }

    componentWillUnmount() {
      this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
    }

    animateCard() {
     this.cardAnimationInterval =  setInterval(()=> {
        this.setState({
          isFlipping : !this.state.isFlipping
        })
      },9000)
    }
  render() {
    const {isAuthenticated,user} = this.props.auth;
    const {isFlipping} = this.state;
    return (
        
        <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} {...this.props.auth} headerType='index' title='Babul Deb - Portfolio'>
        
        <div className="main-section">
           
          
          <Container>
          
            <Row>
              <Col md="6">
              
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/static/images/a.jpg" alt='Picture of a Coder'/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Go With The Trends </h2>
                        <div className="hero-section-content-intro">
                          Building top notch quality experiences.
                        </div>
                      </div>
                      <img className="image" src="/static/images/apple.jpg" alt='Picture of a Coder'/>
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                  {isAuthenticated}
                    Welcome to the portfolio website of <b>Babul Deb</b>.
                    Get informed, collaborate and discover projects I was working on through the years!
                  </h1>
                </div>
                <Typed
                    
                    loop
                    typeSpeed={70}
                    backSpeed={70}
                    strings={this.roles}
                    backDelay={1000}
                    loopCount={0}
                    className='self-typed'
                    showCursor
                    cursorChar="|"
                />
                <div className="hero-welcome-bio">
                  <h2>
                    Let's take a look on my work.
                  </h2>
                </div>
              </Col>
            </Row>
            
          </Container>
        </div>
        
      </BaseLayout>
      
    )
  }
}

export default Index;