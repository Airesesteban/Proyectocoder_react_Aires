import React from 'react'
import { Card, CardBody, CardFooter, Heading, Button, Stack, Divider, ButtonGroup, Text, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import default_image from '../images/logo.webp'

const Item = ({ nombre, description, id, category, image}) => {
  return (
    <Card maxW='sm' h='100%'>
      <CardBody>
        {<Image
          src={image ? image : default_image}
          alt=''
          borderRadius='lg'
          objectFit='fill'
          height={"325px"}
        />}
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>
          <Text>
            {description.length <= 144 ? description : description.substring(0, 144).concat(" ...")}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {category}
          </Text>
        </Stack>
      </CardBody>
      <Divider color='#65D9DB'/>
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