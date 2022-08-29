<script lang="ts">
    import { getCurrencyAll, postConvert } from './../helpers/http';
    export default {
        async mounted(){
            if(localStorage.token === undefined){
                this.$router.push('/home');
            }
            const { currencies } = await getCurrencyAll();
            this.dataCurrency = Object.keys(currencies);
        },
        data(){
            return {
                amount:'',
                from:'',
                to:'',
                dataCurrency:[],
                convertAmount:0,
                rateConvert:0,
            }
        },
        methods:{
            onsubmit: async (e: any)=>{
                const payload:object = { from:this.from, to:this.to, amount: this.amount };
                const data:BodyInit =JSON.stringify( payload );
                const { result } = await postConvert(data);
                this.convertAmount = result[this.to];
                this.rateConvert = result['rate']
                e.preventDefault();
            },
            onNumber: (e: any)=>{
                this.amount = this.amount.replace(/[^0-9]/g, '');
            }
        }
    }
</script>

<template>
    <div class="text-center">
        <p>Convertir</p>
    </div>
    <form @submit.prevent="onsubmit">
        <div id="contentFlex">
            <div class="conver-group-input with-1">
                <input type="text" placeholder="Monto" v-model="amount" v-on:keyup="onNumber" class="convert-select">
            </div>
            <div class="conver-group-input with-2">
                <select placeholder="Moneda 1" v-model="from" class="convert-select">
                    <option v-for="item in dataCurrency">{{item}}</option>
                </select>
            </div>
            <div class="conver-group-input with-2">
                <select placeholder="Moneda 2" v-model="to" class="convert-select">
                    <option v-for="item in dataCurrency">{{item}}</option>
                </select>
            </div>
            <div class="color-div">
                <button type="submit" class="convert-select btn-gray">Covertir</button>
            </div>
        </div>
    </form>
    <div v-if="amount && from && to" class="convert-div-flex">
        <div class="convert-div-text">
            <p>Detalle de conversion</p>
            <p>
                {{amount +' '+ from + ' = ' + convertAmount + ' ' + to}}
            </p>
            <p>
                {{1 +' '+ from + ' = ' + rateConvert + ' ' + to}}
            </p>
        </div>
    </div>
</template>

<style scoped>
#contentFlex{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 10%;
}

#contentFlex > div {
    padding: 10px;
    margin: 10px;
    border: 1px solid;
    border-radius: 20px;
}
#contentFlex > div > input:focus-visible {
    outline: 0px solid;
}

#contentFlex > div > select:focus-visible {
    outline: 0px solid;
}

.convert-select{
    width: 100%;
    border: 0px;
}

.with-1{
    width: 25%;
}
.with-2{
    width: 33%;
}

.btn-gray{
    background: #565050;
    color: #fff;
}

.color-div{
    background: #565050;
}

.convert-div-text{
    width: 50%;
    text-align: center;
    border: 1px solid;
}

.convert-div-flex{
    display: flex;
    justify-content: space-evenly;
}
</style>