import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Divider
} from "@chakra-ui/react";
import hav from "./img/Component 65.png";
import {  HamburgerIcon } from "@chakra-ui/icons";
import { FaHome, FaMap, FaPencilAlt, FaTable } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="w-full z-50 h-24 shadow-md fixed flex justify-center top-0 bg-havGreen">
      <header className="w-11/12 flex justify-between items-center">
        <div className="flex items-center">
   
          <img src={hav} alt="hav" className="2xl:w-20 2xl:h-16 w-16 h-12" />
          <h1 className="2xl:text-4xl text-2xl font-normal text-black">
            HávFinder
          </h1>
        </div>
        <HStack
          as="nav"
          display={{ base: "none", md: "flex" }}
          color="black"
        >
          <Button
            variant="link"
            width={100}
            borderRadius={0}
            height={100}
            _hover={{background:'rgba(0,0,0,20%)',color:'white'}}
            fontSize={"20px"}
            color={"black"}
            fontWeight={400}
            transition={"ease"}
            transitionDuration={".3s"}
            onClick={() => document.getElementById("tabela").scrollIntoView()}
          >
            Tabela
          </Button>
          <Button
            variant="link"
            width={100}
            borderRadius={0}
            height={100}
            _hover={{background:'rgba(0,0,0,20%)',color:'white'}}
            fontSize={"20px"}
            color={"black"}
            fontWeight={400}
            transition={"ease"}
            transitionDuration={".3s"}
            onClick={() => document.getElementById("mapa").scrollIntoView()}
          >
            Mapa
          </Button>
          <Button
            variant="link"
            width={100}
            borderRadius={0}
            height={100}
            _hover={{background:'rgba(0,0,0,20%)',color:'white'}}
            fontSize={"20px"}
            color={"black"}
            fontWeight={400}
            transition={"ease"}
            transitionDuration={".3s"}
            onClick={() => document.getElementById("form").scrollIntoView()}
          >
            Formulário
          </Button>
        </HStack>
        <div className="md:hidden flex">
          <Menu>
            <MenuButton
              colorScheme="white"
              color={"black"}
              variant={"ghost"}
              size={'lg'}
              as={Button}
              
            >
             <HamburgerIcon className="text-2xl"/>
            </MenuButton>
         
            <MenuList
              className="border shadow-md border-black"
            >
              <MenuItem
                paddingBottom={3}
                color={"black"}
                onClick={() =>
                  document.getElementById("tabela").scrollIntoView()
                }
                icon={<FaTable/>}
              >
                Tabela
              </MenuItem>
              <Divider />
              <MenuItem
                icon={<FaMap/>}
                color={"black"}
                paddingBlock={3}
                onClick={() => document.getElementById("mapa").scrollIntoView()}
              >
                Mapa
              </MenuItem>
              <Divider />
              <MenuItem
                paddingBlock={3}
                color={"black"}
                onClick={() => document.getElementById("form").scrollIntoView()}
                icon={<FaPencilAlt/>}
              >
                Formulário
              </MenuItem>
              <Divider />
               <a href="/">  <MenuItem
                paddingTop={3}
                color={"black"}
                icon={<FaHome/>}
              >
             Voltar ao menu  
              </MenuItem></a>
            </MenuList>
          </Menu>
        </div>
      </header>
    </div>
  );
};
