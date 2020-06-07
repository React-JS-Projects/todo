import React from 'react';
import AppHeader from './AppHeader';
import CreateList from './CreateList';
import Lists from './Lists';

class Left extends React.Component
{
	render()
	{
		return (
			<React.Fragment>
				<AppHeader appName="ToDo!" userName="You" />
				<CreateList />
				<Lists />
			</React.Fragment>
		);
	}
}

export default Left;