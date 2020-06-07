import React from 'react';
import './App.css';
import Left from './components/left/Left';
import Middle from './components/middle/Middle';
import Right from './components/right/Right';

function App() {
  return (
	<div className="container-fluid">
		<div className="row">
			<div className="col-lg-2" id="left">
				<Left />
			</div>
			<div className="col-lg-8" id="middle">
				<Middle />
			</div>
			<div className="col-lg-2" id="right">
				<Right />
			</div>
		</div>
	</div>
  );
}

export default App;