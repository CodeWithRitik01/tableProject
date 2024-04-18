 import { useEffect, useState } from "react";
import styles from "./navbar.module.css"
import { data } from "../../data/data";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions, tableSelector } from "../../redux/reducers/tableLayout";
function Navbar(){
    const [name, setName] = useState('');
    const [value, setvalue] = useState('');
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

    const handleSort = (e)=>{
           e.preventDefault(); 
           console.log(value);
           if(value==="rating"){
            console.log("yes coming")
            dispatch(actions.sortOnrating({value}));
           }
           if(value==="fees"){
            console.log("yes fees coming")
            dispatch(actions.sortOnFees());
           }
           if(value==="descending"){
            dispatch(actions.sortOnDesc());
           }
           if(value==="ascending"){
            dispatch(actions.sortOnAesc());
           }
    }
    return (
        <>
        
        <div className={styles.navOut}>
           <h1>College Table</h1>
           <div className={styles.search}>
            <form onSubmit={handleSort}>
                <select onChange={(e)=>setvalue(e.target.value)}>
                    <option value="">select type</option>
                    <option value="rating">rating</option>
                    <option value="fees">fees</option>
                    <option value="Userreview">User review rating</option>
                    <option value="ascending">ascending</option>
                    <option value="descending">descending</option>
                </select>
                <button  type="submit" className={styles.sorting}>sort</button>

            </form>


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