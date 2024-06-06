import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button, HStack } from "@chakra-ui/react";
import hav from "./img/Component 65.png";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const Header = () => {
  return (
    <div className="w-full z-50 shadow-md absolute flex justify-center top-0 py-3 bg-havGreen">
      <header className="w-11/12 flex justify-between items-center">
       <div className="flex items-center gap-2"> <img src={hav} alt="hav" className="2xl:w-20 2xl:h-16 w-16 h-12" />
        <h1 className="2xl:text-4xl text-2xl font-normal text-black">HávFinder</h1></div>
        <HStack
            as="nav"
            spacing={4}
            display={{ base: "none", md: "flex" }}
            color="black"
            
            
          >
            <Button variant="link" fontSize={'20px'} color={'black'} fontWeight={400} transition={'ease-in'} transitionDuration={'1s'} onClick={() => document.getElementById('tabela').scrollIntoView()}>
              Tabela
            </Button>
            <Button variant="link" fontSize={'20px'} color={'black'} fontWeight={400} transition={'ease-in'} transitionDuration={'1s'} onClick={() => document.getElementById('mapa').scrollIntoView()}>
              Mapa
            </Button>
            <Button variant="link" fontSize={'20px'} color={'black'} fontWeight={400} transition={'ease-in'} transitionDuration={'1s'} onClick={() => document.getElementById('form').scrollIntoView()}>
              Formulário
            </Button>
          </HStack>
        <div className="md:hidden flex"><Menu>
          <MenuButton colorScheme="white" color={'black'} variant={'outline'} size={'lg'} as={Button} rightIcon={<ChevronDownIcon />}>
            Menu
          </MenuButton>
          <MenuList backgroundColor={'black'} className="border shadow-md border-havGreen">
            <MenuItem backgroundColor={'black'} color={'#88E771'} onClick={() => document.getElementById('tabela').scrollIntoView()}>
              Tabela
            </MenuItem>
            <MenuItem backgroundColor={'black'} color={'#88E771'} onClick={() => document.getElementById('mapa').scrollIntoView()}>
              Mapa
            </MenuItem>
            <MenuItem backgroundColor={'black'} color={'#88E771'} onClick={() => document.getElementById('form').scrollIntoView()}>
              Formulário
            </MenuItem>
          </MenuList>
        </Menu></div>
      </header>
    </div>
  );
};
