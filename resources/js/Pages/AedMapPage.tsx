import MapDisplay from '@/Components/MapDisplay';   

export default function AedMapPage(){
    return (
        <div className='aed-map-app'>
            <h1>AED地図アプリ</h1>
            <p>島田市内（開発段階）のAED設置場所を、以下に示すMAPに表示しています。</p>
            <main>
                {MapDisplay()}
            </main>
        </div>

    );
}