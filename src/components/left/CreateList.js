import React from 'react';
import { connect } from 'react-redux';
import createNewList from '../../actions/createNewList';

class CreateList extends React.Component
{
	constructor(props)
	{
		super(props);

		this.createNewList = this.createNewList.bind(this);

		// Refs
		this.listNameBox = React.createRef();
	}

	createNewList()
	{
		var newListName = this.listNameBox.value;

		this.listNameBox.value = "";

		var newListPayload = 
		{
			name: newListName,
			pendingItems: [],
			completedItems: [],
			created:  new Date().toDateString()
		};

		this.props.dispatch(createNewList(newListPayload));
	}

	render()
	{
		return (
			<div className="row">
				<div className="col-lg-12">
					<input type="text" className="form-control" ref={value => this.listNameBox = value} />
					<button type="button" className="btn btn-success btn-sm" onClick={this.createNewList}>Create List</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state)
{
	return {
		
	}
}

export default connect(mapStateToProps)(CreateList);