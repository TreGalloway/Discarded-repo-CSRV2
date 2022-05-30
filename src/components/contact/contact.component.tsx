import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    VStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react'
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'

export default function Contact() {
    return (
        <Container
            bg="#114B5F"
            maxW="full"
            mt={0}
            centerContent
            overflow="hidden"
        >
            <Flex>
                <Box
                    bg="#1A936F"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}
                >
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Contact</Heading>
                                    <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                                        Fill up the form below to contact
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack
                                            pl={0}
                                            spacing={3}
                                            alignItems="flex-start"
                                        >
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{
                                                    border: '2px solid #1C6FEB',
                                                }}
                                                leftIcon={
                                                    <MdPhone
                                                        color="#F18701"
                                                        size="20px"
                                                    />
                                                }
                                            >
                                                (713) 502-5126
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{
                                                    border: '2px solid #1C6FEB',
                                                }}
                                                leftIcon={
                                                    <MdEmail
                                                        color="#F18701"
                                                        size="20px"
                                                    />
                                                }
                                            >
                                                feliciafish@att.net
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{
                                                    border: '2px solid #1C6FEB',
                                                }}
                                                leftIcon={
                                                    <MdLocationOn
                                                        color="#F18701"
                                                        size="20px"
                                                    />
                                                }
                                            >
                                                Crystal Beach, TX
                                            </Button>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="#0B0E3F">
                                        <VStack spacing={5}>
                                            <FormControl id="name">
                                                <FormLabel>Your Name</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={
                                                            <BsPerson color="gray.800" />
                                                        }
                                                    />
                                                    <Input
                                                        type="text"
                                                        size="md"
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>Mail</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={
                                                            <AiOutlineMail color="gray.800" />
                                                        }
                                                    />
                                                    <Input
                                                        type="text"
                                                        size="md"
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>Message</FormLabel>
                                                <Textarea
                                                    borderColor="gray.300"
                                                    _hover={{
                                                        borderRadius:
                                                            'gray.300',
                                                    }}
                                                    placeholder="message"
                                                />
                                            </FormControl>
                                            <FormControl
                                                id="name"
                                                float="right"
                                            >
                                                <Button
                                                    variant="solid"
                                                    bg="#F18701"
                                                    color="white"
                                                    _hover={{}}
                                                >
                                                    Send Message
                                                </Button>
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    )
}
