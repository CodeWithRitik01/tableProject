 import { useState } from "react";
import styles from "./navbar.module.css"
import { data } from "../../data/data";
function Navbar(){
    const [name, setName] = useState('');

    const handlefilter = ()=>{
       const fitlerdList = data.filter((item)=>item.college===name) ;
       console.log(fitlerdList);
    }
    return (
        <div className={styles.navOut}>
           <h1>Home</h1>
           <div>
            <form >
            <input type="text" placeholder="filter on name" onChange={(e)=>setName(e.target.value)}></input>
            <button onClick={()=>handlefilter()}>Search</button>
            </form>

           </div>
          
        </div>
    )
}

export default Navbar;