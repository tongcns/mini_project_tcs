import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";


export default function NewCard() {
  return (

    <Grid style={{  marginLeft: "40px", marginRight: "40px" , marginBottom: "20px"}}>
      <Grid container spacing={2} padding>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card style={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                src="https://image.makewebeasy.net/makeweb/m_1920x0/n69uLezaT/Product/9.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Papaya
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
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
                src="https://image.makewebeasy.net/makeweb/m_1920x0/n69uLezaT/Product/9.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
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
                src="https://image.makewebeasy.net/makeweb/m_1920x0/n69uLezaT/Product/9.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
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
                src="https://image.makewebeasy.net/makeweb/m_1920x0/n69uLezaT/Product/9.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        </Grid>
        </Grid>

  );
};

