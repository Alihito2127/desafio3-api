const express = require('express');
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/login');

const app = express();
app.use(bodyParser.json());
app.use('/login', loginRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
