import React from 'react'

export default props => (
    <nav className="nav navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <i className="fa fa-calendar-check-o"></i> TodoApp
                </a>
            </div>

            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li className="nav navbar-nav"><a href="#/todos">Tarefas</a></li>
                    <li className="nav navbar-nav"><a href="#/about">Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
)