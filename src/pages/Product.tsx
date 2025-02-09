import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import CommonCardDataDisplay from '../components/CommonCardDataDisplay'
import { useNavigate } from "react-router-dom"
import { ApiHandler } from '../utils/ApiHandler'
import { useEffect, useState } from 'react'
import { CardDataInterface } from '../interfaces/CardDataTypes'
import { productItems } from '../utils/ContextHandler'

const Product = () => {

  const [products, setProducts] = useState<CardDataInterface[]>([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      try {
        setloading(true)
        const apidata: CardDataInterface[] = await ApiHandler()
        setloading(false)
        // console.log(apidata[0].title)
        setProducts(apidata)
      } catch (error) {
        console.log(error)
      }
    }

    fetch()
    // console.log()
  }, [])

  const navigate = useNavigate()
  return loading ? (
    <Box sx={{position: 'absolute', display: 'flex', alignContent: 'center', justifyContent: 'center', top: '50%', left: '50%'}}>
      <CircularProgress />
    </Box>
  ) : (
    <>
      <productItems.Provider value={products}>
        <Container >
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                variant='h2'
                component={'h2'}
                textAlign={'center'}
                fontWeight={'Bold'}
              >
                Products
              </Typography>
              <Button sx={{ mt: 5 }} onClick={() => { navigate('/cart') }}>Go to Cart</Button>
            </Box>


            <hr />

            {
              products.map((product, index) => (
                <CommonCardDataDisplay key={product.id} id={index} title={product.title} description={product.description} price={product.price} image={product.image} button='Add' />
              ))
            }

          </Box>
        </Container>
      </productItems.Provider>
    </>
  )
}

export default Product