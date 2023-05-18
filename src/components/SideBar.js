import React from "react";
import {Button, Drawer, DrawerBody, DrawerContent, DrawerHeader,
    DrawerOverlay, useDisclosure, Box, Text, Link, DrawerFooter,
    List, ListItem, Icon, useColorMode, useColorModeValue,
} from "@chakra-ui/react";
import {ArrowRightIcon, ArrowLeftIcon,
    SunIcon, MoonIcon,
} from "@chakra-ui/icons";

const Sidebar = () => {
    const customSidebarWidth = 240;
    let customSidebarMaxWidth = 300;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box pos="absolute">
            <Button
                size="xs"
                id="sidebar-open-btn"
                onClick={onOpen}
                left="0px"
                top="20px"
                h="40px"
                bg={useColorModeValue("#edf2f7", "#242a36")}
                _hover={{ bg: "#ffffff5e" }}
                zIndex={100}
                borderStartRadius="0">
                <ArrowRightIcon />
            </Button>
            <Drawer
                placement={"left"}
                onClose={onClose}
                isOpen={isOpen}
                userSelect={"none"}
                blockScrollOnMount={false}
                zIndex={2}>
                <DrawerOverlay />
                <DrawerContent w={customSidebarWidth} maxW={customSidebarMaxWidth}>
                    <Button
                        onClick={onClose}
                        size="xs"
                        right="0px"
                        top="20px"
                        h="40px"
                        w="80px"
                        borderEndRadius="0"
                        bg={useColorModeValue("#edf2f7", "#242a36")}
                        _hover={{ bg: "#ffffff5e" }}
                        position="absolute">
                        <ArrowLeftIcon />
                    </Button>
                    <DrawerHeader borderBottomWidth="1px">
                        <Box w="100%" h="100%" p="7.5px">
                           Базар Ақбұлақ
                        </Box>
                    </DrawerHeader>
                    <DrawerBody w="100%">
                        <List spacing={3}>
                            <ListItem>
                                <Button
                                    onClick={() => toggleColorMode()}
                                    boxShadow={"lg"}
                                    w="100%">
                                    <Text size="sm">Сменить тему</Text>
                                    <Icon
                                        as={colorMode === "light" ? SunIcon : MoonIcon}
                                        ml="0.5rem"
                                    />
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Link href="https://github.com/Yuujiso/aitumap">
                                    <Button boxShadow={"lg"} w="100%">
                                        <Text size="sm">Товары</Text>
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#">
                                    <Button boxShadow={"lg"} w="100%">
                                        <Text size="sm">Доставка</Text>
                                    </Button>
                                </Link>
                            </ListItem>
                        </List>
                    </DrawerBody>
                    <DrawerFooter>
                        <List w="100%" display="flex" flexDirection="column">
                            <ListItem justify="space-between">
                                <Link href="#">ссылка 1</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#">ссылка 2</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#">ссылка 3</Link>
                            </ListItem>
                        </List>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Sidebar;