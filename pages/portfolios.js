import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import {Link} from '../routes';
import BasePage from '../components/BasePage';
class Portfolios extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
        <h1>I am the portfolios page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Portfolios;