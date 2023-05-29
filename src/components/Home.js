import React, { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import Show from "./Show";
import {
    Box,
    Select,
    Button,
    Flex,
    Input,
    useColorModeValue,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import ReactSelect from "./ReactSelect";

const Home = () => {
    const { width } = useWindowDimensions();

    const [selectedFloorOption, setSelectedFloorOption] = useState("first");
    const [selectedBlockOption, setSelectedBlockOption] = useState("");
    const [isKeyboardTyping, setIsKeyboardTyping] = useState(false);
    const [search, setSearch] = useState("");

    const colorBgSelect = useColorModeValue("#242a36cf", "#edf2f7d3");
    const colorSelect = useColorModeValue("#edf2f7", "#242a36");
    const colorFloorOptionCurrent = useColorModeValue("#edf2f7", "#242a36");
    const colorBgFloorOption = useColorModeValue("#242a36", "#edf2f7");
    const colorTextFloorOption = useColorModeValue("#edf2f7", "#242a36");
    const colorTextCurrentFloorOption = useColorModeValue("#242a36", "#edf2f7");

    const floorOptionData = [
        {id: 3, name: "third",},
        {id: 2, name: "second",},
        {id: 1, name: "first",},
    ];

    const handleFloorOptionChange = (option) => {
        setSearch("");
        setSelectedFloorOption(option);
    };

    const handleFloorOptionClick = (e) => {
        let name = e.target.name;
        if (name !== selectedFloorOption) {
            setSelectedFloorOption(name);
            handleFloorOptionChange(name);
        }
    };

    const handleBlockOptionChange = e => setSelectedBlockOption(e.target.value);
    const [selectedValue, setSelectedValue] = useState(null)

    function onSetSelectedValue(value) {
        setSelectedValue(value)
    }

    useEffect(()=> {
        console.log('HOME SELECTED VALUE', selectedValue)
    }, [selectedValue])

    const firstFloorSelectOptions = [
        {name: 'Обувной бутик', id: 'daneker'},
        {name: 'Мясной бутик', id: 'daneker2'},
        {name: 'Мужской бутик', id: 'daneker3'},
        {name: 'Женский бутик', id: 'daneker4'},
    ]

    const [reactSelectOptions, setReactSelectOptions] = useState(firstFloorSelectOptions)

    useEffect(()=> {
        if (selectedFloorOption === 'first') {
            setReactSelectOptions(firstFloorSelectOptions)
        } else if (selectedFloorOption === 'second') {
            // создать secondFloorSelectOptions = []
        } else {
            // создать thirdFloorSelectOptions = []
        }
    }, [selectedFloorOption])
    return (
        <>
            <Box>
                <Flex
                    flexDirection="column"
                    zIndex={1}
                    pos="absolute"
                    justify="space-between"
                    align="center"
                    top="46%"
                    right="20px"
                    bg={colorBgFloorOption}
                    borderRadius="9px"
                    p="2px"
                    w="36px"
                    h="100px">
                    {floorOptionData.map((item) => {
                        return (
                            <Button
                                key={item.id}
                                name={item.name}
                                onClick={handleFloorOptionClick}
                                size="sm"
                                bg={
                                    selectedFloorOption === item.name
                                        ? colorFloorOptionCurrent
                                        : colorBgFloorOption
                                }
                                _hover={{ bg: "#4da2ff" }}
                                borderRadius="9px"
                                color={
                                    selectedFloorOption === item.name
                                        ? colorTextCurrentFloorOption
                                        : colorTextFloorOption
                                }>
                                {item.id}
                            </Button>
                        );
                    })}
                </Flex>
                <Flex
                    mt={"20px"}
                    pos="absolute"
                    zIndex={20}
                    width={width}
                    justifyContent="center">
                    <Select
                        pointerEvents={!isKeyboardTyping ? "auto" : "none"}
                        bg={!isKeyboardTyping ? colorBgSelect : "gray"}
                        color={colorSelect}
                        value={selectedBlockOption}
                        onChange={handleBlockOptionChange}
                        borderEndRadius={0}
                        borderStartRadius={9}
                            width="auto">
                        <option style={{ color: colorBgSelect }} value="#">
                            Спортивные товары
                        </option>
                        <option style={{ color: colorBgSelect }} value="#">
                            Домашние товары
                        </option>
                        <option style={{ color: colorBgSelect }} value="#">
                            Еда
                        </option>
                        <option style={{ color: colorBgSelect }} value="#">
                            Одежда
                        </option>
                    </Select>
                    <ReactSelect options={reactSelectOptions} onSetOptions={onSetSelectedValue} />
                </Flex>

                <Sidebar />

                <Show selectedValue={selectedValue} selectedFloorBlockOption={selectedFloorOption}/>
            </Box>
        </>
    );
};

export default Home;