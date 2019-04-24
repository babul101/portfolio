import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';
import {Row,Col} from 'reactstrap';
import {createPortfolio} from '../actions';

class PortfolioNew extends Component {

  constructor(props){
    super();
    this.savePortfolio = this.savePortfolio.bind(this);
  }

  savePortfolio(portfolioData) {
    createPortfolio(portfolioData).then((portfolio) => {
      console.log(portfolio)
    })
    .catch((err)=>{console.error(err)})
  }
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className='portfolio-create-page' title='Create new Portfolio'>
            <Row>
            <Col md='6'>
            <PortfolioCreateForm onSubmit={this.savePortfolio} />
            </Col>
            </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(PortfolioNew);