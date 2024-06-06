import { Button, Link } from "@chakra-ui/react";
import HomePage from "./components/homePage";
import { FaArrowCircleUp } from "react-icons/fa";



function App() {
  return (
    <div className="scroll-smooth bg-green-950 min-h-screen text-white " style={{fontFamily:'Clash Grotesk'}}>

    <HomePage/>
    <Button as={Link} href="#" bg={'none'} _hover={{bg:'none'}} position={'fixed'} right={10} bottom={10} borderRadius={'100%'} ><FaArrowCircleUp className="text-6xl text-havGreen bg-white rounded-full animate-pulse"/></Button>
    </div>
  );
}

export default App;
