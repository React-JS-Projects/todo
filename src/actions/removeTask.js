import types from "./types";

function removeTask(payload)
{
	return {
		type:  types.REMOVE_TASK,
		data: payload
	}
}

export default removeTask;