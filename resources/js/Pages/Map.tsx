import { APIProvider, AdvancedMarker, Map} from "@vis.gl/react-google-maps";
// import { usePage } from "@inertiajs/react";

// const {appName, customValue} = usePage().props;

export default function DisplayMap() {
    const location = [{id: 1, position: {lat: 34.836439, lng: 138.176044}}, {id: 2, position: {lat: 34.847132, lng: 138.183893}}];
    const current_location = {lat: 34.847132, lng: 138.176044};

    return (
        <APIProvider
            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        >
            <Map
                mapId = 'DEMO_MAP_ID'
                style={{width: '100vw', height: '100vh'}}
                defaultCenter={current_location}
                defaultZoom={15}>
                {location.map((loc) => (
                    <AdvancedMarker
                        key={loc.id}
                        position={loc.position}
                    >
                    </AdvancedMarker>                
                ))}
            </Map>
        </APIProvider>
    );
}