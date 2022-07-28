<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light sleep" id="ftco-navbar">
      <div class="container p-0">
        <div class="col-5 col-md-3 col-lg-3 mb-2 mr-2">
          <NuxtLink to="/">
            <img
              class="header-logo mt-2 m-0"
              src="@/static/images/logo.png"
            />
          </NuxtLink>
        </div>
      
       

        
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="mr-3 oi oi-menu"></span>
        </button>

         

        <div class="collapse navbar-collapse" id="ftco-nav" style="flex-direction: column;">

          <div class="content1 d-flex" style="width: 100%;">


           <form v-on:submit.prevent="goToResults" class="search-btn d-flex">
            
              <input 
                class="form-control search"
                type="text" 
                autocomplete="off"
                v-model="keyword"
                placeholder="¿Qué deseas buscar?">
              <button class="btn btn-lupa"><img class="lupa-icon mr-1"
                    type="submit"
                    src="https://img.icons8.com/ios/2x/01569D/search.png" alt=""></button>
          </form>

          <ul class="navbar-nav ml-auto header" style="width: 100%;" >
            <li class="nav-item">
                  <NuxtLink to="/" class="link">Inicio</NuxtLink>
            </li>
            <li class="nav-item dropdown flex-column">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorías
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <NuxtLink class="dropdown-item" to="/bienesraices">Inmuebles</NuxtLink>
                <NuxtLink class="dropdown-item" to="/desarrollos">Desarrollos</NuxtLink>
                <NuxtLink class="dropdown-item" to="/vehiculos">Vehículos</NuxtLink>
                <!-- <a class="dropdown-item" href="#">Empleos</a>
                <a class="dropdown-item" href="#">Tecnología</a>
                <a class="dropdown-item" href="#">Casa y Hogar</a>
                <a class="dropdown-item" href="#">Mascotas</a>
                <a class="dropdown-item" href="#">Viajes</a>
                <a class="dropdown-item" href="#">Educación</a>
                <a class="dropdown-item" href="#">Inversiones</a> -->
              </div>
            </li>
            <li class="nav-item">
                  <NuxtLink to="/registro.html" class="link">Registrate</NuxtLink>
            </li>
            <li class="nav-item">
                  <NuxtLink to="/sesion.html" class="link">Iniciar sesión</NuxtLink>
            </li>
            <li class="nav-item">
                  <NuxtLink to="/#contacto" class="link "><i class="icon-headset"></i> Contacto</NuxtLink>
            </li>
            <!-- <li class="nav-item" v-if="userLogged">
              <a class="link icon-top" href="https://www.clasificadoscontacto.com/panel"><i class="fas fa-user-plus"></i>Mi cuenta</a>
            </li> -->
          </ul>

          </div>





          <!-- <div class="" style="width: 100%;">
            <ul class="navbar-nav header"  >
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Categorías
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NuxtLink class="dropdown-item" to="/bienesraices">Inmuebles</NuxtLink>
                  <NuxtLink class="dropdown-item" to="/vehiculos">Vehículos</NuxtLink>
                  <a class="dropdown-item" href="#">Empleos</a>
                  <a class="dropdown-item" href="#">Tecnología</a>
                  <a class="dropdown-item" href="#">Casa y Hogar</a>
                  <a class="dropdown-item" href="#">Mascotas</a>
                  <a class="dropdown-item" href="#">Viajes</a>
                  <a class="dropdown-item" href="#">Educación</a>
                  <a class="dropdown-item" href="#">Inversiones</a>
                </div>
              </li>
              <li class="nav-item">
                    <NuxtLink to="/favoritos" class="link ">Favoritos</NuxtLink>
              </li>
              <li class="nav-item">
                    <NuxtLink to="/ofertas" class="link">Ofertas</NuxtLink>
              </li>
              <li class="nav-item">
                    <NuxtLink to="/idi" class="link">Inteligencia Digital Contacto</NuxtLink>
              </li>
              <li class="nav-item">
                    <NuxtLink to="/vender" class="link">Vender</NuxtLink>
              </li>
            </ul>
          </div> -->

         
        </div>



      </div>
    </nav>
  </header>
</template>


<script>

import { mapGetters } from 'vuex';


export default {
  data(){
    return {
      keyword: ''
    }
  },
  computed: {
    // ...mapGetters({
    //   userLogged: 'getUserLogged',
    //   showSearchGeneral: 'getShowSearchGeneral',
    // }),
  },
  methods: {
    openSearch() {
    },
    goToResults() {

      if ( this.keyword.trim() == '' ) {
        return;
      }

      this.$router.push({
        name: 'busqueda-general-search',
        params: {
          search: `buscar-por-${this.keyword.trim().toLowerCase().replace(/ /g, '-')}.html`
        }
      });

      this.keyword = ''

    }
  }
}

</script>



<style scoped>
.search-nav .rounded-left{
  border-top-left-radius: 25px !important;
  border-bottom-left-radius: 25px !important;
}
.search-nav .form-control {
    height: 38px !important;
    font-size: 12px;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}
/* .search-nav .input-group{
  width: 28vw;
} */
.btn-menu{
  background-color: #fff;
  color: #00569d;
}
.btn-menu:hover{
  background-color: #00569d;
  color:#f2e115;
}

nav {
  padding: 10px 0 0 0 !important;
}

li {
  display: flex;
  align-items: center;
  text-align: center;
}

a {
  color: white;
  font-size: 15px !important;
  padding: 10px;
}


a:hover {
  color: #f2e115;
  font-size: 15px;
}

a.nuxt-link-exact-active {
  color:#f2e115 !important;
}

.header {
  justify-content: center;
    display: flex;
    align-items: center;
}


.header-logo {
  width: 15vw;
}
@media only screen and (max-width: 991px) {
  .header-logo {
    width: 30vw;
  }
}

.icon-top {
  background-color: #00569f;
  font-size: 15px;
  border-radius: 0.5rem;
  padding: 8px;
  border-width: 0.25rem;
  /* border-color: rgba(0,0,0,0.2);
    border-bottom-style: solid;
    border-right-style: solid; */
}

.icon-top:hover {
  /* border-color: rgba(169, 163, 5, 0.6);
    border-bottom-style: solid;
    border-right-style: solid; */
  color: #f2e115;
}

button.navbar-toggler span {
  color: #f2e115;
}

.icon-top /* span */ {
  /* padding-left: 5px; */
  font-family: "Poppins" !important;
  font-style: "Extra-light";
  font-size: 15px;
}


.search-btn {
  /* cursor: pointer; 
  -webkit-transform: rotate(15deg) scale(1.4);
	transform: rotate(15deg) scale(1.4);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out; */
  align-items: center;
}

/* .search-btn:hover { */
	/* -webkit-transform: rotate(0) scale(1);
	transform: rotate(0) scale(1); */
/* } */

img.lupa-icon {
  height: 28px;
  width: 28px;
}


  button.btn-lupa {
    background-color: #F0E36B !important;
    border-top-left-radius: 0px !important ;
    border-bottom-left-radius: 0px !important ;
    border: none !important;
  }


  input.search {
    border-top-right-radius: 0px !important ;
    border-bottom-right-radius: 0px !important ;
  }



 



  div.dropdown-menu {
    background-color: #f0e26b !important; 
    margin: 0px !important;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  div.dropdown-menu a{
    color: black !important;
  }

  .dropdown:hover>.dropdown-menu {
   display: block !important;
  }

  .dropdown-item:focus, .dropdown-item:hover {
    background-color: #f2e587;
  }


@media (max-width: 992px) {
  .content1 {
    flex-direction: column;
  }
  
}


</style>