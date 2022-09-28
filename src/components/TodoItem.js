/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    editing: false,
  }

  // eslint-disable-next-line react/sort-comp
  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    // eslint-disable-next-line react/destructuring-assignment
    const { completed, id, title } = this.props.todo;

    const viewMode = {};
    const editMode = {};

    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            // eslint-disable-next-line react/destructuring-assignment
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button type="button" onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => { this.props.setUpdate(e.target.value, id); }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

export default TodoItem;
