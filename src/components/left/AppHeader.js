import React from 'react';

class AppHeader extends React.Component
{
	render()
	{
		return (
			<div className="row">
				<div className="col-lg-12">
					<h1>{this.props.appName}</h1>
					<p>Hey there, {this.props.userName}</p>
				</div>
			</div>
		);
	}
}

export default AppHeader;