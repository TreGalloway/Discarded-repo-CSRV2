import { Box, Heading, Text, Button, Center } from '@chakra-ui/react'

export default function Rental3() {
    return (
        // Example from paystack.com
        <Center>
            <Box maxW="64rem" mt={6} p={4}>
                <Heading mb={4}>RV Port/Site </Heading>
                <Text fontSize="xl">
                    Property has all utilities (Water/Electricity/Septic)
                    including a 30 AMP Breaker with two additional 110 plug
                    outlets on the pole. All amenities listed above included
                    with rental. The daily rental rate is $55/day (2-day
                    minimum). The weekly rate is $300/wk. The monthly rental
                    rate is $650 which includes utilities. (Rates are subject to
                    change)
                </Text>
                <Button size="lg" bg="#F7B801" mt="24px">
                    Book Now
                </Button>
            </Box>
        </Center>
    )
}
