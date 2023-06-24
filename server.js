const express = require("express");
const { enviar } = require("./index.js");
const app = express();
const port = 3000;

app.get("/envio_correo", async (req, res) => {
    await enviar();
    res.status(200).send("Correo enviado");
});

// CREARAN UN METODO POST DONDE ENVIARAN LOS DESTINATARIOS Y INFORMACION QUE DESEAN ENVIAR EN EL CORREO
// EL METODO LO PROBARAN DESDE POSTMAN
// LA FINALIDAD DEL EJERCICIO ES QUE DEBEN ENVIAR DE MANERA DINAMICA A LA FUNCION ENVIAR LOS PARAMETROS
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
