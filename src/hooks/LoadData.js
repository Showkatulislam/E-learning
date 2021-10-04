import { useEffect, useState } from "react"

const Course=()=>{
    const [courses,setcourses]=useState([])
    useEffect(()=>{
    fetch('./data.JSON')
    .then(res=>res.json())
    .then(data=>setcourses(data))
    },[])
    return [courses]
}   

export default Course;