import React from 'react';
import { FaTrash } from 'react-icons/fa';

export class PendingTaskItem extends React.Component
{
	render() 
	{
		var taskValue = this.props.checked? <span className="taskValue">{this.props.value}</span> : this.props.value;

		return (
			<li className="list-group-item taskItem" data-id={this.props.index} key={this.props.index}>
				<div className="row">
					<div className="col-lg-1">
						<input type="checkbox" data-id={this.props.index} onClick={this.props.completeTask} checked={this.props.checked} />
					</div>
					<div className="col-lg-10">
					{
						taskValue
					}
					<p><span className="taskItemDate">{this.props.created}</span></p>
					</div>
					<div className="col-lg-1" data-id={this.props.index}>
						<FaTrash data-id={this.props.index} onClick={this.props.removeTask} />
					</div>
				</div>
			</li>
		)
	}
}

export class CompletedTaskItem extends React.Component
{
	render() 
	{
		var taskValue = this.props.checked? <span className="taskValue">{this.props.value}</span> : this.props.value;

		return (
			<li className="list-group-item taskItem" data-id={this.props.index} key={this.props.index}>
				<div className="row">
					<div className="col-lg-1">
						<input type="checkbox" data-id={this.props.index} onClick={this.props.completeTask} checked={this.props.checked} />
					</div>
					<div className="col-lg-10">
					{
						taskValue
					}
					<p><span className="taskItemDate">{this.props.created}</span></p>
					</div>
				</div>
			</li>
		)
	}
}