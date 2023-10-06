import React from 'react'
import './Transferdata.css'
const Transferdata = (props) => {
  return (
    <div>
    <h1 className='aa' >welcome</h1>
    <p>
  USERNAME: &nbsp;{
        props.username

    }
    <br></br>
   PASSWORD: &nbsp;{
        props.password
    }
    <br></br>
   USERTYPE:&nbsp; {
        props.usertype
    }
    </p>
    </div>
  )
}

export default Transferdata
