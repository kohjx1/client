import React, {useState, useEffect} from 'react'
import EditUser from './EditUser'
import Axios from 'axios'

function UserManagement() {

    const [data, setData] = useState([]);
        // data equals to "i am junhe"
        // console.log(data);

        // sets that data variable to "I am Eric"
        // setData("I am Eric");
    
    // const response = Axios.get(<route link>, <{username: "junhe"}>)
    
    async function getData(e) {
        
       
        const response = await Axios.get("http://localhost:5000/test/getusers")
        // console.log(response.data[0].username)
        console.log(response.data)


        let data = response.data
        // filter by admin

        // filter, 
        console.log(data.filter((i)=>i.username === "admin"))

        // map (can only be used on lists)
        data.map(i=> console.log(i))};




        // reduce

        const fakeData = [
            {appname: "app1", planname: "plan1"},
            {appname: "app1", planname: "plan2"},
            {appname: "app2", planname: "plan1"},
            {appname: "app1", planname: "plan3"},
            {appname: "app2", planname: "plan5"},
            {appname: "app3", planname: "plan200"},
            {appname: "app1", planname: "plan10"},
            {appname: "app3", planname: "plan1"}
        ]

        // function groupPlansInApp(data){
        //     return data.reduce( (access, current) => {
        //         console.log(access)
        //         console.log(current)
        //         access.push(current)
        //         return access
        //     }, [])
        // }

        
        function groupPlansInApp(data, field){
            return data.reduce( (access, current) => {
                // set a key which is equal to the appname 


                // 1st iteration access -> []
                // 2nd iteration access -> [app1: ["plan1"]]
                // 3rd iteration access [app1: ["plan1","plan2"]]


                // 1st iteration current -> {appname: "app1", planname: "plan1"}
                // 2nd iteration current -> {appname: "app1", planname: "plan2"}

                // 1st iteration "app1"
                // 2nd iteration "app1"
                const key = current[field]

                // 1st iteration ["plan1"]
                // 2nd iteration ["plan1","plan2"]
                const value = access[key] ? [...access[key], current.planname] : [current.planname]

                // 1st iteration [app1: ["plan1"]]
                // 2nd iteration [app1: ["plan1","plan2"]]
                access[key] = value

                return access
            }, [])
        }

        // console.log()
        
        const appplan = groupPlansInApp(fakeData,"appname")
        const app1 = appplan["app1"]

        console.log(app1.map((e) => e + "hi"))
        // 
      



 

    useEffect(()=>{
        // setData("You should say something")
        getData()
        // groupPlansInApp(fakeData,"appname")
    }, [])

    // console.log(data)




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