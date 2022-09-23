import React, { useEffect,useState } from 'react'

import {Input,Table, TableBody, TableCell, TableContainer, TableHead,TableRow, Paper} from "@mui/material"
import Axios from 'axios'

function ApplicationManagement() {

const [data, setData] = useState([])

const [appname, setAppname] = useState("")
const [planname, setPlanname] = useState("")
const [creator, setCreator] = useState("")


      
async function getData(e) {
    const response = await Axios.get("http://localhost:5000/test/getapplication")
    setData(response.data)
}

useEffect(()=>{
    getData()
}, [])

async function createApplication(){
    const response = await Axios.post("http://localhost:5000/test/createapplication", {appname:appname, planname:planname, creator:creator})
    console.log(response.data)
    getData()
}


  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>

            <TableCell>Apps</TableCell>
            <TableCell align="right">Plans</TableCell>
            <TableCell align="right">Creator</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.appname}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >


              <TableCell align="right">{row.appname}</TableCell>
              <TableCell align="right">{row.plans}</TableCell>
              <TableCell align="right">{row.creator}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Input placeholder="Application Name" value={appname} onChange={(event) => {setAppname(event.target.value)}}/>
    <Input placeholder="Plan Name" value={planname} onChange={(event) => {setPlanname(event.target.value)}}/>
    <Input placeholder="Creator" value={creator} onChange={(event) => {setCreator(event.target.value)}}/>
    <button onClick={createApplication} >Create Application</button>
    </>
  )
}

export default ApplicationManagement