import { useEffect, useState } from "react";

const useItems = () => {
    const[items,setItems]=useState([])
    useEffect(()=>{
        const url="items.json"
    fetch(url)
    .then(res=>res.json())
    .then(data=>setItems(data))
    },[])
    return [items,setItems];
};

export default useItems;