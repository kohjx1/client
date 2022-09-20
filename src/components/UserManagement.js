import React, {useState, useEffect} from 'react'
import EditUser from './EditUser'

function UserManagement() {

    const [data, setData] = useState("I am Junhe");
        // data equals to "i am junhe"
        // console.log(data);

        // sets that data variable to "I am Eric"
        // setData("I am Eric");
    
        
    
    useEffect(()=>{
        setData("You should say something")
    }, [])

    console.log(data)




  return (
    <div>
        <div>This is 
            <h1>{data}</h1>
        </div>
        <EditUser setData={setData} />
    </div>
  )
}

export default UserManagement