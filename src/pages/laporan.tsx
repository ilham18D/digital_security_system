import React from "react";
import MaterialTable from "material-table";
import { getToken } from "../api";
import { Metadata } from "grpc-web";
import { ReqFind, ResLaporanPaging, ResLaporan } from "../gen/laporan_pb";
import { LaporanServiceClient } from "../gen/LaporanServiceClientPb";
import { ReqId } from "../gen/polisi_pb";
import { CheckCircleOutline } from "@material-ui/icons";
import ImageComponent from "../components/image";
import moment from "moment";
import "moment/locale/id";

export default function Laporan() {
  const [data, setData] = React.useState<ResLaporanPaging>(
    new ResLaporanPaging()
  );
  const api = new LaporanServiceClient(
    process.env.REACT_APP_SERVICEURL as string
  );
  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    const authorization = await getToken();
    const reqFind = new ReqFind().setPage(1).setLimit(10).setDarurat(false);

    const reqMetadata: Metadata = { authorization };
    const result = await api.find(reqFind, reqMetadata);
    console.log(result.getItemsList().length);
    setData(result);
  };
  console.log(data.toObject().itemsList);
  return (
    <React.Fragment>
      <MaterialTable
        title="Laporan"
        columns={[
          {
            title: "nama",
            field: "nama",
          },
          {
            title: "alamat",
            field: "alamat",
          },
          {
            title: "nomorHp",
            field: "nomorhp",
          },
          {
            title: "deskripsi",
            field: "deskripsi",
          },

          {
            title: "Waktu Kejadian",
            field: "waktukejadian",
            render: (rowData) => {
              return (
                <label>
                  {moment(new Date(rowData.waktukejadian)).format("LLL")}
                </label>
              );
            },
          },
          {
            title: "Status laporan",
            field: "diterima",
            render: (rowData) => {
              if (rowData.diterima === false) {
                return <label htmlFor="">Menunggu Proses</label>;
              }
              return <label htmlFor="">Diproses</label>;
            },
          },
          {
            title: "Gambar",
            field: "imageUrl",
            render: (props) => (
              <ImageComponent id={props.id} imageUrl={props.imageurl} />
            ),
          },
        ]}
        data={data.toObject().itemsList}
        actions={[
          (rowData) => {
            return rowData.diterima === false
              ? {
                  icon: () => <CheckCircleOutline />,
                  tooltip: "Terima Laporan",
                  onClick: async (event, rowData) => {
                    const selectedData = rowData as ResLaporan.AsObject;
                    if (selectedData) {
                      try {
                        const authorization = await getToken();
                        const reqMetadata: Metadata = { authorization };
                        const reqId = new ReqId().setId(selectedData.id);
                        await api.terimaLaporan(reqId, reqMetadata);
                        getData();
                        return;
                      } catch (error) {
                        console.log(error);
                      }
                    }
                  },
                }
              : {
                  icon: "",
                  disabled: true,
                  onClick: () => {},
                };
          },
        ]}
      />
    </React.Fragment>
  );
}
