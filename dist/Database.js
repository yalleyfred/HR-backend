"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = exports.Database = exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
// import Course from "./models/course.model";
// import Topic from "./models/topics.model";
const config_1 = require("./config");
const isProduction = process.env.NODE_ENV === 'production';
exports.sequelize = new sequelize_typescript_1.Sequelize(config_1.db_name, config_1.db_user, config_1.db_password, {
    host: config_1.db_host,
    port: config_1.DB_PORT,
    dialect: "postgres",
    models: [__dirname + "/models"]
});
exports.Database = new sequelize_typescript_1.Sequelize(config_1.PDB_NAME, config_1.PDB_USER, config_1.PDB_PASSWORD, {
    host: config_1.PDB_HOST,
    port: config_1.PDB_PORT,
    dialect: "postgres",
    models: [__dirname + "/models"],
    dialectOptions: {
        ssl: {
            require: false,
            rejectUnauthorized: false,
        },
    },
});
const DB = () => {
    if (isProduction) {
        exports.Database.authenticate()
            .then(async () => {
            console.log("connected to production database successfully!");
            try {
                await exports.Database.sync();
            }
            catch (error) {
                console.log(error);
            }
        })
            .catch((error) => {
            console.log(error);
            console.log("DB connection for production failed");
        });
    }
    else {
        exports.sequelize.authenticate()
            .then(async () => {
            console.log("connected to local database successfully!");
            try {
                await exports.sequelize.sync();
            }
            catch (error) {
                console.log(error);
            }
        })
            .catch((error) => {
            console.log(error);
            console.log("DB connection for local failed");
        });
    }
};
exports.DB = DB;
// Course.hasMany(Topic, {
//   foreignKey: "course_id",
//   as: "topics"
// });
// Topic.belongsTo(Course, {
//   foreignKey: "course_id",
//   as: "courses"
// })
//# sourceMappingURL=Database.js.map