import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { getFirestore, doc, getDoc} from 'firebase/firestore'
import { Card,CardBody,CardFooter,Heading,Text,Button, Center,Stack,Image,Divider,ButtonGroup } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({productos}) => {
    const {id} = useParams()
    const [producto,setProducto] = useState([])
    
    useEffect(() => {
        const db = getFirestore()

        const prodRef = doc(db, "productos", `${id}`)

        getDoc(prodRef).then((snapshot) => {
            if (snapshot.exists()) {
                setProducto(snapshot.data())
            } else {
                console.log("No Hay informacion")    
            }
        })
    }, [])

    return (
        <div>
          {producto &&
            <div key={producto.id}>
              <Center p="1rem">
                <Card maxW='sm'>
                  <CardBody>
                    <Image
                      src={producto.img}
                      alt=''
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>{producto.nombre}</Heading>
                      <Text>
                        {producto.description}
                      </Text>
                      <Text color='blue.600' fontSize='2xl'>
                        ${producto.precio}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                    <ItemCount
                      id={id}
                      name={producto.nombre}
                      price={producto.precio}
                      stock={producto.stock}
                      image={producto.img}
                    />
                  <CardFooter>
                  </CardFooter>
                </Card>
              </Center>
            </div>
          }
        </div>
      )
    }
   
export default React.memo(ItemDetail)