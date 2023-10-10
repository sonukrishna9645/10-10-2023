import React, { useState } from 'react'

const Book = () => {
const [bk,setBk] =useState('');
const [an,setAn] =useState('');
const [pb,setpb] =useState('');
const[error,setError]=useState(false);


    const readbookname =(event) =>{
        event.preventDefault();
          console.log(event.target.value);
          setBk(event.target.value);
      }
      const readauthorname =(event) =>{
        event.preventDefault();
          console.log(event.target.value);
          setAn(event.target.value);
      }
      const readpub =(event) =>{
        event.preventDefault();
          console.log(event.target.value);
          setpb(event.target.value);
      }
      const checkfilldata =(event) =>{
        event.preventDefault();
         if(bk.trim ()===''|| an.trim() ===''||pb.trim()==='')
         {
          setError(true);
          return;
         }
         else
         {
            setError(false);
            const myobj={
                bookname:bk,
                author:an,
                publisher:pb
             }
            console.log(myobj)    
                
            fetch("https://sampledbcs-133ae-default-rtdb.firebaseio.com/Book.json",
            {
                method:"POST",
                body:JSON.stringify(myobj),
                headers:{"Content-Type":"application/json",
            }
            }
            );
            alert("Record Saved")
            
         }
      

      }
 



  return (
    <div>
      Book Name<input type="text" onChange={readbookname} required/><br/>
      Author name<input type="text" onChange={readauthorname} required/><br/>
      Publisher<input type="text" onChange={readpub} required/><br/>
      <button type="submit" onClick={checkfilldata}>SAVE</button>
      {error && 'All the fields must be entered'}
    </div>
  )
}

export default Book
