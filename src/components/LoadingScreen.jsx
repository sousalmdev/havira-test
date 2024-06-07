import { Spinner } from "@chakra-ui/react";

function LoadingScreen() {
  return (
    <div className="flex items-center bg-default justify-center h-screen">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        className="text-havGreen"
        size="xl"
      />
    </div>
  );
}

export default LoadingScreen;
