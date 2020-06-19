// Usage: <Form />

import React, { Component } from "react";
import styles from "./Form.module.scss";

class MyForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "Enter Name",
      job: "Job Title",
      city: "Location/City",
    };
  }

	changeNameHandler = (event) => this.setState( {name: event.target.value} )
	changeJobHandler  = (event) => this.setState( {job:  event.target.value} )
	changeCityHandler = (event) => this.setState( {city: event.target.value} )

	submitClicked = (event) => {
		alert('Submit Clicked')
		event.preventDefault()
	}

	resetClicked  = (e) => {
		this.setState({
      name: "Enter Name",
      job: "Job Title",
      city: "Location/City",
		})

	}


  render() {
    return (
      <div className={styles.form}>

				<form  	ref={(el) => this.myFormRef = el} 
					onSubmit={this.submitClicked}
					onReset={this.resetClicked}
				>

					<input
						type="text"	placeholder={this.state.name}
						name="name"	onChange={ this.changeNameHandler }
					/> {this.state.name} <br/>

					<input
						type="text"	placeholder={this.state.job}
						name="job"	onChange={ this.changeJobHandler }
						/> {this.state.job} <br/>

					<input
						type="text"	placeholder={this.state.city}
						name="city"	onChange={ this.changeCityHandler }
					/> {this.state.city} <br/>

					<button type='submit'>SUBMIT</button>  
					<button type='reset' >RESET </button>

				</form>


      </div>
    );
  }
}

export default MyForm;
