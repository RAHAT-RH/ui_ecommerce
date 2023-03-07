import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
const Dropdown = () => {

    const [divisionOptions, setDivisionOptions] = useState([]);
    const [districtOptions, setDistrictOptions] = useState([]);
    const [selectedDivision, setSelectedDivision] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    const handleDivisionChange = (option) => {
        setSelectedDivision(option);
        setSelectedDistrict(null);
    };

    const handleDistrictChange = (option) => {
        setSelectedDistrict(option);
    };

    useEffect(() => {
        const fetchDivisionOptions = async () => {
            const response = await axios.get('https://wehatbazar.thecell.tech/api/division');
            const divisionOptionsData = response.data.data.map((option) => ({
                label: option.name,
                value: option.id,
            }));
            setDivisionOptions(divisionOptionsData);
        };

        fetchDivisionOptions();
    }, []);

    useEffect(() => {
        const fetchDistrictOptions = async () => {
            if (selectedDivision) {
                const response = await axios.get(`https://wehatbazar.thecell.tech/api/district?division_id=${selectedDivision.value}`);
                const districtOptionsData = response.data.data.map((option) => ({
                    label: option.name,
                    value: option.id,
                }));
                setDistrictOptions(districtOptionsData);
            }
        };

        fetchDistrictOptions();
    }, [selectedDivision]);

    console.log(selectedDivision.value)
    console.log(selectedDistrict.value)


    return (
        <div>
            <Select
                options={divisionOptions}
                value={selectedDivision}
                onChange={handleDivisionChange}
                isSearchable
                placeholder="Select a division"
            />
            {selectedDivision && (
                <Select
                    options={districtOptions}
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    isSearchable
                    placeholder="Select a district"
                />
            )}

        </div>
    );
};

export default Dropdown;