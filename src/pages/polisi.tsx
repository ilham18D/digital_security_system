import React from "react";
import MaterialTable, { Column } from "material-table";

interface Row {
  ktp: string;
  nama: string;
  nomorHp: string;
  email: string;
  alamat: string;
  jenisKelamin: number;
  tanggalLahir: Date;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

export default function MaterialTableDemo() {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: "KTP", field: "ktp" },
      { title: "Nama", field: "nama" },
      { title: "Nomor Hp", field: "nomorHp" },
      { title: "Email", field: "email" },
      { title: "Alamat", field: "alamat" },
      {
        title: "Jenis Kelamin",
        field: "jenisKelamin",
        lookup: { 1: "laki-laki", 2: "perempuan" },
      },
      { title: "Tanggal Lahir", field: "tanggalLahir", type: "date" },
    ],
    data: [
      {
        ktp: "24324253465465744",
        nama: "Baran",
        nomorHp: "044343434343",
        email: "example@gmail.com",
        alamat: "example@gmail.com",
        jenisKelamin: 1,
        tanggalLahir: new Date("2015-03-25"),
      },
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
