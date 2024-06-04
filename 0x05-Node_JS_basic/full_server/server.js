import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

app.listen(port);
app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

export default app;
