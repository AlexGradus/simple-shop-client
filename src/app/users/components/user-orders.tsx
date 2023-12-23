import React, { FC } from "react";
import {
  CardMedia,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { OrderDto } from "../types/order.dto";

const OrderCard: FC<OrderDto> = ({ createdAt, total, items }) => {
  return (
    <Paper sx={{ padding: "10px", marginBottom: "20px" }}>
      <Typography variant="h6">
        Date: {new Date(createdAt).toDateString()}
      </Typography>
      <Typography variant="h6">
        Total Price: {total}$
      </Typography>
      <List>
        {items.map((item, index) => (
          <Grid key={item.id}>
            <ListItem
              sx={{
                padding: "20px 0",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
              key={item.id}
            >
              <CardMedia
                component="img"
                sx={{ width: "70px", height: "70px" }}
                image={item.product.images}
              />
              <Grid sx={{ marginLeft: "20px" }}>
                <Typography
                  sx={{ marginBottom: "20px", fontWeight: "bold" }}
                  variant="h6"
                >
                  Product Name: {item.product.name}
                </Typography>
                <Typography>
                  Price: {item.product.price}$
                </Typography>
                <Typography>
                  Quantity: {item.quantity}
                </Typography>
              </Grid>
            </ListItem>
          </Grid>
        ))}
      </List>
    </Paper>
  );
};

export default OrderCard;