import { Button } from "@chakra-ui/react";

// Every React component has props
// React components have a children prop, which refers to
// it's content.
const CalculatorButton = ({ children, ...props }) => (
  <Button
    width="75px"
    height="60px"
    marginRight="20px"
    marginBottom="20px"
    borderRadius="3px"
    border="1px solid #c4c4c4"
    backgroundColor="transparent"
    fontSize="2rem"
    bgGradient="linear(180deg,transparent,transparent 50%, rgba(0, 0, 0, 0.04))"
    boxShadow="inset 0 0 0 1px hsl(0deg 0% 100% / 5%), inset 0 1px 0 0 hsl(0deg 0% 100% / 45%),
    inset 0 -1px 0 0 hsl(0deg 0% 100% / 15%), 0 1px 0 0 hsl(0deg 0% 100% / 15%)"
    textShadow="0 1px hsl(0deg 0% 100% / 40%)"
    _hover={{ background: "#eaeaea" }}
    backgroundColor={backgroundColor}
    {...props}
  >
    {children}
  </Button>
);

export default CalculatorButton;
