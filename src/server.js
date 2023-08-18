const express = require("express");

const app = express();
app.use(express.json());

app.post("/users", (request,response) => {
  const {name, email, password} = request.body

  response.send(`Usuário: ${name}. E-mail: ${email}. E a senha é: ${password}`)
} );

const PORT = 3333;

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));