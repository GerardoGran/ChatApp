import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MessageAPI from "../../Services/MessageAPI";

export default function FormDialog() {
  const [open, setOpen] = React.useState(true);
  const [ip, setIp] = React.useState("");

  const handleClose = () => {
    MessageAPI.setConnection(ip);
    setOpen(false);
  };

  const handleChange = (e: any) => {
    setIp(e.target.value);
    console.log(open);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>TYPE THE IP CONNECTION</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={ip}
            margin="dense"
            id="name"
            label="IP Address"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Enter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
