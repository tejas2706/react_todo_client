import React, { Component } from 'react';
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
import { withRouter } from 'react-router-dom';
import { apiPrefix } from '../../config';
import * as _ from 'lodash';

class Home extends Component {

	constructor(props) {
		super(props)
		this.state = {
			todos: [],
			createNew:false,
			loading:true
		}
	}

	componentDidMount (){
        this.getTodos()
	}

	componentDidUpdate(prevprops,prevstate, snapshot){
		if(this.state.loading){
			this.getTodos()
			this.setState({loading:false})
		}
	}

	async getTodos(){
		try{
			const token = localStorage.getItem("token");
			if(!token){
				this.props.history.push('/login')
			}

            let res = await fetch(`${apiPrefix}/todos`, {
                method:'GET',
                headers:{
                    'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': token
                }
            });

            let result  = await res.json();

            if(!_.isEmpty(result)){
				this.setState({todos:result});
            }

        }catch(error){
	        console.log("Home -> getTodos -> error", error)
        }
	}

	createNew = () => {
		this.setState({"createNew":true})
	}

	cancel = () => {
		this.setState({"createNew":false, loading:true})
	}

	deleteTodo = async (id) => {
		try{

            let res = await fetch(`${apiPrefix}/todo/${id}`, {
                method:'DELETE',
                headers:{
                    'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem("token")
                }
            });

            let result  = await res.json();

            if(!_.isEmpty(result)){
				this.setState({loading:true})
            }

        }catch(error){
	        console.log("Home -> componentDidMount -> error", error)
        }
	}

	logout = () => {
		localStorage.clear()
		this.props.history.push('/login')
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
									onClick={()=>this.logout}
								/>
								<h3 className="home__logout" onClick={this.logout}>Logout</h3>
							</div>

						</div>
						{!this.state.todos.length ? 
						
						<h3>No Todos, create new to add todos.</h3>
						
						:

						<TableContainer component={Paper}>
							<Table size="small" aria-label="a dense table">
								<TableHead className="home__tablehead">
									<TableRow>
										<TableCell>Sr no.</TableCell>
										<TableCell align="center">Title</TableCell>
										<TableCell align="center">Description&nbsp;</TableCell>
										<TableCell align="center">Priority&nbsp;</TableCell>
										<TableCell align="center">Date&nbsp;</TableCell>
										<TableCell align="center">Action&nbsp;</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.todos.map((row, index) => (
										<TableRow key={row._id}>
											<TableCell component="th" scope="row">{index + 1}</TableCell>
											<TableCell align="center">{row.title}</TableCell>
											<TableCell align="center">{row.description}</TableCell>
											<TableCell align="center">{row.priority}</TableCell>
											<TableCell align="center">{row.date}</TableCell>
											<TableCell align="center"><button className="home__delBtn" onClick={()=>this.deleteTodo(row._id)}>Delete</button></TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					}
					</div>
				}
			</div>
		)
	}
}


export default withRouter(Home);