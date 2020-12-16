import {useState} from "react";
import GoogleMapReact from 'google-map-react'
import Marker from "./Marker";
import InfoBox from "./InfoBox";

const Map = ({center, zoom, eventsData}) => {

    const [infoData, setInfoData] = useState(null)

    const setMarkers = eventsData
        .map(e => (
            <Marker
                key={e.id}
                lat={e.lat}
                lng={e.lng}
                catId={e.catId}
                onClick={() => setInfoData(e)}
            />
            )
        )

    return (
        <main className="main">
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API}}
                defaultCenter={center}
                defaultZoom={zoom}
                options={{
                    fullscreenControl: false
                }}
            >
                {setMarkers}
            </GoogleMapReact>
            {infoData && <InfoBox info={infoData} onClose={() => setInfoData(null)}/>}
        </main>
    )
}

Map.defaultProps = {
    center: {
        lat: 49.8175,
        lng: 15.4730
    },
    zoom: 5
}
export default Map