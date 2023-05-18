import React from "react";
import {useWindowDimensions} from "../hooks/useWindowDimensions";

const ThirdFloor = () => {
    const { height, width } = useWindowDimensions();
    return (
        <div>Hello world from third floor</div>
    );
}

export default ThirdFloor;