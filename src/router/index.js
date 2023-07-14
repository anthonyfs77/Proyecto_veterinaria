import { createRouter, createWebHistory } from 'vue-router'
import principalMain from '../../src/views/Inicio/MainInicio.vue'
import control from '../views/Administracion/MenuManagmentView.vue'; 
import panelAdmin from '../views/Administracion/PanelAdminView.vue';
import productos from '../views/Productos/TablaProductsPublicsView.vue'; 
import productosInternos from '../views/Productos/TablaProductsInternosView.vue'; 
import productosPublicos from '../views/Productos/TablaProductsPublicsView.vue'; 
import  inventarioInterno from '../views/Reportes/ProductosInternosView.vue';
import inventario from '../views/Reportes/ReporteInventarioView.vue';
import historialMedico from '../views/Reportes/HistorialMedicoView.vue';
import consultasHechas from '../views/Reportes/ConsultasRealizadasView.vue';
import consultasRechazadas from '../views/Reportes/ConsultasRechazadasView.vue';
import ordenesCompra from '../views/Reportes/OrdenesDeCompraView.vue';
import reporteVentas from '../views/Reportes/ReporteVentasView.vue';
import login from '../views/forms/loginView.vue';
import register from '../views/forms/RegisterView.vue';
import soporteyayuda from '../views/soporteyusuarios/soporteyayuda.vue';
import GestionProveedores from '../views/proveedores/GestionProveedoresView.vue';
import catalogo from '../views/Productos/catalogoView.vue';
//import sidebar from '../views/Administracion/PanelAdminView.vue'

const routes = [
  // Vistas predeterminadas
  {
    path: '/',
    name: 'principalMain',
    component: principalMain,
  },
  
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/GestionProveedores',
    name: 'GestionProveedores',
    component: GestionProveedores
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: catalogo
  },
  {
    path: '/soporteyayuda',
    name: 'soporteyayuda',
    component: soporteyayuda
  },

  {

    // el router view 
    path: '/panelAdmin',
    name: 'panelAdmin',
    component: panelAdmin,
    children: [
      {
        path: '/control',
        name: 'control',
        component: control
      },
      {
        path: '/productos',
        name: 'productos',
        component: productos,
      },
      {
        path: '/productosInternos',
        name: 'productosInternos',
        component: productosInternos
      },
      {
        path: '/productosPublicos',
        name: 'productosPublicos',
        component: productosPublicos
      },
      {
        path:'/inventarioInterno',
        name:'reportinvetnariointerno',
        component:inventarioInterno
      },
      {
        path:'/inventario',
        name:'reportinventario',
        component:inventario
      },
      {
        path: '/historialMedico',
        name:'reportehistorialmedico',
        component: historialMedico
      },
      {
        path: '/consultasHechas',
        name : 'reportconsultasrealizadas',
        component: consultasHechas
      },
      {
        path: '/consultasRechazadas',
        name: 'reportconsultasrechazadas',
        component: consultasRechazadas
      },
      {
        path: '/ordenesCompra',
        name: 'reportordenescompra',
        component: ordenesCompra
      },
      {
        path: '/reporteVentas',
        name: 'reporteventas',
        component: reporteVentas
      }
    ]
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
