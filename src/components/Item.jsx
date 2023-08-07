import React from 'react'
import { Card, CardBody, CardFooter, Heading, Button, Stack, Divider, ButtonGroup, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({nombre,description,id, category}) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        {/* <Image
          src=''
          alt=''
          borderRadius='lg'
        /> */}
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>
          <Text>
            {description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {category}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            <Link to={`/item/${id}`}>
              Detalles
            </Link>
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default Item