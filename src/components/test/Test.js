import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  // Different lifecycles methods to use in React. Most used will likely be componentDidMount and is most often used for http requests (APIs).
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // componentWillMount() {
  //   console.log("component will mount");
  // }

  // componentDidUpdate() {
  //   console.log("component did update");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("component will receive props");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(nextProps, prevState) {
  //   console.log("get snapshot before update");
  // }

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h1>This is a lifecycle test page with an API setup</h1>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
