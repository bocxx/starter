import {
  Text,
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";

import {} from "@chakra-ui/react";

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize='xl' fontWeight='600'>
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function Home() {
  return (
    <Box as={Container} maxW='7xl' mt={14} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems='flex-start' spacing='20px'>
            <chakra.h2 fontSize='3xl' fontWeight='700'>
              Medium length title
            </chakra.h2>
            <Button colorScheme='green' size='md'>
              Call To Action
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.h1
              mb={6}
              fontSize={{
                base: "4xl",
                md: "6xl",
              }}
              fontWeight='bold'
              lineHeight='none'
              letterSpacing={{
                base: "normal",
                md: "tight",
              }}
              color='gray.900'
              _dark={{
                color: "gray.100",
              }}
            >
              All your{" "}
              <Text
                display={{
                  base: "block",
                  lg: "inline",
                }}
                w='full'
                bgClip='text'
                bgGradient='linear(to-r, green.400,purple.500)'
                fontWeight='extrabold'
              >
                customer feedback
              </Text>{" "}
              in one single place.
            </chakra.h1>
            <chakra.p
              px={{
                base: 0,
                lg: 24,
              }}
              mb={6}
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              color='gray.600'
              _dark={{
                color: "gray.300",
              }}
            ></chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"First Feature"}
          text={"Short text describing one of you features/service"}
        />
        <Feature
          heading={"Second Feature"}
          text={"Short text describing one of you features/service"}
        />
        <Feature
          heading={"Third Feature"}
          text={"Short text describing one of you features/service"}
        />
        <Feature
          heading={"Fourth Feature"}
          text={"Short text describing one of you features/service"}
        />
      </Grid>
      <Divider mt={12} mb={12} />
      <SimpleGrid columns={2} spacing={10}>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
      </SimpleGrid>
    </Box>
  );
}
