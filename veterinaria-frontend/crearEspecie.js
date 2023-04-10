import EspecieAPI from "./EspecieAPI";

const miEspecie = new EspecieAPI();

const btnProcesar = document.getElementById('btn-procesar');

btnProcesar.addEventListener('click',
    async (event) => {
        event.preventDefault();
        btnProcesar.disabled = true;
        await miEspecie.guardarEspecie();

    }
)