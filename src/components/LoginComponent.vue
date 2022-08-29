<script lang="ts">
    import { login } from './../helpers/http';
    export default {
        data: () => ({
            username: "",
            password: "",
            dataAccess: ""
        }),
        methods:{
            onsubmit: async function (){
                const payload:object = { username: this.username, password: this.password };
                const data:BodyInit =JSON.stringify( payload );
                const { access_token } = await login(data);
                if(access_token === undefined){
                    this.$router.push('/');
                }
                localStorage.token= access_token;
                this.$router.push('/home');
            }
        }
    };
</script>

<template>
    <div id="divLogin">
        <form @submit.prevent="onsubmit">
            <div class="text-center">
                <p>Login</p>
            </div>
            <div class="login-group-input">
                <div>
                    <label>Usuario</label>
                </div>
                <div>
                    <input type="text" name="" v-model="username" class="login-input">
                </div>
            </div>
            <div class="login-group-input">
                <div>
                    <label>Contraseña</label>
                </div>
                <div>
                    <input type="password" name="" v-model="password" class="login-input">
                </div>
            </div>
            <div id="login-btn">
                <button type="submit">Ingresar</button>
            </div>
        </form> 
    </div>
</template>

<style scoped>
    #divLogin{
        width: 100%;
        height: 90vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    #divLogin > form{
        width: 50%;
    }
    #divLogin > form > .login-group-input {
        border: 1px solid;
        padding: 6px;
        margin: 20px;
        text-align: end;
        border-radius: 16px;
        display: flex;
    }

    #divLogin > form > div > div > input{
        border: 0px;
        width: 70%;
    }

    #divLogin > form > div > div > input:focus-visible {
        outline: 0px solid;
    }
    
    #login-btn{
        margin: 20px;
    }

    #login-btn > button{
        width: 100%;
        padding: 8px;
        border-radius: 20px;
        background: firebrick;
        color: white;
        border: 0px;
    }

    .login-input{
        border: 0px;
    }
</style>