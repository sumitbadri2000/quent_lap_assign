import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="rgb(4,21,39)" padding={2} borderBottom={"2px solid white"}>
      <Flex
        bg="transparent"
        minH={"60px"}
        py={{ base: 4 }}
        px={{ base: 16 }}
        borderStyle={"solid"}
        alignItems={"center"}>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          alignItems={"center"}>
          <IconButton
            color={"white"}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems={"center"}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={"white"}>
            <Image
              src="https://www.avoxi.com/wp-content/uploads/2020/09/intercom-1-logo-black-and-white.png"
              alt="haldiram"
              height={{ base: "40px", sm: "40px", xl: "45px" }}
              width={"fit-content"}
            />
          </Text>

          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
            alignItems={"center"}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack direction={"row"} spacing={10} alignItems={"center"}>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            color={"white"}
            fontSize={"16px"}
            fontWeight={700}
            variant={"ghost"}
            href={"#"}
            paddingLeft={7}
            paddingRight={7}
            bg={"rgb(0,87,255)"}
            borderRadius={"50px"}
            _hover={{}}>
            Start Free Trial
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"16px"}
            fontWeight={700}
            color={"white"}
            variant={"outline"}
            borderRadius={"50px "}
            border={"3px solid white"}
            bg={"none"}
            href={"#"}
            px="6"
            py="5"
            _hover={{
              bg: "grey.300",
            }}>
            View Demo
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"16px"}
                fontWeight={"bolder"}
                color={"white"}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                // bg={"white"}
                p={4}
                bg={"rgb(4,21,39)"}
                rounded={"xl"}
                minW={"sm"}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}>
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            color={"white"}
            transition={"all .3s ease"}
            _groupHover={{ color: "blue.400" }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack bg="transparent" p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Product",
    children: [
      {
        label: "Help Desk",
      },
      {
        label: "AI Chatbot",
      },
      {
        label: "Proactive support",
      },
      {
        label: "Platform",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Blog",
      },
      {
        label: "Help Center",
      },
      {
        label: "Resource Liabary",
      },
      {
        label: "Developer Hubs",
      },
    ],
  },
  {
    label: "Customer",
  },
  {
    label: "Pricing",
  },
];
