import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import BasePage from '../components/BasePage';
class Portfolio extends  React.Component {
    render(){
        return(
            <BaseLayout {...this.props.auth}>
            <BasePage>
                <h1>I am a portfolio page</h1>
             </BasePage>  
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio);