import React from 'react';
import { connect } from 'react-redux';
import clickList from '../../actions/clickList';
import { FaListAlt } from 'react-icons/fa';

class Lists extends React.Component
{
	constructor(props)
	{
		super(props);

		this.onListClick = this.onListClick.bind(this);
	}	

	onListClick(e)
	{		
		let clickedListId = e.target.getAttribute("data-index");

		let clickListPayload = 
		{
			clickedListId: clickedListId
		};

		this.props.dispatch(clickList(clickListPayload));
	}

	render()
	{
		var onListClick = this.onListClick.bind(this);

		var listItems = this.props.lists.map(function(list, index)
		{
			return (
			<li className="list-group-item listItems" key={index} data-index={index} onClick={onListClick}>
				<FaListAlt data-index={index} /> &nbsp; {list.name}<span data-index={index} className="listItemSummary">{list.pendingItems.length}</span>
			</li>
			)
		});

		return (
			<React.Fragment>
			<br />
			<h3>Lists</h3>			
			<ul className="list-group">
			{
				listItems
			}
			</ul>
			</React.Fragment>
		);
	}
}

function mapStateToProps(state)
{
	return {
		lists: state.lists
	}
}

export default connect(mapStateToProps)(Lists);