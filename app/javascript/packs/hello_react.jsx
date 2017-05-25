// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap'

class ApplicantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      utorid: "",
      email: "",
      studentno: "",
      program: "",
      year: "",
    };

    // if I refer to a method without using (),
    // I need to bind it (b/c by default class methods are not bound by default)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  // When an form field changes, this handler is triggered
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
      fieldChanged: name,
    });
  }

  // On form submission this handler is triggered
  handleSubmit(event) {
    console.log(this.state);
    alert('Form submitted!');
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Application Form</h3>
        <Form inline>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input name="firstName" id="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input name="lastName" id="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="utorid">UtorID</Label>
            <Input name="utorid" id="utorid" value={this.state.utorid} placeholder="UtorID" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="studentno">Student Number</Label>
            <Input name="studentno" id="studentno" value={this.state.studentno} placeholder="Student #" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="program">Program</Label>
            <Input name="program" id="program" value={this.state.program} placeholder="Program" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="year">Year of Study</Label>
            <Input name="year" id="year" value={this.state.year} placeholder="Year" onChange={this.handleChange} />
          </FormGroup>

          <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }
}



const Hello = props => (
  <div>
    <h1>Hello {props.name}!</h1>
    <h2> {props.school} </h2>
  </div>
)

Hello.defaultProps = {
  name: 'Arseniy',
  school: 'UofT - SG',
}

Hello.propTypes = {
  name: PropTypes.string,
  school: PropTypes.string,
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ApplicantForm />,
    document.body.appendChild(document.createElement('div')),
  )
})
