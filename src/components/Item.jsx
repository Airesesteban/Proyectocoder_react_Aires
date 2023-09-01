import React from 'react'
import { Card, CardBody, CardFooter, Heading, Button, Stack, Divider, ButtonGroup, Text, Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import default_image from '../images/logo.webp'

const Item = ({ nombre, description, id, category, image}) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        {<Image
          src={image ? image : default_image}
          alt=''
          borderRadius='lg'
        />}
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
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default Item