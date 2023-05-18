import React from "react";
import {useWindowDimensions} from "../hooks/useWindowDimensions";

const SecondFloor = () => {
    const {height, width} = useWindowDimensions();
    return (
        <div>Hello world from second floor</div>
    );
}

export default SecondFloor;