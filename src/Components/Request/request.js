import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation/navigation'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import '../Request/request.css'

const Request = () => {
    const [data, setdata] = useState([])
    const requestArray = [];
    
    // const { name , fathername , birth , CNICImage , cnic , accept , family , income , userImage , userid , value } = data
     
    

    function accepted(){
        console.log('Accepted')
    }

    useEffect(async () => {
        const db = getFirestore();
        const q = query(collection(db, "help"), where("accept", "==", false));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            requestArray.push(doc.data())
        });
        setdata(requestArray);
    }, [data])

    return (
        <div>
            <Navigation />
            {data.map((cardData,index)=>{
                return(
                    <div className='card' key={index}>
                    <img className='avatar' src={cardData.userImage}/>
                    {cardData.name ? <h3>Name : {cardData.name}</h3> : null} 
                    {cardData.fathername ? <h3> Father Name : {cardData.fathername}</h3> : null} 
                    <h3>Date of Birth : {cardData.birth}</h3>
                    <h3>Family Members : {cardData.family}</h3>
                    <h3>Need Food: {cardData.value}</h3>
                    <h3>Income : {cardData.income}</h3>
                    <h3>CNIC : {cardData.cnic}</h3>
                    <img src={cardData.CNICImage}/>
                    <h3>Serial Number : {cardData.userid}</h3>
                    <button onClick={accepted}>Accept</button>
                    <button>Reject</button>
                    <button>Delete</button>
                    </div>
                )
            })}
            
        </div>
    )
}

export default Request;
