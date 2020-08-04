import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ShoppingBasket } from "@material-ui/icons";

export default function DashboardPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h3"
                style={{ textAlign: "center" }}
              >
                SELAMAT DATANG DI SITUS ADMIN KEPOLISIAN SEKTOR MALLAWA KAB.
                MAROS
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h3"
                style={{ textAlign: "center" }}
              >
                Laporan
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="h6"
                style={{ textAlign: "center" }}
              >
                3 Laporan
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h3"
                style={{ textAlign: "center" }}
              >
                Laporan Darurat
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="h6"
                style={{ textAlign: "center" }}
              >
                3 Laporan
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
