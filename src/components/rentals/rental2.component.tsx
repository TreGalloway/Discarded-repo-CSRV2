import { Box, Heading, Text, Button, Center } from '@chakra-ui/react'

export default function Rental2() {
    return (
        // Example from paystack.com
        <Center>
            <Box maxW="64rem" mt={6} p={4}>
                <Heading mb={4}>Coastal Soul II (Lodging)</Heading>
                <Text fontSize="xl">
                    27’ Skyline Layton RV/Trailer with living area, private
                    sleeping areas, sofa, appliances. Sleeps 6 guests. The daily
                    rental rate is $150/day (2-day minimum). The weekly rental
                    rate is $550. The monthly rental rate is $800. All rates
                    include utilities. (Rates are based on 2 adult guests per
                    site and are subject to change)
                </Text>
                <Button size="lg" bg="#F7B801" mt="24px">
                    Book Now
                </Button>
            </Box>
        </Center>
    )
}
