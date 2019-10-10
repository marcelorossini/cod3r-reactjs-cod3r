import React from 'react'
import If from '../helpers/if'

export default props => (
    <If condition={!props.hide}>
    <button 
        className={`btn btn-${props.style}`}
        onClick={props.onClick}
    >
        <i className={`fa fa-${props.icon}`}></i>
    </button>  
</If>
)

/*
export default props => {
    props.hide ? (
        null
    )
    : (

    ) 
}

*/
