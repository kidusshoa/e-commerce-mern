import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { IconDeleteBack2Line, IconIconEdit } from "../icons/icon";
import { useProductStore } from "../store/product";

interface Product {
  _id: string;
  name: string;
  price: string;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const toast = useToast();

  const { deleteProduct } = useProductStore();
  const handleDeleteProduct = async (pid: any) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
  };
  return (
    <Box
      shadow="lg"
      rounded="md"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton
            aria-label=""
            icon={<IconIconEdit />}
            // onClick={onOpen}
            colorScheme="blue"
          />
          <IconButton
            aria-label=""
            icon={<IconDeleteBack2Line />}
            onClick={() => handleDeleteProduct(product._id)}
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
