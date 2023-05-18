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
    const colorInput = useColorModeValue("#edf2f7", "#242a36");
    const colorBgInput = useColorModeValue("#242a36", "#edf2f7");
    const colorInputPlaceholder = useColorModeValue("#edf2f7", "#242a366a");
    const floorOptionData = [
        {id: 3, name: "third",},
        {id: 2, name: "second",},
        {id: 1, name: "first",},
    ];

    const handleFloorOptionChange = (option) => {
        setSearch("");
        setSelectedFloorOption(option);
    };

    const handleSearchInput = e => setSearch(e.target.value);


    const handleFloorOptionClick = (e) => {
        let name = e.target.name;
        if (name !== selectedFloorOption) {
            setSelectedFloorOption(name);
            handleFloorOptionChange(name);
        }
    };

    const handleBlockOptionChange = e => setSelectedBlockOption(e.target.value);


    useEffect(string => {
            const handleKeyboardTyping = () => {
                console.log(search)
                console.log(/^\d+$/.test(search))
                setIsKeyboardTyping(/^\d+$/.test(search));
            };

            const handleFloor = () => {

            };

            const withoutKeyboardTyping = () => {
                handleFloor();
                let blockOptionValue = selectedBlockOption === "" ? "" : selectedBlockOption + ".";
                let activity = search ? blockOptionValue + search.toUpperCase() : search.toUpperCase();
                const groups = document.querySelectorAll(`[data-name*="${activity}"]`);

                if (groups.length > 0)
                    groups.forEach(group => group.classList.add("room-map-group-search-target"));


                const groupsToRemove = document.querySelectorAll(
                    `[data-name]:not([data-name*="${activity}"])`
                );

                if (groupsToRemove.length > 0)
                    groupsToRemove.forEach(group => group.classList.remove("room-map-group-search-target"));

            };

            const withKeyboardTyping = (s) => {
                try {
                    let input = Number(search);
                    if (input > 216 && input < 432){
                        setSelectedFloorOption("second")
                    }else if (input > 432 && input < 638){
                        setSelectedFloorOption("third")
                    }else {
                        setSelectedFloorOption("first")
                    }
                } catch (err) {
                    console.log(err);
                }

                const groups = document.querySelectorAll(
                    `[data-name*="${search.toUpperCase()}"]`
                );

                if (groups.length > 0) {
                    groups.forEach((group) => {
                        group.classList.add("room-map-group-search-target");
                    });
                }

                const groupsToRemove = document.querySelectorAll(
                    `[data-name]:not([data-name*="${search.toUpperCase()}"])`
                );

                if (groupsToRemove.length > 0) {
                    groupsToRemove.forEach((group) => {
                        group.classList.remove("room-map-group-search-target");
                    });
                }
            };

            const handleSearch = () => {
                handleKeyboardTyping();
                isKeyboardTyping ? withKeyboardTyping(search) : withoutKeyboardTyping();
            };

            handleSearch();
        },
        [isKeyboardTyping, search, selectedBlockOption, selectedFloorOption]);

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
                    <InputGroup w={"290px"}>
                        <Input
                            borderEndRadius={9}
                            borderStartRadius={0}
                            bg={colorBgInput}
                            color={colorInput}
                            type="text"
                            width="auto"
                            placeholder="Номер бутика"
                            _placeholder={{ color: colorInputPlaceholder }}
                            value={search}
                            onChange={(e) => {
                                handleSearchInput(e);
                            }}
                        />
                        <InputRightElement children={<SearchIcon color={colorInput} />} />
                    </InputGroup>
                </Flex>
                <Sidebar />
                    <Show selectedFloorBlockOption={selectedFloorOption}/>
            </Box>
        </>
    );
};

export default Home;