import { Item } from '../item/Item';
import { Reorder } from 'framer-motion';
import { connect } from 'react-redux';
import { getTasks, setTasks } from '../../actions';
import { selectLoadingStatus, selectSearchingStatus, selectTasks } from '../../selectors';
import { Component } from 'react';


export class ListContainer extends Component {
	reorderHandler = (tasks) => this.props.dispatch(setTasks(tasks));

	componentDidMount() {
		this.props.dispatch(getTasks());
	}

	render() {
		const { tasks, isLoading, isSearching } = this.props;

		const loadingClass = (isLoading || isSearching) ? 'is-loading' : '';
		const isNothing = !isLoading && !tasks.length;

		return (
			<>
				<Reorder.Group className={`tasks-list ${loadingClass}`} as='ul' values={tasks} onReorder={this.reorderHandler}>
					{tasks.map((task) => (
						<Item task={task} key={task.id} />
					))}
				</Reorder.Group>
				{isNothing && <div>Ничего не найдено</div>}
			</>
		);
	}
}


const mapStateToProps = (state) => ({
	tasks: selectTasks(state),
	isLoading: selectLoadingStatus(state),
	isSearching: selectSearchingStatus(state),
});


export const List = connect(mapStateToProps)(ListContainer);
