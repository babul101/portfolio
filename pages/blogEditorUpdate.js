import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import SlateEditor from '../components/slate-editor/Editor';
import { toast } from 'react-toastify';
import {getBlogById,updateBlog} from '../actions';

class BlogEditorUpdate extends Component {

    static async getInitialProps({query}) {
        const blogId = query.id;
        let blog = {};

        try {
            const blog = await getBlogById(blogId);
            return {blog}
        } catch (err) {
            console.error(err)
        }
        return {blog};
    }

  constructor(props) {
    super(props);

    this.state = {
      isSaving:false
    }
    this.updateBlog = this.updateBlog.bind(this);
  }

  updateBlog(story,heading) {
    const {blog} = this.props;

    const updatedBlog = {};
    updatedBlog.title = heading.title;
    updatedBlog.subTitle = heading.subtitle;
    updatedBlog.story = story;

    this.setState({isSaving:true});
    updateBlog(updatedBlog,blog._id).then(updatedBlog => {
      toast.success('Blog Saved Succuessfully');
      this.setState({isSaving:false});
      

    }).catch(err => {
      this.setState({isSaving:false});
      const message = err.message || 'Server Error.';
      toast.error('Submission Failed');
      console.error(message);
    })
  }


 render() {
     const {blog} = this.props;
     const {isSaving} = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass= 'editor-wrapper' className='blog-editor-page' >
            <SlateEditor initialValue={blog.story} isLoading={isSaving} save={this.updateBlog}/>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(BlogEditorUpdate);