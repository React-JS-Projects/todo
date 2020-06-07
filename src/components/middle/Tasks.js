import React from 'react';
import { connect } from 'react-redux';

import addTask from "../../actions/addTask";
import completeTask from "../../actions/completeTask";
import removeTask from "../../actions/removeTask";

import { PendingTaskItem, CompletedTaskItem } from './TaskItem';
import { FaRegClock } from 'react-icons/fa';

class Tasks extends React.Component
{
	constructor(props)
	{
		super(props);

		this.addTask = this.addTask.bind(this);
		this.completeTask = this.completeTask.bind(this);
		this.removeTask = this.removeTask.bind(this);

		// Refs
		this.taskName = React.createRef();
	}

	addTask()
	{
		if (this.taskName.value.trim() === "")
		{
			return;
		}

		let addTaskPayload = 
		{
			listId: this.props.listId,
			task: 
			{
				name: this.taskName.value,
				created: new Date().toString()
			}
		}

		// Resetting the task box
		this.taskName.value = "";

		this.props.dispatch(addTask(addTaskPayload));
	}

	completeTask(e)
	{		
		var taskId = e.target.getAttribute("data-id");

		let completeTaskPayload = 
		{
			listId: this.props.listId,
			taskId: taskId,
			task: 
			{
				name: this.props.pendingItems[taskId].name,
				created: new Date().toDateString()
			}
		}

		this.props.dispatch(completeTask(completeTaskPayload));
	}

	removeTask(e)
	{
		console.log(e.target);

		var taskId = e.target.parentElement.getAttribute("data-id");

		let removeTaskPayload = 
		{
			listId: this.props.listId,
			taskId: taskId
		}

		console.log(removeTaskPayload);

		this.props.dispatch(removeTask(removeTaskPayload));
	}

	render()
	{
		console.log("CALLING PROPS");
		console.log(this.props);

		if (this.props.visible !== false)
		{
			console.log("inside false");

			var bindCompleteTask = this.completeTask.bind(this);
			var bindRemoveTask = this.removeTask.bind(this);

			var pendingItems = this.props.pendingItems.map(function(task, index)
			{
				return (
					<PendingTaskItem value={task.name} created={task.created} index={index} completeTask={bindCompleteTask} removeTask={bindRemoveTask} checked={false} />
				)
			});

			var completedItems = this.props.completedItems.map(function(task, index)
			{
				return (
					<CompletedTaskItem value={task.name} created={task.created} index={index} checked={true} />
				)
			});

			return (
				<React.Fragment>
					
					<div className="row">
						<div className="col-lg-12">							
							<h1 id="listName">{this.props.name}</h1>
							<p><FaRegClock /> &nbsp;{this.props.created}</p>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-12">							
							<div className="input-group">								
								<input placeholder="I have to ..." type="text" className="form-control" ref={value => this.taskName = value} />
								<div className="input-group-append">
									<button type="button" className="btn btn-primary" onClick={this.addTask}>Add Task</button>
								</div>
							</div>
						</div>
					</div>

					<br />

					<div className="row">
						<div className="col-lg-12">
							<h3><b>Pending</b></h3>
							<ul className="list-group">{pendingItems}</ul>
						</div>
					</div>

					<br /><br />

					<div className="row">
						<div className="col-lg-12">
							<h3><b>Completed</b></h3>
							<ul className="list-group">{completedItems}</ul>
						</div>
					</div>

				</React.Fragment>
			);
		}
		else 
		{
			return (
				<h1>Let's start adding some tasks</h1>
			);
		}
	}
}

function mapStateToProps(state)
{
	console.log(state);

	if (state.clickedListId !== "-1")
	{
		console.log("clikced here");
		console.log(state.lists[state.clickedListId]);

		return {
			visible: state.clickedListId === "-1" ? false: true,
			listId: state.clickedListId,
			name: state.lists[state.clickedListId].name,
			created: state.lists[state.clickedListId].created,
			pendingItems: state.lists[state.clickedListId].pendingItems,
			completedItems: state.lists[state.clickedListId].completedItems,			
		}
	}
	else 
	{
		console.log("clikced here 2");
		return {
			visible: state.clickedListId === "-1" ? false: true,						
		}
	}
}

export default connect(mapStateToProps)(Tasks);