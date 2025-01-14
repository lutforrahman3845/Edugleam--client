import { useEffect } from "react";

function docTitle(title){
    useEffect(()=>{
        document.title = title
    },[title])
}
export default docTitle;