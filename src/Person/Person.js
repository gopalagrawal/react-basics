import React, { Component } from "react";
import styles from "./Person.module.scss";

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      job: props.job,
      avatar: props.avatar
    };

    this.avatarimg = require('../images/' + this.state.avatar);
  }

  render() {
    return (
      <div className={styles.card}>

        <img src={this.avatarimg} alt="Avatar" style={{width: "100%"}} />

        <div className={styles.container}>
          <h4><b>{this.state.name}</b></h4>
          <p> {this.state.job} </p>
        </div>
        
      </div>
    );
  }
}

export default Person;
