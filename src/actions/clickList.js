import types from "./types";

function clickList(payload)
{
	return {
		type:  types.CLICK_LIST,
		data: payload
	}
}

export default clickList;