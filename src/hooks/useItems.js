import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url =
      "https://whispering-scrubland-68201.herokuapp.com/inventoryItem";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [items]);
  return [items, setItems];
};

export default useItems;
