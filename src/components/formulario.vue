<script setup>
import estructura from '@/components/estructura.vue'
</script>
<template>
    <br><br>
    <br><br>
    <h1 id="titulo-formulario"> Formulario de Registro </h1>
    <form @submit.prevent="submitForm" class="container">
        <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="form.name" @input="validateName" class="form-control"/>
            <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
        </div>
        <div class="form-group">
            <label for="email">Correo:</label>
            <input type="email" id="email" v-model="form.email" @input="validateEmail" class="form-control"/>
            <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
        </div>
        <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="form.password" @input="validatePassword" class="form-control"/>
            <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
        </div>
        <div class="form-group">
            <label for="confirmPassword">Repetir Contraseña:</label>
            <input type="password" id="confirmPassword" v-model="form.confirmPassword" @input="validateConfirmPassword" class="form-control"/>
            <p v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</p>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
    <estructura />
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            errors: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        };
    },
    methods: {
        validateName() {
            if (!this.form.name) {
                this.errors.name = 'El campo nombre es requerido';
            } else if (/\d/.test(this.form.name)) {
                this.errors.name = 'El nombre no debe contener números';
            } else {
                this.errors.name = '';
            }
        },
        validateEmail() {
            const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!this.form.email) {
                this.errors.email = 'El campo correo es requerido';
            } else if (!emailPattern.test(this.form.email)) {
                this.errors.email = 'El correo es inválido';
            } else {
                this.errors.email = '';
            }
        },
        validatePassword() {
            if (!this.form.password) {
                this.errors.password = 'El campo contraseña es requerido';
            } else {
                this.errors.password = '';
            }
        },
        validateConfirmPassword() {
            if (!this.form.confirmPassword) {
                this.errors.confirmPassword = 'El campo repetir contraseña es requerido';
            } else if (this.form.confirmPassword !== this.form.password) {
                this.errors.confirmPassword = 'Las contraseñas no coinciden';
            } else {
                this.errors.confirmPassword = '';
            }
        },
        submitForm() {
            this.validateName();
            this.validateEmail();
            this.validatePassword();
            this.validateConfirmPassword();

            if (!Object.values(this.errors).some(error => error !== '')) {
                alert('El registro se ha realizado correctamente');
            }
        }
    }
};
</script>

<style scoped>
.container {
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px
}

.form-group {
    margin-bottom: 20px;
}

.label {
    font-weight: bold;
}

.form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 35px;
    box-sizing: border-box;
}

.error-message {
    color: red;
    margin-top: 5px;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 35px;
    cursor: pointer;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
    margin-left: 20px;
}

input[type="text"],
input[type="password"],
input[type="email"] {
    margin-bottom: 10px;
    margin-top: 10px;
}

button {
    margin-top: 20px;
}

#titulo-formulario {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 36px;
    text-align: center;
    padding-bottom: 20px
}
</style>
