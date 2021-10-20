import CodeIcon from '@mui/icons-material/Code';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { login, logout } from 'features/Auth/userSlide';
import * as React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AccountCircle } from '@material-ui/icons';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useEffect } from 'react';
import categoryNewsApi from './../../api/categoryNewsApi';
import './style.scss'
const MODE = {
  LOGIN: 'login',
  REGISTER: 'register'
}
export default function ButtonAppBar() {
  const dispatch = useDispatch()
  const loggedUser = useSelector(state => state.user.current)
  const isLogged = !!loggedUser.id
  const [open, setOpen] = useState(false)
  const [mode, setmode] = useState(MODE.LOGIN)
  const [anchorEl, setaAchorEl] = useState(null)
  const openMenu = Boolean(anchorEl);
  const [newscategrory, setNewsCategory] = useState([])

  const handleUserClick = (e) => {
    setaAchorEl(e.currentTarget)
  }

  const handleCloseMenu = () => {
    setaAchorEl(null)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogoutClick = () => {
    const action = logout()
    dispatch(action)
    handleCloseMenu()
  }

  useEffect(() => {
    (async () => {
      try {
        const respone = await categoryNewsApi.getAll()
        setNewsCategory(respone)
        console.log(respone);
      } catch (error) {
        console.log('Fail to fetch Category News', error);
      }
    })()
  }, [])
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} mb={4}>
        <AppBar position="static" color="primary" className="header">
          <Toolbar>
            {/* <CodeIcon size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }} /> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className="link" to="/news">News</Link>
            </Typography>
            {newscategrory.map((category) => <Button color="inherit" className="category_name">{category.TenChuDe}</Button>)}
            {/* <NavLink className="link" to="/todos">
              <Button color="inherit">Todos</Button>
            </NavLink>
            <NavLink className="link" to="/alumbs">
              <Button color="inherit">Albums</Button>
            </NavLink> */}
            <NavLink className="link" to="/dashboard">
              <Button color="inherit">Dashboard</Button>
            </NavLink>
            {
              !isLogged && (
                <Button color="inherit" onClick={handleClickOpen}>Login</Button>
              )
            }
            {
              isLogged && (
                <IconButton color='inherit' onClick={handleUserClick}>
                  <AccountCircle></AccountCircle>
                </IconButton>
              )
            }
          </Toolbar>
        </AppBar>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        </Menu>
      </Box>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent>
          {
            mode === MODE.REGISTER && (
              <>
                <Register closeDiaglog={handleClose}></Register>
                <Box textAlign="center">
                  <Button onClick={() => setmode(MODE.LOGIN)}>Already an account. Login Here</Button>
                </Box>
              </>
            )
          }
          {
            mode === MODE.LOGIN && (
              <>
                <Login closeDiaglog={handleClose}></Login>
                <Box textAlign="center">
                  <Button onClick={() => setmode(MODE.REGISTER)}>Dont have an account. Register Here</Button>
                </Box>
              </>
            )
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}