import * as React from 'react'
import { Box, Center, ChakraProvider, Heading, theme } from '@chakra-ui/react'

import Navbar from './components/navbar/navbar.component'
import Hero from './components/hero/hero.component'
import Amenities from './components/amenities/amenities.component'
import Rental1 from './components/rentals/rental1.component'
import Carousel1 from './components/carousels/carousel1.component'
import Contact from './components/contact/contact.component'
import Rental2 from './components/rentals/rental2.component'
import Rental3 from './components/rentals/rental3.component'
import Carousel2 from './components/carousels/carousel2.component'
import Carousel3 from './components/carousels/carousel3.component'
import Carousel4 from './components/carousels/carousel4.component'

export const App = () => (
    <ChakraProvider theme={theme}>
        <Navbar />
        <Hero />
        <Box padding={2}></Box>
        <Carousel1 />
        <Amenities />
        <Center mt={4}>
            <Box>
                <Heading>Our Rental Options</Heading>{' '}
            </Box>
        </Center>
        <Carousel2 />
        <Rental1 />
        <Carousel3 />
        <Rental2 />
        <Carousel4 />
        <Rental3 />
        <Contact />
    </ChakraProvider>
)
