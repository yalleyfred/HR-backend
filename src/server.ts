import App from "./app";
import IndexRoute from "./routes/index.route";
import AdminRoute from "./routes/admin.route";
import EmployeeRoute from "./routes/employee.route";
import { DB } from './Database';


DB();

const app = new App([new IndexRoute(), new AdminRoute(), new EmployeeRoute()]);

app.listen();