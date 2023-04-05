import {  useParams } from "react-router-dom"



export default function SpecificCatagory() {
    const {id}=useParams();
  return (
    <div>
        {id}
    </div>
  )
}
