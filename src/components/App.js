import {useState} from 'react'

import useFetch from "../hooks/useFetch";
import Map from "./Map";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import Error from "./Error";


const App = () => {

    const [filters, setFilters] = useState([])
    const [data, options, error, loading] = useFetch(filters);


  return (
    <>
        <Header setFilters={setFilters} numOfResults={data.length} options={options}/>
        {error ?
            <Error/>
            :
            <>
                {loading ?
                    <Loader/>
                    :
                    <Map eventsData={data}/>
                }
            </>

        }
        <Footer/>

    </>
  );
}

export default App;
