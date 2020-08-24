import React from "react";
import MaterialTable from "material-table";
import {
  ReqAdd,
  ResPolisi,
  ResPolisiArray,
  JenisKelamin,
  ReqId,
} from "../gen/polisi_pb";
import { PolisiServiceClient } from "../gen/PolisiServiceClientPb";
import { Metadata } from "grpc-web";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { getToken } from "../api";
// import moment from "moment";
import "moment/locale/id";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormAddUser from "./formAdduser";

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
  const addData = async (
    ktp: string,
    nama: string,
    nomorhp: string,
    email: string,
    alamat: string,
    jeniskelamin: number,
    tanggallahir: string
  ) => {
    try {
      const authorization = await getToken();

      const reqData = new ReqAdd()
        .setKtp(ktp)
        .setNama(nama)
        .setNomorhp(nomorhp)
        .setEmail(email)
        .setAlamat(alamat)
        .setJeniskelamin(jeniskelamin)
        .setTanggallahir(tanggallahir);
      const reqMetadata: Metadata = { authorization };
      const result = await api.add(reqData, reqMetadata);
      if (result) {
        setData(
          new ResPolisiArray().setItemsList([...data.getItemsList(), result])
        );
        alert("User Berhasil Ditambahkan");
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const deleteUser = async (userDelete: ResPolisi.AsObject) => {
    try {
      const authorization = await getToken();
      const reqMetadata: Metadata = { authorization };
      const reqId = new ReqId().setId(userDelete.id);
      await api.delete(reqId, reqMetadata);
      alert("User Berhasil dihapus");
      setData(
        new ResPolisiArray().setItemsList(
          data.getItemsList().filter((it) => it.getId() !== userDelete.id)
        )
      );
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const [openDialogAdd, setOpenDialogAdd] = React.useState(false);
  return (
    <React.Fragment>
      <FormAddUser
        open={openDialogAdd}
        setOpen={setOpenDialogAdd}
        save={async (
          nama,
          ktp,
          nomorhp,
          email,
          alamat,
          jeniskelamin,
          tanggallahir
        ) => {
          addData(
            nama,
            ktp,
            nomorhp,
            email,
            alamat,
            Number(jeniskelamin),
            tanggallahir
          );
          // console.log(
          //   nama,
          //   ktp,
          //   nomorhp,
          //   email,
          //   alamat,
          //   Number(jeniskelamin),
          //   tanggallahir
          // );
        }}
      />
      <MaterialTable
        title="Admin SIPD "
        columns={[
          {
            title: "KTP",
            field: "ktp",
          },
          {
            title: "Nama",
            field: "nama",
          },
          {
            title: "Nomor Telpon/HP",
            field: "nomorhp",
          },
          {
            title: "Email",
            field: "email",
          },
          {
            title: "Alamat",
            field: "alamat",
          },
          {
            title: "Tanggal Lahir",
            field: "tanggallahir",
            type: "date",

            render: (rowData) => {
              return <label>{rowData.tanggallahir}</label>;
            },
          },
          {
            title: "Jenis Kelamin",
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
            icon: "add",
            tooltip: "Tambah Admin",
            isFreeAction: true,
            onClick: (event) => {
              setOpenDialogAdd(true);
            },
          },
        ]}
        editable={{
          // onRowAdd: async (newData) => addData(newData),
          onRowDelete: (oldData) => deleteUser(oldData),
        }}
      />
    </React.Fragment>
  );
}
