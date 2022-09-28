import React, { Component } from 'react';

class InputTodo extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    title: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.title.trim()) {
      // eslint-disable-next-line react/destructuring-assignment, react/prop-types
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          // eslint-disable-next-line react/destructuring-assignment
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button type="button" className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
