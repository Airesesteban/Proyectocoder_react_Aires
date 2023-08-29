import React from 'react'
import {useParams, Link} from 'react-router-dom'
import { Card,CardHeader,CardBody,CardFooter,Heading,Text,Button, Center,Stack,Image,Divider,ButtonGroup } from '@chakra-ui/react'

const ItemDetail = ({productos}) => {
    const {id} = useParams()
    const [producto,SetProducto] = useState([])
    
    useEffect(() => {
        const db = getFirestore()

        const prodRef = doc(db, "articulos", `${id}`)

        getDoc(prodRef).then((snapshot) => {
            if (snapshot.exists()) {
                setProducto(snapshot.data())
            } else {
                console.log("No Hay informacion")    
            }
        })
    }, [])

    const filteredProducts = productos.filter((producto) => producto.id == id)

    return (
    <div>
        {filteredProducts.map((p) => {
            return (
                <div key={p.id}>
                    <Center p="1rem">
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                src={p.img}
                                alt=''
                                borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading size='md'>{p.nombre}</Heading>
                                <Text>
                                    {p.description}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                {p.category}
                                </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Add to cart
                                </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </Center>
                </div>
            )
        })}
    </div>    
    )
}

export default React.memo(ItemDetail)   