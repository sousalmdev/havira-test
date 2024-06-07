import { Button, Link } from "@chakra-ui/react";
import HomePage from "./components/homePage";
import { FaArrowCircleUp } from "react-icons/fa";



function App() {
  return (
    <div className=" bg-green-950 min-h-screen text-white " style={{fontFamily:'Clash Grotesk'}}>

    <HomePage/>
    <Button as={Link} href="#" bg={'none'} _hover={{bg:'none'}} position={'fixed'} right={5} bottom={10} borderRadius={'100%'} ><FaArrowCircleUp className="sm:text-6xl text-4xl shadow-md text-havGreen bg-black rounded-full "/></Button>
    </div>
  );
}

export default App;
