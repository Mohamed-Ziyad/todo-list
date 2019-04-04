import React, { Component } from 'react';

class TodoInput extends Component {
	render() {
		const { item, handleChange, handleSubmit, editItem } = this.props;
		return (
			<div className="card card-body my-3">
				<form onSubmit={handleSubmit}>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text bg-primary text-white">
								<i className="fa fa-book" aria-hidden="true" />
							</div>
						</div>
						<input
							type="text"
							className="form-control text-capitalize"
							placeholder="add at todo item"
							value={item}
							onChange={handleChange}
						/>
					</div>
					<button type="submit" className="btn btn-block btn-primary mt-3">
						{editItem ? 'Edit item' : 'add item'}
					</button>
				</form>
			</div>
		);
	}
}

export default TodoInput;
