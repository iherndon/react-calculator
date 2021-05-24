import { useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Header from "../components/header";
import CalculatorButton from "../components/calculator-button";

function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleNumberClick = (evt) => {
    setDisplay(
      display === "0" ? evt.target.value : `${display}${evt.target.value}`
    );
  };

  const handleOperatorClick = (evt) => {
    setDisplay(`${display} ${evt.target.value} `);
  };

  return (
    <Box
      textAlign="center"
      display="flex"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      <Header />
      <Box as="section">
        <Text
          background="#252525"
          color="white"
          fontSize="5rem"
          textAlign="right"
          height="90px"
          margin="0"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          paddingRight="20px"
        >
          {display}
        </Text>
        <Box as="main" border="1px solid #c4c4c4" padding="20px 0 0 20px">
          <Flex>
            <CalculatorButton
              color="#337cac"
              value="+"
              onClick={handleOperatorClick}
            >
              +
            </CalculatorButton>
            <CalculatorButton
              color="#337cac"
              value="-"
              onClick={handleOperatorClick}
            >
              -
            </CalculatorButton>
            <CalculatorButton
              color="#337cac"
              value="*"
              onClick={handleOperatorClick}
            >
              ×
            </CalculatorButton>
            <CalculatorButton
              value="/"
              color="#337cac"
              onClick={handleOperatorClick}
            >
              ÷
            </CalculatorButton>
          </Flex>
          <Flex>
            <Box>
              <Flex>
                <CalculatorButton value="7" onClick={handleNumberClick}>
                  7
                </CalculatorButton>
                <CalculatorButton value="8" onClick={handleNumberClick}>
                  8
                </CalculatorButton>
                <CalculatorButton value="9" onClick={handleNumberClick}>
                  9
                </CalculatorButton>
              </Flex>
              <Flex>
                <CalculatorButton value="4" onClick={handleNumberClick}>
                  4
                </CalculatorButton>
                <CalculatorButton value="5" onClick={handleNumberClick}>
                  5
                </CalculatorButton>
                <CalculatorButton value="6" onClick={handleNumberClick}>
                  6
                </CalculatorButton>
              </Flex>
              <Flex>
                <CalculatorButton value="1" onClick={handleNumberClick}>
                  1
                </CalculatorButton>
                <CalculatorButton value="2" onClick={handleNumberClick}>
                  2
                </CalculatorButton>
                <CalculatorButton value="3" onClick={handleNumberClick}>
                  3
                </CalculatorButton>
              </Flex>
              <Flex>
                <CalculatorButton value="0" onClick={handleNumberClick}>
                  0
                </CalculatorButton>
                <CalculatorButton value="." onClick={handleNumberClick}>
                  .
                </CalculatorButton>
                <CalculatorButton
                  backgroundColor="#f0595f"
                  borderColor="#b0353a"
                  color="white"
                  _hover={{ background: "#f17377" }}
                  onClick={() => setDisplay("0")}
                >
                  AC
                </CalculatorButton>
              </Flex>
            </Box>
            <CalculatorButton
              height="auto"
              backgroundColor="#2e86c0"
              color="white"
              borderColor="#337cac"
              _hover={{ background: "#4e9ed4" }}
              onClick={() => setDisplay(eval(display))}
            >
              =
            </CalculatorButton>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Calculator;
