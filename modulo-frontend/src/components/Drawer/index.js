import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

function ResponsiveDrawer(props) {
  const { container, classes } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Hidden smDown>
        <div className={classes.toolbar} />
      </Hidden>
      <Divider />
      <MenuList>
          <MenuItem component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem>
            Cadastro Ativos
          </MenuItem>
          <MenuList>
              <MenuItem
                to="/ativos/insumos/novo"
                key="insumos"
                className={classes.nested}
                component={Link}
              >
                Insumos
              </MenuItem>
          </MenuList>
          <MenuList>
              <MenuItem
                to="/ativos/barragens/novo"
                key="barragens"
                className={classes.nested}
                component={Link}
              >
                Barragens
              </MenuItem>
          </MenuList>
          <MenuItem>
            Controle Processos
          </MenuItem>
          
          <MenuItem>
            Monitoramento
          </MenuItem>
          
          <MenuList>
              <MenuItem
                to="/monitoramento/incidentes/novo"
                key="incidentes"
                className={classes.nested}
                component={Link}
              >
                Incidentes
              </MenuItem>
          </MenuList>
          <MenuItem>
            Segurança e Comunicação
          </MenuItem>
          <MenuList>
              <MenuItem
                to="/seguranca/afetados/novo"
                key="afetados-novo"
                className={classes.nested}
                component={Link}
              >
                Cadastrar Afetados
              </MenuItem>
          </MenuList>
          <MenuList>
              <MenuItem
                to="/seguranca/afetados"
                key="afetados"
                className={classes.nested}
                component={Link}
              >
                Ver Afetados
              </MenuItem>
          </MenuList>
          <MenuList>
              <MenuItem
                to="/seguranca/sensores/novo"
                key="sensores"
                className={classes.nested}
                component={Link}
              >
                Sensores
              </MenuItem>
              <MenuItem
                to="/seguranca/areas/novo"
                key="areas"
                className={classes.nested}
                component={Link}
              >
                Areas
              </MenuItem>
          </MenuList>
          <MenuItem>
            Inteligencia do Negócio
          </MenuItem>
          <MenuItem>
            Compliance
          </MenuItem>
          <MenuItem>
            Relatórios
          </MenuItem>
        </MenuList>
    </div>
  );
 
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
      <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
      >
      <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
          Sistema de Controle Ambiental
      </Typography>
      </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;