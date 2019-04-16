import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import {getSecretData,getSecretDataServer} from '../actions';

class Secret extends Component {

    static async getInitialProps({req}) {
        // const superSecretValue = 'Super Secret Value';
        // return {superSecretValue};
        const anotherSecretData =  await getSecretData(req);
        // console.log(anotherSecretData);
        return {anotherSecretData};
        
        
    }

      // constructor(props){
      //   super();

      //   this.state = {
      //     secretData:[]
      //   }
      // }

      state = {
        secretData:[]
      }
    async componentDidMount() {
      const secretData = await getSecretData();

      

      this.setState({
        secretData
      });
    }

    displaySecretData() {
      const {secretData} = this.state;

      if(secretData && secretData.length > 0) {
        return secretData.map((data,index)=> {
          return (
            <div key={index}>
              <p>{data.title}</p>
              <p>{data.description}</p>
            </div>
          )
        })
      }
      return null;
    }

  render() {
      const {superSecretValue} = this.props;
      // console.log = this.state;
    return (
        <BaseLayout {...this.props.auth}>
                    <BasePage>
                        <h1>I am the secret page.</h1>
                        <h2>{superSecretValue}</h2>
                        {this.displaySecretData()}
                    </BasePage>
                </BaseLayout>
    )
  }
}

export default withAuth()(Secret);