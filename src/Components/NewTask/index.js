import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './styles.css';
import { apiPrefix } from '../../config';

class NewTask extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            priority: "",
        }
    }

    onChange = (event) => {
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state)
    }

    addnewTask = async() => {
        let res = await fetch(`${apiPrefix}/todo`,{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body:{
                ...this.state,
                date:new Date()
            }
        })

        let result = res.json()
        if(result && result.success){
            this.props.history.push("/home");
        }
    }

    render() {
        return (
            <div className="newtask__container">
                <h3 className="newtask__title">Create Task</h3>
                <div>
                    <form className="newtask__form">
                        <label>
                            <h3>Title :</h3>
                            <input
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.onChange}
                                className="newtask__formLabel"></input>
                        </label>
                        <label>
                            <h3>Description : </h3>
                            <textarea
                                type="text"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChange}
                                className="newtask__formLabelDescription"></textarea>
                        </label>
                        <label>
                            <h3>Priority : </h3>
                            <input
                                type="text"
                                name="priority"
                                value={this.state.priority}
                                onChange={this.onChange}
                                className="newtask__formLabel"></input>
                        </label>
                        {/* <label>
                            <h3>ETA : </h3>
                            <input 
                            type="date" 
                            name="ETA"
                            value={this.state.ETA}
                            onChange={this.onChange}
                            className="newtask__formLabel"></input>
                        </label> */}
                        <div>
                            <button value="submit" className="newtask__submit" onClick={() => this.addnewTask()}>Submit</button>
                            <button value="cancel" className="newtask__submit" onClick={() => this.props.cancel()}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default withRouter(NewTask)