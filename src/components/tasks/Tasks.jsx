import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import './Task.css';

const Tasks = ({ tasks }) => {
  var i=1;
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "30px" ,backgroundColor: "#EEEEEE" ,margin:"20px",padding:"40px"}}
      >

        <div style={{margin: "auto 60px"}}>
          {tasks && tasks.map((task) =><>
           <span className="order"> {i++} </span>
             <Task task={task} key={task.id} /> 
             </>
             )}
          
          {/* <span className="orderNumber">{i++}</span> */}
        </div>
      </div>
    
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks: tasks,
    uid: state.firebase.auth.uid
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "tasks",
      where: ["authorId", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(Tasks);
