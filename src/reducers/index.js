import types from "../actions/types";
import produce from 'immer';

let defaultState = 
{
	clickedListId: "-1",
	lists: []
}

if (localStorage.getItem("state") !== null)
{
	defaultState = JSON.parse(localStorage.getItem("state"));
}

function reducer(state = defaultState, action)
{
	let newState = {};

	switch(action.type)
	{
		case types.CREATE_NEW_LIST:
			newState = {
				...state,
				lists: [...state.lists, action.data]
			};break;
		case types.CLICK_LIST: 
			newState = {
				...state,
				clickedListId: action.data.clickedListId
			};break;
		case types.ADD_TASK:
			newState = produce(state, draft => 
			{
				draft.lists[state.clickedListId].pendingItems.push(action.data.task);	
			});break;
		case types.COMPLETE_TASK: 
			newState = produce(state, draft => 
			{
				draft.lists[state.clickedListId].completedItems.push(action.data.task);
				draft.lists[state.clickedListId].pendingItems = draft.lists[state.clickedListId].pendingItems.filter(function(item, index)
				{
					return index.toString() !== action.data.taskId;
				});

			});break;
		case types.REMOVE_TASK: 
			newState = produce(state, draft => 
			{				
				draft.lists[state.clickedListId].pendingItems = draft.lists[state.clickedListId].pendingItems.filter(function(item, index)
				{
					return index.toString() !== action.data.taskId;
				});

			});break;
		default:
			return state;
	}

	localStorage.setItem("state", JSON.stringify(newState));
	return newState;
}

export default reducer;