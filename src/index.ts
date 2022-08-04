import express from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

//  Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Configurações de Rotas
app.use(usersRoute);
app.use(statusRoute);

//  Inicialização do Servidor
app.listen(3000, () => {
    console.log('Running Aplication on port: 3000');
});