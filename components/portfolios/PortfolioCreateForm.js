// Render Prop
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button,Alert } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const validateInputs = (values) => {
    let errors = {};
   Object.entries(values).forEach(([key,value])=> {
    if(!values[key] && key !== 'endDate') {
        errors[key] = `Field ${key} is required!`;
    }
   });

   const startDate = values.startDate;
   const endDate = values.endDate;

   if(startDate && endDate && endDate.isBefore(startDate)) {
     errors.endDate = 'End Date cannot be before Start Date!!'
   }
    return errors;
  }

  const INITIAL_VALUES = {title:'',company:'',location:'',position:'',description:'',startDate:'',endDate:''};

const PortfolioCreateForm = (props) => (
  <div>
    
    <Formik
      initialValues={ INITIAL_VALUES }
      validate={validateInputs}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          
          <Field  type="text" name="title" label='Title' component={PortInput}/>
         
          <Field  type="text" name="company" label='Company' component={PortInput} />
          
          <Field  type="text" name="location" label='Location' component={PortInput} />
           
          <Field  type="text" name="position" label='Position' component={PortInput} />
                  
          <Field  type="textarea" name="description" label='Description' component={PortInput} />
          
          <Field  name="startDate" label='Start Date' component={PortDate} />
          
          <Field  name="endDate" label='End Date' canBeDisabled={true} component={PortDate} />
          
          <Button color='success' size='lg' type="submit" disabled={isSubmitting}>
            Create
          </Button>
          { props.error &&
              <Alert color='danger'>
                {props.error}
              </Alert>
          }
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;

































// import React from 'react';


// export default class PortfolioCreateForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {title: '',description:'',language:''};
  
//       this.handleChange = this.handleChange.bind(this);
      
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//         const field = event.target.name
//       this.setState({[field]: event.target.value});
//     }
     
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.title + ' ' + this.state.description+ ' ' +this.state.language);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input name='title' type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <label>
//           Description:
//           <textarea name='description' value={this.state.description} onChange={this.handleChange} />
//         </label>
//         <label>
//           Pick your favorite programming language:
//           <select name='language' value={this.state.language} onChange={this.handleChange}>
//             <option value="java">Java</option>
//             <option value="c">C</option>
//             <option value="c++">C++</option>
//             <option value="pyhton">Python</option>
//           </select>
//         </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }