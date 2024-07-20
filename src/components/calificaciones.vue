<script setup>
import estructura from '@/components/estructura.vue'
</script>
<template>
    <br><br>
    <br><br>
    <h1 id="titulo-calificaciones"> Cálculo de Calificaciones</h1>
    <div class="calificaciones-container">
        <form @submit.prevent="calcularCalificaciones" class="container">
            <div class="form-group">
                <label for="nota1">Nota 1:</label>
                <input type="number" id="nota1" v-model.number="notas.nota1" class="form-control" @input="validateNota1" min="10" max="70"/>
            </div>
            <div class="form-group">
                <label for="nota2">Nota 2:</label>
                <input type="number" id="nota2" v-model.number="notas.nota2" class="form-control" @input="validateNota2" min="10" max="70"/>
            </div>
            <div class="form-group">
                <label for="nota3">Nota 3:</label>
                <input type="number" id="nota3" v-model.number="notas.nota3" class="form-control" @input="validateNota3" min="10" max="70"/>
            </div>
            <div class="form-group">
                <label for="asistencia">Asistencia (%):</label>
                <input type="number" id="asistencia" v-model.number="notas.asistencia" class="form-control" @input="validateAsistencia" min="0" max="100"/>
            </div>
            <button type="submit" class="btn btn-primary">Calcular</button>
        </form>
        <div v-if="resultado" class="resultado">
            <p>El promedio es: {{ resultado.promedio }}</p>
            <p>Tu estado es: {{ resultado.mensaje }}</p>
            
        </div>
    </div>
    <estructura />
</template>

<script>
export default {
    data() {
        return {
            notas: {
                nota1: null,
                nota2: null,
                nota3: null,
                asistencia: null
            },
            errors: {
                nota1: '',
                nota2: '',
                nota3: '',
                asistencia: ''
            },
            resultado: null
        };
    },
    methods: {
        validateNota1() {
            this.errors.nota1 = (this.notas.nota1 < 10 || this.notas.nota1 > 70) ? 'Invalid' : '';
        },
        validateNota2() {
            this.errors.nota2 = (this.notas.nota2 < 10 || this.notas.nota2 > 70) ? 'Invalid' : '';
        },
        validateNota3() {
            this.errors.nota3 = (this.notas.nota3 < 10 || this.notas.nota3 > 70) ? 'Invalid' : '';
        },
        validateAsistencia() {
            this.errors.asistencia = (this.notas.asistencia < 0 || this.notas.asistencia > 100) ? 'Invalid' : '';
        },
        calcularCalificaciones() {
            this.validateNota1();
            this.validateNota2();
            this.validateNota3();
            this.validateAsistencia();

            if (!Object.values(this.errors).some(error => error !== '')) {
                const promedio = (this.notas.nota1 * 0.35) + (this.notas.nota2 * 0.35) + (this.notas.nota3 * 0.30);
                const aprobado = promedio >= 40 && this.notas.asistencia >= 80;
                this.resultado = {
                    promedio: promedio.toFixed(2),
                    mensaje: aprobado ? 'Aprobado' : 'Reprobado'
                    
                };
            } else {
                this.resultado = null;
            }
        }
    }
};
</script>
<style scoped>
.calificaciones-container {
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

input[type="number"] {
    margin-bottom: 10px;
    margin-top: 10px;
}

button {
    margin-top: 20px;
}

.resultado {
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}

#titulo-calificaciones {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 36px;
    text-align: center;
    padding-bottom: 20px
}

</style>
