import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react'

import * as bothrental2 from '/Users/tre/coastalsoulrv2/src/assets/amenities/bothrentals2.JPEG'

export default function Hero() {
    return (
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={bothrental2}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
        >
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
            >
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({
                            base: '3xl',
                            md: '4xl',
                        })}
                    >
                        CoastalSoulRV
                    </Text>
                    <Stack direction={'row'}>
                        <Button
                            bg={'#F7B801'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: '#F18701' }}
                        >
                            Rentals
                        </Button>
                        <Button
                            bg={'whiteAlpha.300'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'whiteAlpha.500' }}
                        >
                            Book
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    )
}
