import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import {Container,Row,Col} from 'reactstrap';
import {getUserBlogs} from '../actions';
import {Link} from '../routes';

 class UserBlogs extends Component {

  static async getInitialProps({req}) {
    let blogs = [];

    try {
      blogs = await getUserBlogs(req);
    } catch (err) {
      console.errror(err)
    }
    return {blogs};
  }

  seperateBlogs(blogs) {
    const published = [];
    const drafts = [];

    blogs.forEach((blog)=> {
      blog.status === 'draft' ? drafts.push(blog) : published.push(blog);
    })
    return {published,drafts};
  }

  renderBlogs(blogs) {
    return (
      <ul className='user-blogs-list'>
        {
          blogs.map((blog,index)=>(
            <li key={index}>
              <Link route={`/blogs/${blog._id}/edit`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    )
  }

  render() {
    const {blogs} = this.props;
    const {published,drafts} = this.seperateBlogs(blogs);
    return (
        <BaseLayout  {...this.props.auth} headerType={'landing'}>
        <div className="masthead" style={{"backgroundImage": "url('/static/images/home-bg.jpg')"}}>
          <div className="overlay"></div>
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Fresh Blogs</h1>
                  <span className="subheading">Programming, travelling...</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BasePage className="blog-user-page">
          <Row>
            <Col md='6' className='mx-auto text-center'>
            <h2 className='blog-status-title'>Published Blogs</h2>
            {this.renderBlogs(published)}
            </Col>
            <Col md='6' className='mx-auto text-center'>
            <h2 className='blog-status-title'>Draft Blogs</h2>
            {this.renderBlogs(drafts)}
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(UserBlogs);