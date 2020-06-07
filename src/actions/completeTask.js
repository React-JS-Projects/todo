import types from "./types";

function completeTask(payload)
{
	return {
		type:  types.COMPLETE_TASK,
		data: payload
	}
}

export default completeTask;