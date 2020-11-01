import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import NewTask from '../../Components/NewTask';
import './styles.css';
import { connect } from 'react-redux';

class Home extends Component {

	constructor() {
		super()
		this.state = {
			todos: [
				{
					"title": "todo1",
					"description": "Description of todo1",
					"priority": 1,
					"ETA": "23/04/2020"
				},
				{
					"title": "todo2",
					"description": "Description of todo1",
					"priority": 1,
					"ETA": "23/04/2020"
				},
				{
					"title": "todo3",
					"description": "Description of todo1",
					"priority": 1,
					"ETA": "23/04/2020"
				},
				{
					"title": "todo4",
					"description": "Description of todo1",
					"priority": 1,
					"ETA": "23/04/2020"
				}
			],
			createNew:false
		}
	}

	createNew = () => {
		this.setState({"createNew":true})
	}

	cancel = () => {
		this.setState({"createNew":false})
	}

	render() {
		return (
			<div className="home__container">
				{this.state.createNew ?

					<NewTask cancel={()=>this.cancel()} ></NewTask> :

					<div className="home__innerContainer">
						<div className="home__header">
							<button className="home__createNewButton" onClick={()=>this.createNew()}>Create Task</button>
							<div className="home__accountDetails">
								<Avatar
									className="home__avatar"
									alt='Tejas'
									src="./images"
								/>
								<h3>Tejas</h3>
							</div>

						</div>
						<TableContainer component={Paper}>
							<Table size="small" aria-label="a dense table">
								<TableHead className="home__tablehead">
									<TableRow>
										<TableCell>Sr no.</TableCell>
										<TableCell align="center">Title</TableCell>
										<TableCell align="center">Description&nbsp;</TableCell>
										<TableCell align="center">Priority&nbsp;</TableCell>
										<TableCell align="center">Date&nbsp;</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.props.todos.map((row, index) => (
										<TableRow key={row.title}>
											<TableCell component="th" scope="row">{index + 1}</TableCell>
											<TableCell align="center">{row.title}</TableCell>
											<TableCell align="center">{row.description}</TableCell>
											<TableCell align="center">{row.priority}</TableCell>
											<TableCell align="center">{row.ETA}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
	console.log("-------------state", state)
	return {
			todos:state.todos
	}
}

export default connect(mapStateToProps)(Home);