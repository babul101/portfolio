import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
class Blogs extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
        <h1>I am a blog page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}


export default Blogs;