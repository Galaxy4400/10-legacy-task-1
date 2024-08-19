import { Component } from 'react';
import { Form } from '../form/Form';
import { Header } from '../header/Header';
import { List } from '../list/List';

export class Tasks extends Component {
	render() {
		return (
			<div className="tasks">
				<Form />
				<div className="tasks-container">
					<Header />
					<List />
				</div>
			</div>
		);
	}
}
