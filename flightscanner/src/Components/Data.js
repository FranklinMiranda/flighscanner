import React, {useState, useEffect} from "react";
import Axios from 'axios';

// API endpoint URL : https://skyscanner44.p.rapidapi.com/autocomplete

const Data = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);

            const response = await Axios.get('https://skyscanner44.p.rapidapi.com/autocomplete')

            setData(response.data)

            setLoading(false)
        }

        loadData()
    }, [])

    return (
        <div className='Data'>
            {loading ? <h4>Loading...</h4> : console.log(data)}
        </div>
    )

}

export default Data