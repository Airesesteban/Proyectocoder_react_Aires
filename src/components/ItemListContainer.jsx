import { Center } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Center } from '@chakra-ui/react'

const ItemListContainer = () => {
  const {category} = useParams()
  const productos = [
    {id:1, nombre: "Granja Maletín Con 3 figuras y muchos animales", description: "Incluye:3 personajes de Playmobil,1 Vaca y su ternerito,2 Cabras y sus Cabritos,1 gato2 ratonesFrutas, hortalizas, fardos de alfalfa,Carretilla con rueda libre,Más de 50 piezas y partes en total", stock: 5, category: "Granja" },
    {id:2, nombre: "Carruaje con Caballo y 3 figuras de Playmobil", description: "El carro tirado por caballos de Playmobil lleva a dos niños emocionados por el campo. El conductor que lleva un sombrero protector para el sol conduce el vagón junto con una canasta de frutas. El caballo se puede sacar del vagón para que el conductor pueda montarlo. Incluye tres figuras de Playmobil y accesorios.En el carruaje caben 4 figuras y es tirado por un caballo. Incluye 3 figuras (adulto, niño y niña), 1 caballo, 1 vagón, 1 cesta, 1 botella, 2 manzanas, 1 látigoDimensiones: 7.6 x 18.6 x 25.2 centímetros", stock: 3,category: "Granja" },
    {id:3, nombre: "DuoPack Velociraptor y Saqueador", description: "Un saqueador astuto intenta llevarse al Velociraptor. Intenta atraer al animal a la trampa y domarlo con la red. ¿Conseguirá atrapar al dinosaurio? Los DuoPacks de PLAYMOBIL ofrecen el doble de diversión. Dos figuras con accesorios para grandes aventuras de juego.", stock: 1,category: "Figuras" },
    {id:4, nombre: "Luchadora Asiática con Tigre blanco", description: "Esta luchadora asiática es una verdadera maestra. Nadie maneja el sable largo con tanta habilidad como ella. A su lado tiene un tigre blanco. Los dos hacen un gran equipo. ", stock: 2,category: "Figuras" },
    {id:5, nombre: "Vehículo De Reconocimiento", description: "Vehiculo de reconocimiento espacial.Incluye: 1 Vehiculo, 1 figura y accesorios. Tamaño: 34,8 x 24x8 x 12,5 cms", stock: 1,category: "Espacio" },
    {id:6, nombre: "Satélite Con Láser Para Meteoritos", description: "El satélite se abre desplegando las dos pequeñas aletas al mismo tiempo y tirando hacia afuera; las alas laterales giratorias se pueden ajustar individualmente.El meteorito se rompe al presionar las partes individuales. El brazo giratorio asegura al astronauta en la exploración espacial.Incluye: 1 figura, 1 satélite, 1 meteorito y accesorios.Tamaño: 28 x 18 x 9 cms", stock: 1,category: "Espacio" },
    {id:7, nombre: "Vehículo Con Luz Led Y Sonido", description: "Camión de policía swat con luz y sonido incluye: 1 Camión, 3 figuras, armas y accesoriosRequiere 1 pila(NO INCLUIDA).", stock: 1,category: "Fuerzas Especiales" },
    {id:8, nombre: "Vehículo Blindado", description: "Vehículo blindado de policía swatTecho desmontable.Incluye:  Vehículo blindado +4 figuras + Perro policía + Moto + muchos accesorios más. Una de las figuras tiene dos caras.Tamaño de la caja: 38 x 28 x 12 cms", stock: 1,category: "Fuerzas Especiales" },
    {id:9, nombre: "Barco Carabela de los Soldados de Capa Roja", description: "Contenido: 1 juego de figuras de juguete, 87 piezas con instrucciones: 1 velero, 3 figuras, 83 accesorios.El cañon de a bordo funciona realmente", stock: 1,category: "Piratas" },
    {id:10, nombre: "Cofre de Aventura Pirata", description: "¡Experimenta una nueva aventura pirata! La pared del cofre ofrece varias opciones de juego: puede ser una prisión, un escondite de tesoros o puede usarse como protección. Los atacantes pueden ser defendidos con el cañón que realmente funciona. ", stock: 1,category: "Piratas" }
  ]

  const getDatos = new Promise((resolve, reject) =>  {
    if (productos.length === 0) {
        reject(new Error("No hay datos para mostrar"))
    }
    setTimeout(() => {
        resolve(productos)
    },2000)
})

getDatos
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})

const filteredProducts = productos.filter((producto)=> producto.category === category)
  
return (
    <Center p="1rem">
        <ItemList 
          productos={filteredProducts}
        />
    </Center>
  )
}

export default ItemListContainer