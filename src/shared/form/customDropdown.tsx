import React, { ChangeEventHandler, useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { reactSelectStyles } from '../form/reactSelectStyles';
import { IDropDownAndCheckboxOptions } from 'features/card/component/card';

interface IProps {
	className?: string;
	handleDropdown: (categoryType, filterType) => void;
	dropDownOptions: IDropDownAndCheckboxOptions[];
	customDropDownStyles?: StylesConfig<any, any>;
	filterType?: string | 'location' | 'sensors' ;
}
const CustomDropDown: React.FC<IProps> = (props) => {
	const [currentSelectedOption, setCurrentSelectedOption] = useState<string>('');

	const handleChangeReact: ChangeEventHandler<any> = (e: any) => {
		setCurrentSelectedOption(e.value);
		props.handleDropdown(e.value, props.filterType);
	};
	return (
		<div className={`${props.className || ''} dropdown-category`}>
			<Select
				placeholder={'All Locations'}
				isClearable={false}
				name={currentSelectedOption}
				options={props.dropDownOptions}
				onChange={(selectedOption: any) => handleChangeReact(selectedOption)}
				classNamePrefix='select dropdown-select'
				isMulti={false}
				className={`form-control react-select`}
				isSearchable={true}
				isOptionDisabled={(option) => option.disabled}
			/>
		</div>
	);
};
export default CustomDropDown;
