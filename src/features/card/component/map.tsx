
import { FC, useCallback, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { isEmpty } from 'lodash';

    interface IMarkerProps {
    pollutionData?: any;
    key?: number;
    text?: string;
    lat?: number;
    lng?: number;
    sensor_name?: string;
    co?: number;
    pm25?: number;
    markerPosition?: any
    onMouseOver?: () => void
    mapData?:any
    }

    const GoogleMapRender: FC<IMarkerProps> = (props) => {
        const AnyReactComponent = ({ text }: any) => (
            <div>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="red"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </div>
          );
    const [zoomLocation, setZoomLocation] = useState(12)

    const Marker: FC<IMarkerProps> = useCallback(({ text, sensor_name, co, pm25, markerPosition,mapData }) => (
        <div>
        <div
            style={{
            color: 'red',
            fontWeight: 'bold',
            position: 'absolute',
            }}
        >
            {text}
        </div>
        </div >
    ),[])

    return (
        <div className='google--map position--relative'>
        <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
         key={props?.mapData?.id}
            bootstrapURLKeys={{ key: '' }} // Replace with your Google Maps API key
            zoom={zoomLocation}
            defaultCenter={{ lat:props?.mapData?.latitude|| 23.0225, lng:props?.mapData?.longitude|| 72.5714 }} // Set initial map center coordinates
            options={{ zoomControl: true }}
            defaultZoom={zoomLocation}
            >
                <AnyReactComponent
          lat={props?.mapData?.latitude|| 23.0225}
          lng={props?.mapData?.longitude|| 72.5714}
          text="My Marker"
        />
            </GoogleMapReact>
        </div>
        </div>
    );
    };

export default GoogleMapRender;