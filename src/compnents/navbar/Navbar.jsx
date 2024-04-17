 import { useEffect, useState } from "react";
import styles from "./navbar.module.css"
import { data } from "../../data/data";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions, tableSelector } from "../../redux/reducers/tableLayout";
function Navbar(){
    const [name, setName] = useState('');
    let {filteredCollege} = useSelector(tableSelector);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actions.addFilter(data));
    },[])
    const handlefilter = (e)=>{
       e.preventDefault();
       dispatch(actions.filterit({name, data}));
        console.log(filteredCollege,"yoyo");
       
    }
    return (
        <>
        
        <div className={styles.navOut}>
           <h1>College Table</h1>
           <div className={styles.search}>
            <form onSubmit={handlefilter}>
            <input type="text" placeholder="search by college name" onChange={(e)=>setName(e.target.value)}></input>
            <button type="submit">Search</button>
            </form>

           </div>
          
        </div>
        <Outlet />
        </>
   
    )
}

export default Navbar;