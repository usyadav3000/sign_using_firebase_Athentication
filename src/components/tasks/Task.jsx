import React from "react";
import { removeTask } from "../../actions/taskActions";
import { connect } from "react-redux";
import { toggleChecked } from "../../actions/taskActions";
import './Task.css';

const Task = ({ task, removeTask, toggleChecked }) => {
  const handleRemove = (task) => {
    removeTask(task);
  };



  return (
    <div className="list">
        <p>{task.task}
       
        
          <span
            className="material-icons text-dange"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(task)}
          >
            delete
          </span>
          </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (task) => dispatch(removeTask(task)),
    toggleChecked: (task) => dispatch(toggleChecked(task)),
  };
};

export default connect(null, mapDispatchToProps)(Task);
