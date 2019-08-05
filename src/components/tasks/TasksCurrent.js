import { Container, CardColumns } from 'reactstrap'
import React, { Component } from 'react'
import TaskCard from "./TaskCard"



export default class TasksCurrent extends Component {
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