import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";

function HomeModal() {
  return (
    <Box>
      <Box
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h="280px"
        width="100%"
        p={6}
        margin="auto">
        <Box
          mb={28}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"0px 10px"}>
          <Image
            w={"40px"}
            src={
              "https://downloads.intercomcdn.com/i/o/355439/a7cdd3705c65918af17f3ce0/1bb87d41d15fe27b500a4bfcde01bb0e.png"
            }
          />
          <Box display={"flex"}>
            <Image
              w={"40px"}
              height={"40px"}
              borderRadius={"50%"}
              src="https://static.intercomassets.com/avatars/6417506/square_128/Untitled-1-1682411137.png"
            />
            <Image
              w={"40px"}
              height={"40px"}
              borderRadius={"50%"}
              src="https://static.intercomassets.com/avatars/5084876/square_128/5084876-1665143037.jpg"
            />
            <Image
              w={"40px"}
              height={"40px"}
              borderRadius={"50%"}
              src="https://static.intercomassets.com/avatars/424524/square_128/0424524-1665140119.png"
            />
          </Box>
        </Box>
        <Box fontSize={"25px"}>
          <Text color={"rgb(180,203,246)"}>Hello there.</Text>
          <Text color={"rgb(255,255,255)"}>How can we help?</Text>
        </Box>
      </Box>
      <Box p={6}>
        <Box border={"1px solid rgb(202,215,227)"} mt={4} borderRadius={"20px"}>
          <Flex flexDirection={"column"}>
            <Image
              p={6}
              src="https://downloads.intercomcdn.com/i/o/798705491/802ac1eb4c72711c6a270831/Join%20the%20New%20Intercom%20Community.png?resize=568x"
              alt=""
            />
            <Divider></Divider>
            <Box p={6} _hover={{ bg: "rgb(207,234,252)" }}>
              <Text color={"rgb(4,21,59)"} fontWeight={700}>
                The Intercom Community
              </Text>
              <Text color={"grey"}>
                Be sure to check out the Intercom Community for support, plus
                tips & tricks from Intercom users and much more
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box border={"1px solid rgb(202,215,227)"} mt={4} borderRadius={"20px"}>
          <Flex flexDirection={"column"}>
            <Image
              p={6}
              src="https://images.ctfassets.net/xny2w179f4ki/Y779AgRt5sjg2nE9NnWx7/2684a93c01ce95d546deedcc64a0e90d/HBR_Resource_LP_Thumbnail_-_393x250.png"
              alt=""
            />
            <Divider></Divider>
            <Box p={6} _hover={{ bg: "rgb(207,234,252)" }}>
              <Text color={"rgb(4,21,59)"} fontWeight={700}>
                Future-Proofing Businesses with Modern Customer Engagement
              </Text>
              <Text color={"grey"}>
                Customer retention is more important than ever. See how
                businesses are building unified, efficient customer engagement
                strategies that protect their bottom line.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeModal;
