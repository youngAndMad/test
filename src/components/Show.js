import React from "react";
import FirstFloor from "../map/FirstFloor";
import SecondFloor from "../map/SecondFloor";
import ThirdFloor from "../map/ThirdFloor";

const Show = ({ selectedFloorBlockOption }) => {
    console.log(selectedFloorBlockOption)
    switch (selectedFloorBlockOption) {
        case "second":
            return <SecondFloor/>;
        case "third" :
            return <ThirdFloor/>
        default :
            return <FirstFloor/>
    }
};

export default Show;