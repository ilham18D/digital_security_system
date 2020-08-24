import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import "react-datepicker/dist/react-datepicker.css";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { FormControl } from "@material-ui/core";
// import { ResPolisi } from "../gen/polisi_pb";
import DatePicker from "react-datepicker";
import { useStyleDashboard } from "../style";
import "react-datepicker/dist/react-datepicker.css";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface DailogAddFormProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  save(
    ktp: string,
    nama: string,
    nomorhp: string,
    email: string,
    alamat: string,
    jeniskelamin: string,
    tanggallahir: string
  ): void;
}
// const [setDataTime, setsetDataTime] = React.useState(new Date());
const selecgender = [
  {
    value: "0",
    label: "Laki-Laki",
  },
  {
    value: "1",
    label: "Perempuan",
  },
];
export default function FormAddUser({
  open,
  save,
  setOpen,
}: DailogAddFormProps) {
  const classes = useStyleDashboard();
  const [gender, setGender] = React.useState("0");
  const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const onSubmit = async (event: any) => {
    try {
      event.preventDefault();

      const {
        ktp,
        nama,
        nomorhp,
        email,
        alamat,
        jeniskelamin,
        tanggallahir,
      } = event.target.elements;
      save(
        ktp["value"],
        nama["value"],
        nomorhp["value"],
        email["value"],
        alamat["value"],
        jeniskelamin["value"],
        tanggallahir["value"]
      );
      // console.log(tanggallahir["value"]);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const [startDate, setStartDate] = React.useState(new Date());
  const handleChange = (value: Date) => {
    setStartDate(value);
  };
  return (
    <Dialog fullWidth open={open} TransitionComponent={Transition}>
      <form autoComplete="off" onSubmit={onSubmit}>
        <DialogContent>
          <React.Fragment>
            <TextField
              id="ktp"
              label="KTP"
              variant="outlined"
              margin="dense"
              required
              fullWidth
            />
            <TextField
              id="nama"
              required
              label="Nama User"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              required
              id="nomorhp"
              label="Nomor Telpon/HP"
              variant="outlined"
              margin="dense"
              type="Number"
              fullWidth
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              margin="dense"
              type="Email"
              required
              fullWidth
            />
            <TextField
              id="alamat"
              label="Alamat"
              variant="outlined"
              margin="dense"
              required
              fullWidth
            />
            <TextField
              id="jeniskelamin"
              label="Jenis kelamin"
              select
              variant="outlined"
              value={gender}
              onChange={handleChangeGender}
              SelectProps={{
                native: true,
              }}
              required
              margin="dense"
              fullWidth
            >
              {selecgender.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <FormControl fullWidth>
              <br />
              <label htmlFor="">Tanggal Lahir</label>
              <DatePicker
                className={classes.reactdatepickerwrapper}
                id="tanggallahir"
                selected={startDate}
                onChange={handleChange}
                dateFormat="Y-MM-dd"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </FormControl>
          </React.Fragment>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Batal
          </Button>
          <Button type="submit" color="primary">
            Simpan
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
