import App from "./app";
import IndexRoute from "./routes/index.route";
import { DB } from './Database';


DB();

const app = new App([new IndexRoute()]);

app.listen();