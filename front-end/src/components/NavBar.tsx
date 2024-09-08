import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  IconCart4,
  IconLightUp,
  IconMoonStarsFill,
  IconPlusSquare,
} from "../icons/icon";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="1140px" px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip={"text"}
        >
          <Link to="/">
            <Box display="flex" flexDir="row" gap="5px">
              Product Store{" "}
              <IconCart4
                style={{
                  color: "red",
                }}
              />
            </Box>
          </Link>
        </Text>

        <HStack spacing={2} alignItems="center">
          <Link to="/create">
            <Button>
              <IconPlusSquare style={{ color: "#000" }} />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <IconLightUp style={{ color: "#000" }} />
            ) : (
              <IconMoonStarsFill style={{ color: "#000" }} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
