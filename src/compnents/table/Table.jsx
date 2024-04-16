import styles from "./table.module.css"
import { data } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { tableSelector } from "../../redux/reducers/tableLayout";
function Table(){
    let {filteredCollege} = useSelector(tableSelector);

    return (
        <>
        <table>
            <tr>
               <th className={styles.rank}>CD Rank</th>
              <th className={styles.colleges}>Colleges</th>
              <th>Course Fees</th>
              <th>Placement</th>
              <th>User Reviews</th>
              <th>Ranking</th>

            </tr>
            {filteredCollege.map((item)=>(
                item.show===true?
                item.featured?
                <tr className={styles.featuredDiv}>
                <td>  #{item.id}</td>
                {item.featured?
                            <td>
                            <img className={styles.featuredimg} src="https://www.csc.sg/events/images/Featured_Banner.png"></img><br/>
                            <img className={styles.logo} src={item.imgurl}></img>
                            <span className={styles.college}>{item.college}</span><br></br>    
                            <span className={styles.address}>{item.address} | {item.approved}</span> <br/>
                            {item.cutoff?
                            <div className={styles.rankCut}>
                               <label>
                                <span >{item.type}</span><br/>
                                <span>JEE-Advanced 2023 Cutoff - {item.cutoff}</span>
                              </label>
                              <select className={styles.dropdown}>
                                <option></option>
                              </select>
                            </div>
                            
                           
                             :null}
                             <div className={styles.allButton}>
                             <button className={styles.applybutton}><img src="https://cdn-icons-png.flaticon.com/128/4705/4705921.png"></img> Apply Now</button>
                             <button className={styles.downloadbutton}><img src="https://cdn-icons-png.flaticon.com/128/724/724822.png"></img> Download Brochure</button>
                             <button><input type="checkbox"></input> Add To Compare</button>
                             </div>
                        </td>
                :
                        <td>
                        <img className={styles.logo} src={item.imgurl}></img>
                        <span className={styles.college}>{item.college}</span><br></br>    
                        <span className={styles.address}>{item.address} | {item.approved}</span> <br/>
                        {item.cutoff?
                        <div className={styles.rankCut}>
                            <label>
                            <span >{item.type}</span><br/>
                            <span>JEE-Advanced 2023 Cutoff - {item.cutoff}</span>
                        </label>
                        <select className={styles.dropdown}>
                            <option></option>
                        </select>
                        </div>
                        
                        
                        :null}
                        <div className={styles.allButton}>
                        <button className={styles.applybutton}><img src="https://cdn-icons-png.flaticon.com/128/4705/4705921.png"></img> Apply Now</button>
                        <button className={styles.downloadbutton}><img src="https://cdn-icons-png.flaticon.com/128/724/724822.png"></img> Download Brochure</button>
                        <button><input type="checkbox"></input> Add To Compare</button>
                        </div>
                    </td>
                 }
    
                <td >
                    <div className={styles.courseCol}>
                    <span className={styles.courseFee}>₹ {item.CourseFee}</span><br/>
                    <span className={styles.courseDet}>BE/B.Tech</span><br/>
                    <span className={styles.courseDet}>-1st Year Fees</span><br/>
                    <button className={styles.Comparebutton}><img src="https://cdn-icons-png.flaticon.com/128/7763/7763549.png"></img> Compare Fees</button>
                    </div>
                </td>
                <td >
                    <div className={styles.courseCol}>
                        <span className={styles.courseFee}>₹ {item.AP}</span><br/>
                        <span className={styles.courseDet}>Average Package</span><br/>
                        <span className={styles.courseFee}>₹ {item.HP}</span><br/>
                        <span className={styles.courseDet}>Highest Package</span><br/>
                        <button className={styles.comparePlace}><img src="https://cdn-icons-png.flaticon.com/128/7763/7763549.png"></img> Compare Placement</button>
                    </div>
                </td>
                <td>
                    <div className={styles.userReview}>
                        <span className={styles.ratingcir}><img src="https://cdn-icons-png.flaticon.com/128/5111/5111178.png"  /> {item.rating}/10</span><br/>
                        <span className={styles.courseDet}>Based on 400 User </span><br />
                        <span className={styles.courseDet}>Reviews</span>
                        <div className={styles.socialLife}>
                       <label>
                        <span>✔ Best in Social Life</span>
                      </label>
                      <select className={styles.dropdown}>
                        <option></option>
                      </select>
                    </div>
                    </div>
                </td>
                <td>
                    <span>#{item.rank} in India</span><br/>
                    <span className={styles.newsLogo}><img src={item.rankedBy}></img> 2023</span>
                    <div className={styles.moreRank}>
                        <span>+ More</span>
                        <select className={styles.moredropdown}>
                        <option></option>
                      </select>
                    </div>
                </td>
             </tr>


                :


                <tr>
                <td>  #{item.id}</td>
                {item.featured?
                            <td  className={styles.featuredDiv}>
                            <img className={styles.featuredimg} src="https://www.csc.sg/events/images/Featured_Banner.png"></img><br/>
                            <img className={styles.logo} src={item.imgurl}></img>
                            <span className={styles.college}>{item.college}</span><br></br>    
                            <span className={styles.address}>{item.address} | {item.approved}</span> <br/>
                            {item.cutoff?
                            <div className={styles.rankCut}>
                               <label>
                                <span >{item.type}</span><br/>
                                <span>JEE-Advanced 2023 Cutoff - {item.cutoff}</span>
                              </label>
                              <select className={styles.dropdown}>
                                <option></option>
                              </select>
                            </div>
                            
                           
                             :null}
                             <div className={styles.allButton}>
                             <button className={styles.applybutton}><img src="https://cdn-icons-png.flaticon.com/128/4705/4705921.png"></img> Apply Now</button>
                             <button className={styles.downloadbutton}><img src="https://cdn-icons-png.flaticon.com/128/724/724822.png"></img> Download Brochure</button>
                             <button><input type="checkbox"></input> Add To Compare</button>
                             </div>
                        </td>
                 :
                        <td>
                        <img className={styles.logo} src={item.imgurl}></img>
                        <span className={styles.college}>{item.college}</span><br></br>    
                        <span className={styles.address}>{item.address} | {item.approved}</span> <br/>
                        {item.cutoff?
                        <div className={styles.rankCut}>
                            <label>
                            <span >{item.type}</span><br/>
                            <span>JEE-Advanced 2023 Cutoff - {item.cutoff}</span>
                        </label>
                        <select className={styles.dropdown}>
                            <option></option>
                        </select>
                        </div>
                        
                        
                        :null}
                        <div className={styles.allButton}>
                        <button className={styles.applybutton}><img src="https://cdn-icons-png.flaticon.com/128/4705/4705921.png"></img> Apply Now</button>
                        <button className={styles.downloadbutton}><img src="https://cdn-icons-png.flaticon.com/128/724/724822.png"></img> Download Brochure</button>
                        <button><input type="checkbox"></input> Add To Compare</button>
                        </div>
                    </td>
                 }
    
                <td >
                    <div className={styles.courseCol}>
                    <span className={styles.courseFee}>₹ {item.CourseFee}</span><br/>
                    <span className={styles.courseDet}>BE/B.Tech</span><br/>
                    <span className={styles.courseDet}>-1st Year Fees</span><br/>
                    <button className={styles.Comparebutton}><img src="https://cdn-icons-png.flaticon.com/128/7763/7763549.png"></img> Compare Fees</button>
                    </div>
                </td>
                <td >
                    <div className={styles.courseCol}>
                        <span className={styles.courseFee}>₹ {item.AP}</span><br/>
                        <span className={styles.courseDet}>Average Package</span><br/>
                        <span className={styles.courseFee}>₹ {item.HP}</span><br/>
                        <span className={styles.courseDet}>Highest Package</span><br/>
                        <button className={styles.comparePlace}><img src="https://cdn-icons-png.flaticon.com/128/7763/7763549.png"></img> Compare Placement</button>
                    </div>
                </td>
                <td>
                    <div className={styles.userReview}>
                        <span className={styles.ratingcir}><img src="https://cdn-icons-png.flaticon.com/128/5111/5111178.png"  /> {item.rating}/10</span><br/>
                        <span className={styles.courseDet}>Based on 400 User </span><br />
                        <span className={styles.courseDet}>Reviews</span>
                        <div className={styles.socialLife}>
                       <label>
                        <span>✔ Best in Social Life</span>
                      </label>
                      <select className={styles.dropdown}>
                        <option></option>
                      </select>
                    </div>
                    </div>
                </td>
                <td>
                    <span>#{item.rank} in India</span><br/>
                    <span className={styles.newsLogo}><img src={item.rankedBy}></img> 2023</span>
                    <div className={styles.moreRank}>
                        <span>+ More</span>
                        <select className={styles.moredropdown}>
                        <option></option>
                      </select>
                    </div>
                </td>
             </tr>
              :null
            ))}

        </table>
      
        </>
    )
}

export default Table;