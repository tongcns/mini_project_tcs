import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function NewCard() {
  return (
    <Grid
      style={{ marginLeft: "40px", marginRight: "40px", marginBottom: "20px" }}
    >
      <Grid container spacing={2} padding>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card style={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                src="https://image.makewebeasy.net/makeweb/m_1920x0/n69uLezaT/Product/9.jpg"
                alt="404"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Chips Fried Durian
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ marginTop:"-35px" ,marginLeft:"255px"}}>
                  $4.50
                </Typography>
                <div style={{ marginTop: "10px"}}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card style={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                src="https://cf.shopee.co.th/file/th-11134207-23020-jrouvcywmznv45"
                alt="404"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Banana chips
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ marginTop:"-35px" ,marginLeft:"255px"}}>
                $2.00
                </Typography>
                <div style={{ marginTop: "10px"}}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card style={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                src="https://cdn.shopify.com/s/files/1/0139/1571/7696/products/DSC02774-2_400x.jpg?v=1639617535"
                alt="404"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Elephant pants
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ marginTop:"-35px" ,marginLeft:"255px"}}>
                $5.00
                </Typography>
                <div style={{ marginTop: "10px"}}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Card 4 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card style={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                src="https://pbs.twimg.com/media/EVqFA-rU8AAAM47.jpg"
                alt="404"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Mango sheet
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ marginTop:"-35px" ,marginLeft:"255px"}}>
                $2.00
                </Typography>
                <div style={{ marginTop: "10px"}}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
