import React from 'react';
import MapDisplay from '@/Components/MapDisplay';

export type Aed = {
    id: number;
    facility_name: string;
    city_name: string | null;
    address: string | null;
    latitude: string | number;
    longitude: string | number;
}

type pageProps = {
    aedLocations: Aed[];
}

export default function AedMapPage({ aedLocations }: pageProps){
    return (
        <div className='aed-map-app'>
            <h1>AED地図アプリ</h1>
            <p>島田市内（開発段階）のAED設置場所を、以下に示すMAPに表示しています。</p>
            <main>
                <MapDisplay aedLocations = {aedLocations} />
            </main>
        </div>

    );
}