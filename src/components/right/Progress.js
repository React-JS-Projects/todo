import React from 'react';
import { connect } from 'react-redux';

class Progress extends React.Component
{
	render()
	{
		return (
			<React.Fragment>
				<h2>Summary</h2>
				<hr />
				<h5>Total Tasks: {this.props.totalCount}</h5>
				<h5>Pending Tasks: {this.props.pendingCount}</h5>				
			</React.Fragment>
		);
	}
}

function mapStateToProps(state)
{
	var totalTasks = 0;
	var pendingItems = 0;

	if (state.clickedListId !== "-1" && state.clickedListId !== null)
	{
		totalTasks = state.lists[state.clickedListId].pendingItems.length + state.lists[state.clickedListId].completedItems.length;
		pendingItems = state.lists[state.clickedListId].pendingItems.length;		
	}

	return {
		totalCount: totalTasks,
		pendingCount: pendingItems
	}
}

export default connect(mapStateToProps)(Progress);