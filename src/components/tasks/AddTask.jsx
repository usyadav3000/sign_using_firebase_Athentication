import React, { Component } from "react";
import { addTask } from "../../actions/taskActions";
import { connect } from "react-redux";
import './Task.css';

class AddTask extends Component {
  state = {
    task: "",
    checked: "false",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    document.getElementById("addTaskForm").reset();
    console.log(this.state);
  };
  handleSubmit1=(e)=>{
    e.preventDefault();
    document.getElementById("addTaskForm").reset();
  };

  render() {
    return (
      <>
        <form
          id="addTaskForm"
          className="container"
          autoComplete="off"
          
          onSubmit={this.handleSubmit}
        >
          <div className="form-group form1-group" style={{display: "inline-block"}}>
            <textarea
              type="text"
              className="form-control"
              id="task" placeholder=""
              onChange={this.handleChange} style={{width:'100%',padding:"12px 20px"}}
            />
          </div>
          <div className="btn-group1">
          <button type="submit" className="btn btn-primary" style={{ margin: "10px"}}>
            ADD+
          </button>
          <button type="submit" className="btn btn-primary" style={{ margin: "10px"}} onClick={this.handleSubmit1}>
            CLEAR
          </button>
          </div>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(AddTask);
