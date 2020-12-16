import {useState, useEffect} from "react"

const filterData = (data, filters) => {

    if(filters.length !== 0) {
        data = data.filter(d => filters.includes(d.categories[0].id))
    }


    return data.map(d => {

        const geometry = d.geometries[d.geometries.length - 1].coordinates;
        const date = d.geometries[d.geometries.length - 1].date

        return ({
            id: d.id,
            title: d.title,
            lng: typeof geometry[0] === "number" ?
                geometry[0]
                :
                geometry[0][0][0],

            lat: typeof geometry[1] === "number" ?
                geometry[1]
                :
                geometry[0][0][1],
            time: date,
            catId: d.categories[0].id,
            catTitle: d.categories[0].title
        })
    })


}

const filteredOptions = (data) => {
    const dynamicOptions = data.map(d => (
        JSON.stringify({label: d.catTitle, value: d.catId})
    ))
    return [...new Set(dynamicOptions)].map(JSON.parse)
}

const useFetch = (filters = []) => {

    const [data, setData] = useState([]);
    const [options, setOptions] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        (async () => {
            setLoading(true)
            try {
                const resData = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
                const {events} = await resData.json()
                const filteredData = filterData(events, filters)
                setData(filteredData)
                if(filters.length === 0) {
                    const dynamicOptions = filteredOptions(filteredData)
                    setOptions(dynamicOptions)
                }


            } catch (e) {
                console.log(e)
                setError(true)
            } finally {
                setLoading(false)
            }
        })()

    },[filters])

    return [data, options, error, loading]

}

export default useFetch