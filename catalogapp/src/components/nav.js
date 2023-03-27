import React, { useState } from "react";
import Header from "./Header";
const Nav = () =>{
    const [sQuery, setSQuery] = useState("");
    const [result, setResult] = useState([])
    const [isSearch, setIsSearch] = useState(false);
    const[key, setKey] = useState("");
    const navigate = useNavigator()
}
const setIsSearch =(e) =>{
fetch("https://vpic.nhtsa.dot.gov/api/ /vehicles/getmanufacturerdetails/")
.then(res=>res.json())
.then(data=>{
    console.log(data)
})
}
return(
    <>
    <div className="container">
    <h2 className="header">Vechile Manufacturing</h2>
    <div container1>
    <label>search</label>
    <input type="text" onChange={(e)=>{setIsSearch}} />
    </div>
    <div className="dropdown">
    <label for="type">Filter by Vechile type</label>
    <select>
    <option>All</option>
    <option>Passanger car</option>
    <option>Truck</option>
    <option>MotorCycle</option>
    <option>Incomplete vehicles</option>
    <option>Bus</option>
    <option>LSV</option>
    <option>Trailer</option>
    </select>
    </div>

    <h2 isSearch={isSearch} setIsSearch={setIsSearch} />

    <div>
    {
        isSearch && 
        <div>
        {
        setResult.map((key)=>{
            return
        
        <ul>
        <li>
                 name
        </li>
        <li>
                    country
        </li>
        <li>
                    type
        </li>
        {
            <ul>
            <li>{setResult.country}</li>
            <li>{setResult.country}</li>
            <li>{setResult.vechileType}</li>
            </ul>

        }
        </ul>
        
            
        })
        }
        </div>
    }
    </div>
    </div>
    
    
    </>
)
export default Nav;