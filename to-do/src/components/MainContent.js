import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            todoItems: todosData.map(item => <TodoItem key={item.id} item={item}/>)
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        console.log("Changed", id)
    }

    render() {
        return(
            <div className='main content'>
                <div className='todo-list'>
                    {this.state.todoItems}
                </div>
            </div>
        )
    }
}

export default MainContent
