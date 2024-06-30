import { Box, Button, Container, Typography } from "@mui/material"
import CommonCardDataDisplay from "../components/CommonCardDataDisplay"
import { useNavigate } from "react-router-dom"
import { clearCart } from "../utils/ClearCartHandler"
import { fetchDB } from "../utils/fetchDB"
import { useContext, useEffect, useMemo, useState } from "react"
import { dbDataType } from "../interfaces/dbDataType"
import { cartItems } from "../utils/ContextHandler"

const Cart = () => {

  const [products, setProducts] = useState<dbDataType[]>([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      try {
        setloading(true)
        const dbData: dbDataType[] = await fetchDB()
        // console.log(dbData)
        setloading(false)
        setProducts(dbData)
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
  }, [])

  return !loading && (
    <>
      <cartItems.Provider value={products}>
        <Container>
          <BOX />
        </Container>
      </cartItems.Provider>
    </>
  )
}

const BOX = () => {

  const productArr = useContext(cartItems)
  const navigate = useNavigate()

  const result: number = useMemo(() => {
    let sum = 0
    productArr.map((item) => {
      sum = sum + item.value.price
    })
    return sum
  }, [productArr])

  const clearHandler = () => {
    clearCart()
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant='h2'
          component={'h2'}
          textAlign={'center'}
          fontWeight={'Bold'}
        >
          Cart
        </Typography>
        <Box mt={5}>
          <Button onClick={() => { navigate('/') }}>Go to Products</Button>
          <Button size="small" color="primary" onClick={clearHandler}>
            Clear Cart
          </Button>
        </Box>
      </Box>

      <hr />

      {
        productArr.map((product, index) => (
          <CommonCardDataDisplay key={product.value.id} id={index} title={product.value.title} description={product.value.description} price={product.value.price} image={product.value.image} button="Remove" />
        ))
      }

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#f0f0f0", // Example background color
          padding: "1rem",
          borderTop: "1px solid #ccc",
          display: "flex",
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Total: ${result}
        </Typography>
      </Box>

    </Box>
  )
}

export default Cart