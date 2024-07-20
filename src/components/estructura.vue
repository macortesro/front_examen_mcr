<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome(){
    if (router.currentRoute.value.path !== '/') {
        router.push('/');
    }
}
</script>
<template>
    <div class="navbar">
        <ul>
            <li>
                <a href="#" @click.prevent="goToHome">Cálculo de Calificaciones</a>
            </li>
            <li>
                <router-link to="/formulario">Formulario de Registro</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #808080; 
    padding: 10px 0px 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 32px;
}

.navbar ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
}

.navbar li {
    margin: 0 15px;
}

.navbar a,
.navbar router-link {
    color: #fff; /* Color blanco para el texto */
    text-decoration: none;
    font-size: 16px;
}

.navbar a:hover,
.navbar router-link:hover {
    text-decoration: underline;
}
</style>
