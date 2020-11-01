import React, { Component } from 'react';
import { newTask } from '../../redux';
import { connect } from 'react-redux';
import './styles.css';


class NewTask extends Component {

    constructor() {
        super()
        this.state = {
            title: "",
            description: "",
            priority: "",
            // ETA:""
        }
    }

    onChange = (event) => {
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state)
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
                            <button value="submit" className="newtask__submit" onClick={() => this.props.addnewTask(this.state)}>Submit</button>
                            <button value="cancel" className="newtask__submit" onClick={() => this.props.cancel()}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        addnewTask : (task) => dispatch(newTask(task))
    }
}

export default connect(null, mapDispatchToProps)(NewTask)