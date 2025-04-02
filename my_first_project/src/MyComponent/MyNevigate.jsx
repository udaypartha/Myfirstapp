import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MyNavigate(){
    const navigate = useNavigate();
    let isLoggedIn=true;
    useEffect(()=>{
        if(isLoggedIn){
            navigate('/about')
        }
    })
    return(
        <>
        <p>This is my Navigate component</p>
        </>
    )

}
export default MyNavigate;