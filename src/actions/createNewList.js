import types from "./types";

function createNewList(payload)
{
	return {
		type:  types.CREATE_NEW_LIST,
		data: payload
	}
}

export default createNewList;