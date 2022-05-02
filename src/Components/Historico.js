import * as React from "react";
import axios from 'axios';
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.html_url}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                JSON
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead></TableHead>
                <TableBody>
                  <pre className="Json">{JSON.stringify(row,null, 4)}</pre>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const Historico = () => {
  let [data, setData] = React.useState();
  React.useEffect(() => {
    document.title = "Time dos legais - Front | Histórico";

    axios.get("http://localhost:4000/getAllStoredUsers")
         .then((res) => setData(res.data))
         .catch((err) => setData(err.message));
  }, []);

  return (
    <div>
      <h1>Histórico de Pesquisas</h1>
      <TableContainer className="Table" component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>
                <h3>Nome do Usuário</h3>
              </TableCell>
              <TableCell align="right">
                <h3>Html_url</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(data) ?
            data.map((data) => (
              <Row key={data._id} row={data} />
            ))
            :
            <TableRow>
              <TableCell>
                {data}
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Historico;
