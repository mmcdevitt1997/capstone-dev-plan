import { Container, CardColumns } from 'reactstrap'
import React, { Component } from 'react'
import TaskCard from "./TaskCard"



export default class TasksToDo extends Component {

  handleTaskTodo = event => {
    event.preventDefault()
    this.props.task.phase= this.props.task.todo
    this.props.updateTask(this.props.task)
  }

    render() {
        return (
            <div>
                <Container style={{ marginBottom: "5rem" }}>
                    <CardColumns>
                        {
                            this.props.tasks.map(task =>
                                <TaskCard key={task.id} task={task} {...this.props} />
                            )
                        }

                    </CardColumns>
                </Container>
            </div>

        )
    }
}
