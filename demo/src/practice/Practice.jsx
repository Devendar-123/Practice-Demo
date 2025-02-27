import React, { useEffect, useState } from 'react'
const data = "https://jsonplaceholder.typicode.com/posts"
const Practice = () => {
    const [details , setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=>{
        const handleData = async ()=>{
            try{
              const response = await fetch(data);
              const newData = await response.json();
              setDetails(newData)
            }catch{
              setError("Failed in Fetching Data! try Again  ❌")
            }finally{
              setLoading(false)
            }
        }
        handleData()
    },[])

    if(loading){
      return(
        <p>Loading details please wait....</p>
      )
    }

    if(error){
      return(
        <p>{error}</p>
      )
    }

  return (
    <div>
        <table>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>TITLE</th>
              <th>BODY</th>
            </tr>
          </thead>

          <tbody>
            {details.map((data,id)=>(
              <tr key={id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Practice
