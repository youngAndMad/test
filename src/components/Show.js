import React from "react";
import FirstFloor from "../map/FirstFloor";
import SecondFloor from "../map/SecondFloor";
import ThirdFloor from "../map/ThirdFloor";

const Show = ({ selectedValue, selectedFloorBlockOption }) => {
    console.log(selectedFloorBlockOption)
    console.log('SELECTED VALUE', selectedValue)
    switch (selectedFloorBlockOption) {
        case "second":
            return <SecondFloor selectedValue={selectedValue}/>;
        case "third" :
            return <ThirdFloor selectedValue={selectedValue}/>
        default :
            return <FirstFloor selectedValue={selectedValue}/>
    }
};

export default Show;