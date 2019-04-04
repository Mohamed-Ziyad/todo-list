import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
	state = {
		items: [],
		id: 0,
		item: '',
		editItem: false,
	};
	handleSubmit = e => {
		e.preventDefault(); //stop reloads the page

		const newItem = {
			id: this.state.id,
			title: this.state.item,
		};
		//console.log(newItem);
		//new array
		const updatedItems = [...this.state.items, newItem];
		this.setState({
			items: updatedItems, //arry only updating
			item: '',
			id: uuid(), //to stop id dublication
			editItem: false,
		});
	};

	handleChange = e => {
		this.setState({
			item: e.target.value,
		});
	};

	clearList = () => {
		this.setState({
			items: [],
		});
	};

	handleDelete = id => {
		const filterItems = this.state.items.filter(item => item.id !== id);
		this.setState({
			items: filterItems,
		});
	};
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h3 className="text-capitalize text-center">Todo Input</h3>
						<TodoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
						/>
						<TodoList
							items={this.state.items}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
