import types from "./types";

function addTask(payload)
{
	return {
		type:  types.ADD_TASK,
		data: payload
	}
}

export default addTask;