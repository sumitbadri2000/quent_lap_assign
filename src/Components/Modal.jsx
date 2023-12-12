import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiSolidMessage } from "react-icons/bi";
import { PiArticle } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { CiChat2 } from "react-icons/ci";
import HomeModal from "./ModalHome";
import { useState } from "react";
import ModelNavbar from "./ModelNavbar";
import ModelArticle from "./ModalArticle";
import ModelMes from "./ModelMes";

function MesModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [home, setHome] = useState("home");

  const check = () => {
    if (home === "home") {
      return <HomeModal />;
    } else if (home === "messages") {
      return <ModelMes />;
    } else if (home === "article") {
      return <ModelArticle />;
    }
  };

  const handleChange = (value) => {
    setHome(value);
  };
  return (
    <>
      <Button onClick={onOpen} borderRadius={"30px"} bg={"rgb(0,87,255)"}>
        <BiSolidMessage fontSize={"30px"} color="white" />
      </Button>

      <Modal
        size="sm"
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside">
        <ModalContent
          style={{
            borderRadius: "20px",
            position: "absolute",
            left: "70%",
            top: "-5%",
            transform: "translate(-50%, -50%)",
          }}>
          <ModalCloseButton />
          <ModalBody p={0} overflowY="auto">
            {check()}
          </ModalBody>
          <ModalFooter px={6} py={4}>
            <ModelNavbar data={handleChange} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MesModal;
