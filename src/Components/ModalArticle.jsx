import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

export default function ModelArticle() {
  return (
    <Box>
      <Box
        borderTopLeftRadius={20}
        textAlign={"center"}
        bg={"rgb(0,87,255)"}
        color={"white"}
        fontSize={"24px"}
        p={4}
        fontWeight={700}>
        News
      </Box>
      <Box>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex flexDirection={"column"} pl={6} mt={6}>
            {" "}
            <Text fontWeight={700} color={"rgb(47,47,47)"}>
              Latest
            </Text>
            <Text fontWeight={500} color={"rgb(130,130,130)"}>
              From Team Intercom
            </Text>
          </Flex>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={"0px 10px"}>
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
        </Flex>

        <Box p={6}>
          <Box
            border={"1px solid rgb(202,215,227)"}
            mt={4}
            borderRadius={"20px"}>
            <Flex flexDirection={"column"}>
              <Image
                borderTopRadius={20}
                src="https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png"
                alt=""
              />
              <Flex gap={2} pl={6} mt={2}>
                <Button
                  color={"rgb(36,111,255)"}
                  bg={"rgb(229,238,255)"}
                  borderRadius={50}>
                  New
                </Button>
                <Button
                  color={"rgb(36,111,255)"}
                  bg={"rgb(229,238,255)"}
                  borderRadius={50}>
                  + 2 labels
                </Button>
              </Flex>
              <Box p={6}>
                <Text color={"rgb(4,21,59)"} fontWeight={700}>
                  Support customers with Fin in 45 languages—join the open
                  beta👇
                </Text>
                <Text color={"grey"}>
                  Support your customers with Fin in 45 languages—with no extra
                  setup required.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box p={6}>
          <Box
            border={"1px solid rgb(202,215,227)"}
            mt={-6}
            borderRadius={"20px"}>
            <Flex flexDirection={"column"}>
              <Image
                borderTopRadius={20}
                src="https://downloads.intercomcdn.com/i/o/850964865/8d1717b98563f4697ea8945a/Cover.png"
                alt=""
              />
              <Flex gap={2} pl={6} mt={2}>
                <Button
                  color={"rgb(36,111,255)"}
                  bg={"rgb(229,238,255)"}
                  borderRadius={50}>
                  Inbox
                </Button>
                <Button
                  color={"rgb(36,111,255)"}
                  bg={"rgb(229,238,255)"}
                  borderRadius={50}>
                  New
                </Button>
              </Flex>
              <Box p={6}>
                <Text color={"rgb(4,21,59)"} fontWeight={700}>
                  Streamline external collaboration with side conversations
                </Text>
                <Text color={"grey"}>
                  Start a conversation with external partners from within the
                  context of a conversation or ticket.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box p={6}>
          <Box
            border={"1px solid rgb(202,215,227)"}
            mt={-6}
            borderRadius={"20px"}>
            <Flex flexDirection={"column"}>
              <Image
                borderTopRadius={20}
                src="https://downloads.intercomcdn.com/i/o/861417391/6794b48e891b5e19cdc713ba/Screenshot+2023-10-25+at+09.22.37.png"
                alt=""
              />
              <Flex gap={2} pl={6} mt={2}>
                <Button
                  color={"rgb(36,111,255)"}
                  bg={"rgb(229,238,255)"}
                  borderRadius={50}>
                  Inbox
                </Button>
                <Button
                  color={"rgb(36,111,255)"}
                  bg={"rgb(229,238,255)"}
                  borderRadius={50}>
                  New
                </Button>
              </Flex>
              <Box p={6}>
                <Text color={"rgb(4,21,59)"} fontWeight={700}>
                  Give your customers a centralized view of their tickets with
                  the tickets portal
                </Text>
                <Text color={"grey"}>
                  When using Intercom tickets in a b2b support use case, the
                  tickets portal enables an external view of all tickets grouped
                  by company.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box p={6}>
          <Box
            border={"1px solid rgb(202,215,227)"}
            mt={-6}
            borderRadius={"20px"}>
            <Flex flexDirection={"column"}>
              <Image
                borderTopRadius={20}
                src="https://downloads.intercomcdn.com/i/o/850163797/25179da748b8ed586e93d154/Cover.png"
                alt=""
              />
              <Flex gap={2} pl={6} mt={2}>
                <Button
                  color={"rgb(36,111,255)"}
                  bg={"rgb(229,238,255)"}
                  borderRadius={50}>
                  New Feature
                </Button>
                <Button
                  color={"rgb(36,111,255)"}
                  bg={"rgb(229,238,255)"}
                  borderRadius={50}>
                  Messenger
                </Button>
              </Flex>
              <Box p={6}>
                <Text color={"rgb(4,21,59)"} fontWeight={700}>
                  Set the right expectations by customising the Start
                  Conversation button in the Messenger 💬
                </Text>
                <Text color={"grey"}>
                  Customize the Start Conversation button in your Messenger 🪄
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
