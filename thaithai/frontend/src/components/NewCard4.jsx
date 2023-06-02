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
                   src="https://www.otoptoday.com/images/upload_img/products/product_cover_1613723155.jpg"
                   alt="404"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                   Thai elephant doll
                   </Typography>
                   <Typography
                     variant="body1"
                     color="text.secondary"
                     sx={{ marginTop: "-35px", marginLeft: "255px" }}
                   >
                     $1.50
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
   
           {/* Card 2 */}
           <Grid item xs={12} sm={6} md={4} lg={3}>
             <Card style={{ maxWidth: 345 }}>
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="250"
                   src="https://obs.line-scdn.net/r/ect/ect/image_167013705092726463922dc1106t10c86bca"
                   alt="404"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                   Wood Carved Elephant 
                   </Typography>
                   <Typography
                     variant="body1"
                     color="text.secondary"
                     sx={{ marginTop: "-35px", marginLeft: "255px" }}
                   >
                     $8.00
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
                   src="https://amazing-bangkok.com/amzbkk/wp-content/uploads/bencharong.jpg"
                   alt="404"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                   Benjarong
                   </Typography>
                   <Typography
                     variant="body1"
                     color="text.secondary"
                     sx={{ marginTop: "-35px", marginLeft: "255px" }}
                   >
                     $10.00
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
                   src="https://img.freepik.com/premium-photo/basketwork-from-bamboo-thailand-natural-handmade_127090-1199.jpg?w=2000"
                   alt="404"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                   Basketwork
                   </Typography>
                   <Typography
                     variant="body1"
                     color="text.secondary"
                     sx={{ marginTop: "-35px", marginLeft: "255px" }}
                   >
                     $3.50
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
   