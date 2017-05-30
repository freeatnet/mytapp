// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function labelToName(label){
	return label.toLowerCase().replace(/ /g, '_');
}

function postRoute(link, data){
	debugger;
	fetch(link, {
	  method: 'POST',
	  headers: {
	    'Accept': 'application/json',
	    // 'Content-Type': 'application/json',
	  },
	  body: data
	}).then(function(response){
		return response.json();
	}).then(function(data){
		console.log(data);
	})
}

class LabeledField extends React.Component {
	constructor(label){
		super();
		this.state ={
			label: label.value,
		};
	}

	render(){
		return(
			<formgroup>
				<label>{this.state.label} :</label>
				<input type="text" name={labelToName(this.state.label)}/>
			</formgroup>
		);
	}
}

class QuestionField extends React.Component{
	constructor(question){
		super();
		this.state = {
			question: question.value,
		};
	}
	render(){
		return(
			<formgroup>
			<p>{this.state.question} :</p>
			<textarea name={labelToName(this.state.question)}></textarea>
			</formgroup>
		);
	}
}

class ApplicantForm extends React.Component {
	constructor(){
		super();
		this.state = {
			textfields: ["First Name", "Last Name", "Student Number", "Email"],
			questions: ["Address", "1st Choice Courses", "2nd Choice Courses",
				"3rd Choice Courses", "Courses Taken", "Courses Taking"],
		};
	}
	renderLabeledField(label){
		return (<LabeledField value={label}/>);
	}
	renderQuestionField(question){
		return (<QuestionField value={question}/>);
	}
	renderSubmit(){
		return(<button type ="button" onClick={() => this.submitForm()}>Submit</button>);
	}
	listRepeatItems(func, items){
		const fields = items;
		let list = [];
		for(let i = 0; i < fields.length; i++){
			list.push(func(fields[i]));
		}
		return (list);
	}
	submitForm(){
		const data = new FormData(document.querySelector('form'));
		postRoute('/applicant_form', data);
	}
	render(){
		return(
			<form>
				{this.listRepeatItems(this.renderLabeledField, this.state.textfields)}
				{this.listRepeatItems(this.renderQuestionField, this.state.questions)}
				{this.renderSubmit()}
			</form>
		);
	}
}

class ApplicationTemplate extends React.Component{
	render (){
		return(
			<div>
				<div className="header">
					<h1>Application Form</h1>
				</div>
				<div className="main">
					<ApplicantForm />
				</div>
			</div>
		);
	}
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ApplicationTemplate/>,
    document.body.appendChild(document.createElement('div')),
  )
})