import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Busqueda from '../views/BusquedaHistoria.vue'
import AdminLogin from '../views/AdminLogin.vue'
import Media from '../views/HistoriaMultimedia.vue'
import Proceso from '../views/ProcesoPino.vue'
import Certificado from '../views/CertificadosPino.vue'
import Registro from '../views/RegistroPino.vue'
import Tronco from '../views/TroncoRegistro.vue'
import Transporte from '../views/TransportePino.vue'
import newAdmin from '../views/AdminRegister.vue'
import crearTronco from '../views/CrearTronco.vue'
import confirmarTronco from '../views/ConfirmarTronco.vue'
import troncoSolana from '../views/TroncoSolana.vue'
import buscarTronco from '../views/BuscarTronco.vue'
import modificarTronco from '../views/ModificarTronco.vue'
import borrarTronco from '../views/BorrarTronco.vue'
import procesosReg from '../views/ProcesosReg.vue'
import certificadosReg from '../views/CertificadosReg.vue'
import repisaReg from '../views/RepisaReg.vue'
import crearTransporte from '../views/CrearTransporte.vue'
import buscarTransporte from '../views/BuscarTransportes.vue'
import modificarTransporte from '../views/ModificarTransporte.vue'
import borrarTransporte from '../views/BorrarTransporte.vue'
import crearProceso from '../views/CrearProceso.vue'
import buscarProceso from '../views/BuscarProceso.vue'
import modificarProceso from '../views/ModificarProceso.vue'
import borrarProceso from '../views/BorrarProceso.vue'
import crearCertificado from '../views/CrearCertificado.vue'
import buscarCertificado from '../views/BuscarCertificado.vue'
import modificarCertificado from '../views/ModificarCertificado.vue'
import borrarCertificado from '../views/BorrarCertificado.vue'

import crearRepisa from '../views/CrearRepisa.vue'
import buscarRepisa from '../views/BuscarRepisa.vue'
import modificarRepisa from '../views/ModificarRepisa.vue'
import borrarRepisa from '../views/BorrarRepisa.vue'

import ExplicacionPantalla from '../views/ExplicacionPantalla.vue'

const routes = [
  {
    path: '/',
    name: 'ExplicacionPantalla',
    component: ExplicacionPantalla
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path:'/Historia',
    name:'Busqueda',
    component: Busqueda
  },
  {
    path:'/Administrador',
    name:'Admin',
    component: AdminLogin
  },
  {
    path:'/HistoriaMed',
    name:'Media',
    component: Media
  },
  {
    path:'/Procesos',
    name:'Proceso',
    component: Proceso
  },
  {
    path:'/Certificados',
    name:'Certificado',
    component: Certificado
  },
  {
    path:'/Registros',
    name:'Registro',
    component: Registro
  },
  {
    path:'/Troncos',
    name:'Tronco',
    component: Tronco
  },
  {
    path:'/Transportes',
    name:'Transporte',
    component: Transporte
  },
  {
    path:'/Registrar',
    name:'newAdmin',
    component: newAdmin
  }
  ,
  {
    path:'/CrearTronco',
    name:'crearTronco',
    component: crearTronco
  }
  ,
  {
    path:'/ConfirmarTronco',
    name:'confirmarTronco',
    component: confirmarTronco
  }
  ,
  {
    path:'/TroncoSolana',
    name:'troncoSolana',
    component: troncoSolana
  }
  ,
  {
    path:'/BuscarTronco',
    name:'buscarTronco',
    component: buscarTronco
  }
  ,
  {
    path:'/ModificarTronco',
    name:'modificarTronco',
    component: modificarTronco
  },
  {
    path:'/BorrarTronco',
    name:'borrarTronco',
    component: borrarTronco
  }
  ,
  {
    path:'/ProcesosReg',
    name:'procesosReg',
    component: procesosReg
  }
  ,
  {
    path:'/CertificadosReg',
    name:'certificadosReg',
    component: certificadosReg
  }
  ,
  {
    path:'/RepisaReg',
    name:'repisaReg',
    component: repisaReg
  }
  ,
  {
    path:'/CrearTransporte',
    name:'crearTransporte',
    component: crearTransporte
  }
  ,
  {
    path:'/BuscarTransporte',
    name:'buscarTransporte',
    component: buscarTransporte
  }
  ,
  {
    path:'/ModificarTransporte',
    name:'modificarTransporte',
    component: modificarTransporte
  }
  ,
  {
    path:'/BorrarTransporte',
    name:'borrarTransporte',
    component: borrarTransporte
  },
  {
    path:'/CrearProceso',
    name:'crearProceso',
    component: crearProceso
  }
  ,
  {
    path:'/BuscarProceso',
    name:'buscarProceso',
    component: buscarProceso
  }
  ,
  {
    path:'/ModificarProceso',
    name:'modificarProceso',
    component: modificarProceso
  }
  ,
  {
    path:'/BorrarProceso',
    name:'borrarProceso',
    component: borrarProceso
  },

  {
    path:'/CrearCertificado',
    name:'crearCertificado',
    component: crearCertificado
  }
  ,
  {
    path:'/BuscarCertificado',
    name:'buscarCertificado',
    component: buscarCertificado
  }
  ,
  {
    path:'/ModificarCertificado',
    name:'modificarCertificado',
    component: modificarCertificado
  }
  ,
  {
    path:'/BorrarCertificado',
    name:'borrarCertificado',
    component: borrarCertificado
  }



  ,

  {
    path:'/CrearRepisa',
    name:'crearRepisa',
    component: crearRepisa
  }
  ,
  {
    path:'/BuscarRepisa',
    name:'buscarRepisa',
    component: buscarRepisa
  }
  ,
  {
    path:'/ModificarRepisa',
    name:'modificarRepisa',
    component: modificarRepisa
  }
  ,
  {
    path:'/BorrarRepisa',
    name:'borrarRepisa',
    component: borrarRepisa
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
