import React from 'react'

const Course = () => {
    // const [un,setUn] =useState('');
    // const [pwd,setPwd] =useState('');
  return (
    <div>
      <form>
      Course Name:<input type="text"   />
      Duration:<input type="text"   />
      Fee Amount:<input type="text"   />
      <button type="submit">SAVE</button><br/> 
      </form>
    </div>
  )
}

export default Course
