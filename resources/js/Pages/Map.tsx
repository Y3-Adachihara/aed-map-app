import { APIProvider, AdvancedMarker, Map} from "@vis.gl/react-google-maps";
// import { usePage } from "@inertiajs/react";

// const {appName, customValue} = usePage().props;

function DisplayMap() {
    const position = {lat: 34.836439, lng: 138.176044};

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <Map mapId = 'DEMO_MAP_ID' style={{width: '100vw', height: '100vh'}} center={position} zoom={10}>
                <AdvancedMarker position={position}></AdvancedMarker>
            </Map>
        </APIProvider>
    );
}

export default DisplayMap;