import { useEffect,useState } from "react";
import { getAll } from "../services/Axios/APiCrud";
export const useDataTable=()=>{
    const [dataTable,setDataTable]=useState();
    useEffect(()=>{
        loadData()
    },[])

    const loadData = () => {
        getAll()
          .then((res: any) => {
            if (res.status === 200) {
              setDataTable(res?.data);
            }
          })
          .catch((error) => console.error("Error fetching data:", error));
      };
 return {loadData,dataTable}
}

