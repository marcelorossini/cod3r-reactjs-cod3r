import React from 'react'
import { connect } from 'react-redux'

import IconButton from '../template/iconButton'
import Todo from './todo';

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map((todo) => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className="tableActions">
                    {!todo.done ? (
                        <IconButton 
                            style="success" 
                            icon="check"
                            onClick={() => props.handleMarkAsDone(todo)}                    
                        />                                 
                    ) : (
                        <IconButton 
                            style="warning" 
                            icon="undo"
                            onClick={() => props.handleMarkPending(todo)}                    
                        />                            
                    )}                               
                    <IconButton 
                        style="danger" 
                        icon="trash-o"
                        onClick={() => props.handleRemove(todo)}                    
                    />
                </td>
            </tr>
        ))
    }


    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>                    
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })
export default connect(mapStateToProps)(TodoList)