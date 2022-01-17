import {useState} from "react";
import axios from "axios";

function useLoadData(){
    const [datas, setDatas] = useState(null);
    const loadData = (route) => {
        axios.get(route)
            .then(reponse => {
                setDatas(reponse.data)
            })
            .catch(error => {
                console.log("error")
            })
    }

    return [datas, loadData]
}

export default useLoadData;