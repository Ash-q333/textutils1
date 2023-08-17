import React from 'react'

export default function Alert(props) {
    const capitalize= (text)=>{
        let capitalized=text.toLowerCase()
        return text.toLocaleUpperCase()[0]+capitalized.slice(1)
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role='alert'>
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}
