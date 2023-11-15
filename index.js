const cron = require('node-cron');
const URL = "https://viacep.com.br/ws/88015902/json/";


cron.schedule("0 * * * *", () => {
    const data = new Date();
    fetch(URL)
    .then(response => response.json())
    .then(result => {
        console.log("Verificação concluída com sucesso!", "\n", data.toLocaleString(), "\n", result)
    })
    .catch(err => {
        console.error("Falha na verificação.", "\n", data.toLocaleString(), "\n", err)
    })
})