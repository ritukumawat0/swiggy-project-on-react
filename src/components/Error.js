import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return(
        <>
        <Header/>
        <div className="error">
             <h2>Error status : {err.status} {err.statusText}</h2>
             <p>{err.data}</p>
        </div>
        </>
    )
}

export default Error;