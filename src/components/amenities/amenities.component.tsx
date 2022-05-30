import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
} from '@chakra-ui/react'
import {} from '@chakra-ui/react'

interface FeatureProps {
    heading: string
    text: string
}

const Feature = ({ heading, text }: FeatureProps) => {
    return (
        <GridItem>
            <chakra.h3 fontSize="xl" fontWeight="600">
                {heading}
            </chakra.h3>
            <chakra.p>{text}</chakra.p>
        </GridItem>
    )
}

export default function Amenities() {
    return (
        <Box as={Container} maxW="7xl" mt={14} p={4}>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                }}
                gap={4}
            >
                <GridItem colSpan={1}>
                    <VStack alignItems="flex-start" spacing="20px">
                        <chakra.h2 fontSize="3xl" fontWeight="700">
                            Let the memories with family & friends begin!
                        </chakra.h2>
                        <Button bg="#F7B801" size="md">
                            Book Now!
                        </Button>
                    </VStack>
                </GridItem>
                <GridItem>
                    <Flex>
                        <chakra.p>
                            “Coastal Soul” is a semi-private property that
                            affords you a relaxing, pleasant time in Crystal
                            Beach, TX. Located on the Bolivar Peninsula adjacent
                            to one of the Bird Sanctuaries, this property sits
                            just a few short walking steps from the sandy shores
                            of Crystal Beach and local restaurants, shops and
                            bars. The property has a large, spacious custom
                            deck/patio for relaxing and watching gorgeous
                            sunsets. There is also great fishing in the area
                            with bait shops and local boat ramps just minutes
                            away. Let the memories with family & friends begin.
                            Call today to reserve your spot!
                        </chakra.p>
                    </Flex>
                </GridItem>
            </Grid>
            <Divider mt={12} mb={12} />
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={{ base: '8', sm: '12', md: '16' }}
            >
                <Feature
                    heading={'Custom Deck'}
                    text={'Flushed out with picnic tables for guests'}
                />
                <Feature
                    heading={'BBQ Pit & Fire Pit'}
                    text={'Short text describing one of you features/service'}
                />
                <Feature
                    heading={'Sand Box'}
                    text={'Short text describing one of you features/service'}
                />
                <Feature
                    heading={'Yamaha Golf Cart'}
                    text={'$100/day…Based on availability'}
                />
            </Grid>
        </Box>
    )
}
