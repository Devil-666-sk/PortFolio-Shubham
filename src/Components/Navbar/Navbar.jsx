import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Switch,
  Divider,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  BarChart as BarChartIcon,
  Description as DescriptionIcon,
  Layers as LayersIcon,
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

// Sidebar navigation items
const NAVIGATION = [
  { title: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { title: 'Orders', icon: <ShoppingCartIcon />, path: '/orders' },
  { kind: 'divider' },
  { kind: 'header', title: 'Analytics' },
  {
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      { title: 'Sales', icon: <DescriptionIcon />, path: '/reports/sales' },
      { title: 'Traffic', icon: <DescriptionIcon />, path: '/reports/traffic' },
    ],
  },
  { title: 'Integrations', icon: <LayersIcon />, path: '/integrations' },
];

export default function ResponsiveNavbar() {
  const [darkMode, setDarkMode] = useState(false); // Day/Night mode toggle
  const [open, setOpen] = useState(true); // Sidebar collapse state
  const [subMenuOpen, setSubMenuOpen] = useState(false); // Reports submenu state

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleTheme = () => setDarkMode((prev) => !prev);
  const toggleSubMenu = () => setSubMenuOpen((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        {/* Sidebar */}
        <Drawer
          variant='persistent'
          open={open}
          sx={{
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar>
            <Typography variant='h6' noWrap>
              Toolpad
            </Typography>
          </Toolbar>
          <Divider />
          <List>
            {NAVIGATION.map((item, index) =>
              item.kind === 'divider' ? (
                <Divider key={index} />
              ) : item.kind === 'header' ? (
                <Typography
                  key={index}
                  variant='subtitle2'
                  sx={{ px: 2, mt: 1, mb: 0.5 }}
                >
                  {item.title}
                </Typography>
              ) : item.children ? (
                <React.Fragment key={index}>
                  <ListItemButton onClick={toggleSubMenu}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                    {subMenuOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={subMenuOpen} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                      {item.children.map((child, childIndex) => (
                        <ListItem key={childIndex} disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>{child.icon}</ListItemIcon>
                            <ListItemText primary={child.title} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ) : (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Drawer>

        {/* Main Content */}
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: theme.palette.background.default,
          }}
        >
          <AppBar position='fixed' sx={{ zIndex: theme.zIndex.drawer + 1 }}>
            <Toolbar>
              <IconButton
                edge='start'
                color='inherit'
                onClick={() => setOpen(!open)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' sx={{ flexGrow: 1 }}>
                Dashboard
              </Typography>
              <IconButton color='inherit' onClick={toggleTheme}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Toolbar>
          </AppBar>
          <Toolbar />
          {/* Dashboard Content */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: theme.palette.action.hover,
                  height: 100,
                  borderRadius: 1,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Box
                sx={{
                  backgroundColor: theme.palette.action.hover,
                  height: 100,
                  borderRadius: 1,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: theme.palette.action.hover,
                  height: 150,
                  borderRadius: 1,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  backgroundColor: theme.palette.action.hover,
                  height: 100,
                  borderRadius: 1,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  backgroundColor: theme.palette.action.hover,
                  height: 100,
                  borderRadius: 1,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  backgroundColor: theme.palette.action.hover,
                  height: 100,
                  borderRadius: 1,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  backgroundColor: theme.palette.action.hover,
                  height: 100,
                  borderRadius: 1,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
