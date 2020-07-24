import React from "react";
import MaterialTable from "material-table";
import {
  ReqAdd,
  ResPolisi,
  ResPolisiArray,
  JenisKelamin,
} from "../gen/polisi_pb";
import { PolisiServiceClient } from "../gen/PolisiServiceClientPb";
import { Metadata } from "grpc-web";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import { getToken } from "../api";

export default function MaterialTableDemo() {
  const [data, setData] = React.useState<ResPolisiArray>(new ResPolisiArray());
  const api = new PolisiServiceClient(
    process.env.REACT_APP_SERVICEURL as string
  );
  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    const reqEmpty = new Empty();
    const authorization = await getToken();
    const reqMetadata: Metadata = { authorization };
    const result = await api.find(reqEmpty, reqMetadata);
    console.log(authorization);
    setData(result);
  };
  const addData = async (addData: ResPolisi.AsObject) => {
    try {
      const authorization = await getToken();

      const reqData = new ReqAdd()
        .setKtp(addData.ktp)
        .setNama(addData.nama)
        .setNomorhp(addData.nomorhp)
        .setEmail(addData.email)
        .setAlamat(addData.alamat)
        .setJeniskelamin(addData.jeniskelamin)
        .setTanggallahir(addData.tanggallahir);
      const reqMetadata: Metadata = { authorization };
      const result = await api.add(reqData, reqMetadata);
      setData(
        new ResPolisiArray().setItemsList([...data.getItemsList(), result])
      );
      console.log("add data");
    } catch (error) {
      console.log(error);
      return;
    }
  };
  console.log(data.toObject().itemsList);

  return (
    <MaterialTable
      title="Editable Example"
      columns={[
        {
          title: "ktp",
          field: "ktp",
        },
        {
          title: "nama",
          field: "nama",
        },
        {
          title: "nomorHp",
          field: "nomorhp",
        },
        {
          title: "email",
          field: "email",
        },
        {
          title: "alamat",
          field: "alamat",
        },
        {
          title: "tanggallahir",
          field: "tanggallahir",
        },
        {
          title: "jenis Kelamin",
          field: "jeniskelamin",
          lookup: { 0: "Laki-Laki", 1: "Perempuan" },
          render: (rowData) => {
            if (rowData.jeniskelamin === JenisKelamin.LAKI_LAKI) {
              return <label>Laki-Laki</label>;
            } else {
              return <label>Perempuan</label>;
            }
          },
        },
      ]}
      data={data.toObject().itemsList}
      actions={[
        {
          icon: () => <AssignmentLateIcon />,
          tooltip: "Data admin Kota",
          onClick: (event, rowData) => {
            console.log(rowData);
          },
        },
      ]}
      editable={{
        onRowAdd: async (newData) => addData(newData),
      }}
    />
  );
}
