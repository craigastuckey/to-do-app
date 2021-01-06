import React from 'react'
import TodoItem from './TodoItem'

function MainContent() {
    return(
        <div className='main content'>
            <div className='todo-list'>
                <TodoItem 
                    item='crust it'
                />
                <TodoItem 
                    item='eat dinner'
                />
                <TodoItem 
                    item='crush it some more'
                />
            </div>
        </div>
    )
}

export default MainContent