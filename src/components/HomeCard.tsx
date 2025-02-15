import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const pickUpData = [
  {
    url: "https://devmaga.booth.pm/items/1289841",
    image:
      "https://s2.booth.pm/8ef349d0-66e2-4942-a03b-6c76240895a2/i/1289841/2afaa08b-ef89-4728-a322-3ce5d5273c43_base_resized.jpg",
    description: "技術書典: Developers Magazine Vol.1",
  },
  {
    url: "https://devmaga.booth.pm/items/1549276",
    image:
      "https://s2.booth.pm/8ef349d0-66e2-4942-a03b-6c76240895a2/i/1549276/08898343-3a35-48ff-8153-b54a2c930f12_base_resized.jpg",
    description: "技術書典: Developers Magazine Vol.2",
  },
  {
    url: "https://www.lab.kochi-tech.ac.jp/yoshilab/thesis/1160318.pdf",
    image:
      "https://user-images.githubusercontent.com/38674282/146951998-51dafd26-4749-4994-b947-537460d69ad5.png",
    description: "卒業論文: サポートベクターマシンを用いた株価予測",
  },
  {
    url: "https://history.spajam.jp/2019/entry/tokyo-a/",
    image:
      "https://user-images.githubusercontent.com/38674282/146957404-1992e770-3507-4a77-88f1-3e71ad55f4fc.png",
    description: "SPAJAM: ハッカソン予選優秀賞受賞",
  },

  //   "https://1.bp.blogspot.com/-D2I7Z7-HLGU/Xlyf7OYUi8I/AAAAAAABXq4/jZ0035aDGiE5dP3WiYhlSqhhMgGy8p7zACNcBGAsYHQ/s400/no_image_square.jpg",
];

const HomeCard = () => {
  return (
    <Grid container>
      {pickUpData.map((data, index) => (
        <Grid item xs={6} sm={6} md={3} key={index}>
          <Button href={data.url}>
            <Card sx={{ maxWidth: 212 }}>
              <CardMedia
                component="img"
                height="300"
                image={data.image}
                alt={data.description}
              />
            </Card>
          </Button>
          <Typography variant="caption" display="block" p={2}>
            {data.description}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomeCard;
