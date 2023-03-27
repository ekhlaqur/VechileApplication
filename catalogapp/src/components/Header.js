import React, { useState } from "react";
const Header = ({isSearch, setIsSearch}) =>{

    const [search, setSearch] = useState([]);
    const [res, setRes] = useState([]);
    function searchRes(e){
        if(e.target.value === ""){
            setIsSearch(false)
        }
        setIsSearch(true);
        setSearch(e.target.value)
        fetch("https://vpic.nhtsa.dot.gov/api//vehicles/getmanufacturerdetails/")
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setRes(data.res);
            console.log(res);
        })
    }
    return(
        <>
        <div className="container">
        <h2>Vechile Manufacturing</h2>
        <label>search</label>
        <div className="container1" onChange={(e)=>{searchRes(e)}}></div>
        <input type="text" placeholder="search here" />
        
        </div>

        <div className="container2">
        {
            res !=undefined && isSearch &&
            res.map((ele)=>{
                return(
                    <ul>
                    <li>
                    {ele.name}
                    </li>
                    <li>
                    {ele.country}
                    </li>
                    <li>
                    {ele.type.name}
                    </li>
                    </ul>
                )
            })
        }
       
        </div>
    
        </>

    )
}
export default Header;