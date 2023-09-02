import React from 'react'
import { Spinner, Center, Box } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Box>
      <Center>
        <Spinner />
      </Center>
    </Box>
  )
}

export default Loading