import { Component } from 'react';
import { onCreate } from '../../helpers';
import { connect } from 'react-redux';
import { selectCreatingStatus, selectTasks } from '../../selectors';

const defaultFormState = { title: '' };


export class FormContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			formData: defaultFormState,
		};
	}

	setFormData = (formData) => {
		this.setState({ ...this.state, formData });
	}

	render() {
		const { tasks, isCreating, dispatch } = this.props;
		const { formData } = this.state;
		const setFormData = this.setFormData;

		return (
			<form
				className="tasks-form"
				onSubmit={(event) => onCreate(event, tasks, formData, setFormData, defaultFormState, dispatch)}
			>
				<input
					className="tasks-form__input input"
					name="title"
					type="text"
					value={formData.title}
					onChange={({ target }) => setFormData({ ...formData, title: target.value })}
				/>
				<button className="tasks-form__button button" type="submit" disabled={isCreating}>Добавить новую задачу</button>
			</form>
		);
	}
}


const mapStateToProps = (state) => ({
	tasks: selectTasks(state),
  isCreating: selectCreatingStatus(state),
});


export const Form = connect(mapStateToProps)(FormContainer);
