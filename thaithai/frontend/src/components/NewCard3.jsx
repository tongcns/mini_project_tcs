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
   
           {/* Card 2 */}
           <Grid item xs={12} sm={6} md={4} lg={3}>
             <Card style={{ maxWidth: 345 }}>
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="250"
                   src="https://cf.shopee.co.th/file/1b3ccca3f9adbcb2f7ed24dcc60df1da"
                   alt="404"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                   Tote bag
                   </Typography>
                   <Typography
                     variant="body1"
                     color="text.secondary"
                     sx={{ marginTop: "-35px", marginLeft: "255px" }}
                   >
                     $6.00
                   </Typography>
                   <div style={{ marginTop: "10px" }}>
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
                   src="https://lzd-img-global.slatic.net/g/p/028ef8fa7e81b30a6adb5023ea55a689.jpg_1200x1200q80.jpg_.webp"
                   alt="404"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                     Silk Shirt
                   </Typography>
                   <Typography
                     variant="body1"
                     color="text.secondary"
                     sx={{ marginTop: "-35px", marginLeft: "255px" }}
                   >
                     $7.00
                   </Typography>
                   <div style={{ marginTop: "10px" }}>
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
                   src="data:image/jpeg;base64,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"
                   alt="404"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                   Thai Silk
                   </Typography>
                   <Typography
                     variant="body1"
                     color="text.secondary"
                     sx={{ marginTop: "-35px", marginLeft: "255px" }}
                   >
                     $6.50
                   </Typography>
                   <div style={{ marginTop: "10px" }}>
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
   