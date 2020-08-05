import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Metadata } from "grpc-web";
import { ReqFind, ResLaporanPaging } from "../gen/laporan_pb";
import { LaporanServiceClient } from "../gen/LaporanServiceClientPb";
import { getToken } from "../api";

export default function DashboardPage() {
  const [laporanPengaduan, setLaporanPengaduan] = React.useState<
    ResLaporanPaging
  >(new ResLaporanPaging());

  const [laporanDarurat, setLaporanDarurat] = React.useState<ResLaporanPaging>(
    new ResLaporanPaging()
  );
  const api = new LaporanServiceClient(
    process.env.REACT_APP_SERVICEURL as string
  );
  React.useEffect(() => {
    getDataTotalLaporan();
    getDataDarurat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDataTotalLaporan = async () => {
    const authorization = await getToken();
    const reqFind = new ReqFind().setPage(1).setLimit(50).setDarurat(false);
    const reqMetadata: Metadata = { authorization };
    const result = await api.find(reqFind, reqMetadata);
    setLaporanPengaduan(result);
  };
  const getDataDarurat = async () => {
    const authorization = await getToken();
    const reqFind = new ReqFind().setPage(1).setLimit(50).setDarurat(true);
    const reqMetadata: Metadata = { authorization };
    const result = await api.find(reqFind, reqMetadata);
    setLaporanDarurat(result);
  };

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
                Total Pengaduan
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="h6"
                style={{ textAlign: "center" }}
              >
                {laporanPengaduan.toObject().meta?.itemcount} Laporan
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
                Total Laporan Darurat
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="h6"
                style={{ textAlign: "center" }}
              >
                {laporanDarurat.toObject().meta?.itemcount} Laporan
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
