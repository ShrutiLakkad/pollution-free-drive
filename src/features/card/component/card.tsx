import { useEffect, useState } from "react";
import { StylesConfig } from "react-select";
import CustomDropDown from "shared/form/customDropdown";
import { sensorsData } from "shared/util/utility";

import { GoogleMap } from "react-google-maps";
import GoogleMapRender from "./map";

export interface IDropDownAndCheckboxOptions {
	id: string | number;
	name?: string;
	value: string | number;
	label: string;
	disabled?: boolean;
}
interface IProps {
	className?: string;
	handleDropdown: (categoryType, filterType) => void;
	dropDownOptions: IDropDownAndCheckboxOptions[];
	customDropDownStyles?: StylesConfig<any, any>;
}

const Card = () => {
  const [locationData, setLocationData] = useState([])
  const [sensorDetails, setSensorDetails] = useState('')
  const [categoryDropdownOption, setCategoryDropdownOption] = useState<IDropDownAndCheckboxOptions[]>([]);
  const [sensorData,setSensorData] = useState<any>({})

	const handleLocation = (data) => {
		setSensorDetails(data);
  }

	useEffect(() => {
		fetchCategories();
	}, []);

  const fetchCategories = () => {
    sensorsData.forEach((data) => {
      locationData.push({ id: data.id, value: data.location, name: data.location,label:data.location });
    });
  }
  
  useEffect(() =>{
    let locationSensorData =  sensorsData.find(data=>data.location===sensorDetails)
    setSensorData(locationSensorData)
  },[sensorDetails])


    return (
      <>
        <div className="container">
          <div className="card">
            <CustomDropDown
                    className='challenge-dropdown'
                    handleDropdown={handleLocation}
                    dropDownOptions={locationData}
                  />
            <div className="circle"></div>
          </div>
            <div  className={`card card-details ${sensorData ? 'show' : 'hide'}`}>
            <div className="sensor-details">
              <div className="sensor-data">
              <h5>Co<sub>2</sub> : </h5>
              <span className="sensor">{sensorData?.co}</span>
              </div>
              <div className="sensor-data">
              <h5>Description : </h5>
              <p className="sensor">{sensorData?.description}</p>
              </div>
              <div className="sensor-data">
              <h5>Installation Date:</h5>
              <span className="sensor">{sensorData?.installation_date}</span>
              </div>
              <div className="sensor-data">
              <h5>Longitude: </h5>
              <span className="sensor">{sensorData?.longitude}</span>
              </div>
              <div className="sensor-data">
              <h5>PM<sub>2.5</sub> : </h5>
              <span className="sensor">{sensorData?.pm25}</span>
              </div>
              <div className="sensor-data">
              <h5>Sensor Name: </h5>
              <span className="sensor">{sensorData?.sensor_name}</span>
              </div>
              <div className="sensor-data">
              <h5>Sensor Type: </h5>
              <span className="sensor">{sensorData?.sensor_type}</span>
              </div>
              <div className="sensor-data">
              <h5>Severity: </h5>
              <span className="sensor">{sensorData?.severity}</span>
              </div>
              <div className="sensor-data">
              <h5>Temperature:</h5>
              <span className="sensor">{sensorData?.temperature}</span>
              </div>
            </div>
          </div>
        </div>
            <GoogleMapRender mapData={sensorData}/>
      </>

    )
};
export default Card;