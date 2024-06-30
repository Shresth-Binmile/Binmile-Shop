import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { CardDataInterface } from "../interfaces/CardDataTypes"
import { addHandler } from "../utils/AddButtonHandler"
import { removeHandler, removeHandlerCart } from "../utils/RemoveButtonHandler"
import { useContext, useState } from "react"
import { cartItems, productItems } from "../utils/ContextHandler"

const CommonCardDataDisplay = ({ id, title, description, price, image, button }: CardDataInterface) => {

  const [buttonType, setButtonType] = useState(button)
  const products = useContext(productItems)
  const cartProducts = useContext(cartItems)
  const indx = id

  const handleEvent = () => {
    if (button == 'Add') {  // this line indicates product-page button
      if (buttonType == 'Add') {
        addHandler({indx, products})
        setButtonType('Remove')
      }
      else {
        removeHandler({indx, products})
        setButtonType('Add')
      }
    }
    else {  // this line indicates cart-page button
      removeHandlerCart({indx, cartProducts})
      console.log(indx)
      window.location.reload()
    }
  }
  return (
    <>
      <Card sx={{ w: 'full', display: 'flex', direction: 'row', mb: 2 }}>
        <CardActionArea sx={{ w: 'full', display: 'flex', direction: 'row', justifyContent: 'space-between', p: 1 }}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
            sx={{ objectFit: 'contain', height: "200px", width: "200px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Price: ${price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleEvent}>
            {buttonType}
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default CommonCardDataDisplay