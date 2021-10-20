import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import postApi from './../../../../api/postApi';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, Box, Button } from '@material-ui/core';
import './style.scss'
ListPagePost.propTypes = {

};
function createData(stt, TieuDe, idChuDe, TrichDan, Anh, TrangThai, TacGia, NgayDang, LuotXem) {
  return { stt, TieuDe, idChuDe, TrichDan, Anh, TrangThai, TacGia, NgayDang, LuotXem };
}

const rows = [
  // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('1', 'Test', 1, 'test', 'test', 'test', 1, 1, '20', 100),
];
function ListPagePost(props) {
  const [data, setDatata] = useState([])

  useEffect(() => {
    (async () => {
      const respone = await postApi.getAll()
      setDatata(respone.data)
    })()
  }, [])
  data.forEach((item, index) => {
    rows.push(createData(index, `${item.TieuDe}`, `${item.idChuDe}`, `${item.TrichDan}`, `${item.Anh}`, `${item.TrangThai}`, `${item.TacGia}`, `${item.NgayDang}`, `${item.LuotXem}`),)
  })
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item xs={11}
        md={11}
        lg={11}>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>STT</TableCell>
                  <TableCell align="center">Tiêu Đề</TableCell>
                  <TableCell align="center">Id Chủ Đề</TableCell>
                  <TableCell align="center">Trích Dẫn</TableCell>
                  {/* <TableCell align="center">Nội Dung</TableCell> */}
                  <TableCell align="center">Ảnh</TableCell>
                  <TableCell align="center">Trạng Thái</TableCell>
                  <TableCell align="center">Tác Giả</TableCell>
                  <TableCell align="center">Ngày Đăng</TableCell>
                  <TableCell align="center">Lượt Xem</TableCell>
                  <TableCell align="center">Thao Tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.stt}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.stt}
                    </TableCell>
                    <TableCell align="center">{row.TieuDe}</TableCell>
                    <TableCell align="center">{row.idChuDe}</TableCell>
                    <TableCell align="center">{row.TrichDan}</TableCell>
                    {/* <TableCell align="center">{row.NoiDung}</TableCell> */}
                    <TableCell align="center"><img src={row.Anh} alt="" className='table_img' /></TableCell>
                    <TableCell align="center">{row.TrangThai}</TableCell>
                    <TableCell align="center">{row.TacGia}</TableCell>
                    <TableCell align="center">{row.NgayDang}</TableCell>
                    <TableCell align="center">{row.LuotXem}</TableCell>
                    <TableCell align="center">
                      <Button className='table-btn' variant="outlined" size="small" startIcon={<DeleteIcon />} color="secondary">
                        Delete
                      </Button>

                      <Button variant="outlined" size="small" startIcon={<EditIcon />} color="primary">
                        Sửa
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer >
        </Box >
      </Grid >
    </Grid >

  );
}

export default ListPagePost;