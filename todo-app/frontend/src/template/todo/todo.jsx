import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const url = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
             description: '',
             list: []
        }
        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        Axios.get(`${url}?sort=createdAt${search}`).then(result => this.setState({...this.state, list: result.data}))
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        Axios.post(url, { description }).then(result => {
            this.refresh()
            this.setState({...this.state, description: ''})
            alert('Item adicionado com sucesso!')
        })
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.setState({...this.state, description: ''})
        this.refresh()
    }

    handleMarkAsDone(todo) {
        Axios.put(`${url}/${todo._id}`,{
            done: true
        }).then(result => {
            this.refresh(this.state.description)
            alert('Item alterado com sucesso!')
        })   
    }

    handleMarkPending(todo) {
        Axios.put(`${url}/${todo._id}`,{
            done: false
        }).then(result => {
            this.refresh(this.state.description)
            alert('Item alterado com sucesso!')
        })   
    }    

    handleRemove(todo) {
        Axios.delete(`${url}/${todo._id}`).then(result => {
            this.refresh(this.state.description)
            alert('Item removido com sucesso!')
        })
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm 
                    description={this.state.description}
                    handleChange={ (e) => this.handleChange(e) }
                    handleAdd={ () => this.handleAdd() }
                    handleSearch={ () => this.handleSearch() }
                    handleClear={ () => this.handleClear() }
                />
                <TodoList
                    list={this.state.list}
                    handleMarkAsDone={ (todo) => this.handleMarkAsDone(todo) }
                    handleMarkPending={ (todo) => this.handleMarkPending(todo) }
                    handleRemove={ (todo) => this.handleRemove(todo) }
                />
            </div>
        )
    }
}