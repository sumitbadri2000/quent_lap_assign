import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineMessage } from "react-icons/ai";
export default function ModelMes() {
  const [chats, setChat] = useState("");
  const [gets, setGet] = useState([]);
  const toast = useToast();
  const getChat = async () => {
    const res = await axios.get("https://backapp-que.vercel.app/chat/");
    setGet(res.data.chat);
  };
  const handleMess = async () => {
    setChat("");
    const data = {
      chat: chats,
    };
    try {
      if (chats === "") {
        toast({
          title: "Please type message",
          status: "error",
          position: "top-right",
          duration: 1000,
          isClosable: true,
        });
        return;
      }
      const response = await axios.post(
        "https://backapp-que.vercel.app/chat/add",
        data
      );
      getChat();
    } catch (error) {
      console.error("Error searching for buses:", error);
    }
  };

  useEffect(() => {
    getChat();
  }, []);
  return (
    <Box>
      <Box
        position={"sticky"}
        borderTopLeftRadius={20}
        textAlign={"center"}
        color={"white"}
        p={4}>
        <Text fontSize={"20px"} fontWeight={700} mb={6}>
          Intercom Message
        </Text>
        <Box margin={"auto"} width={"80%"}>
          <Flex width={"55%"} margin={"auto"}>
            <Image
              w={"50px"}
              height={"50px"}
              borderRadius={"50%"}
              src="https://static.intercomassets.com/avatars/6417506/square_128/Untitled-1-1682411137.png"
            />
            <Image
              w={"50px"}
              height={"50px"}
              borderRadius={"50%"}
              src="https://static.intercomassets.com/avatars/5084876/square_128/5084876-1665143037.jpg"
            />
            <Image
              w={"50px"}
              height={"50px"}
              borderRadius={"50%"}
              src="https://static.intercomassets.com/avatars/424524/square_128/0424524-1665140119.png"
            />
          </Flex>
          <Text mt={2}>We typically reply within a day</Text>
          <Text mt={2} color={"black"} fontSize={"14px"}>
            We help your business grow by connecting you to your customers. For
            more support, tips & tricks, check out the Community
            https://community.intercom.com
          </Text>
        </Box>
      </Box>
      <Flex
        alignItems={"end"}
        mb={2}
        flexDirection={"column"}
        gap={4}
        p={4}
        bg={"white"}
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)">
        {gets &&
          gets.map((item, index) => (
            <Text key={index} bg={"rgb(195,203,229)"} p={2} borderRadius={8}>
              {item.chat}
            </Text>
          ))}
      </Flex>
      <InputGroup>
        <Input
          value={chats}
          onChange={(e) => setChat(e.target.value)}
          type="text"
          placeholder="Search for help"
          border={"1px solid black"}
        />
        <InputRightElement pointerEvents="auto" cursor="pointer">
          <AiOutlineMessage onClick={handleMess} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
