const express = require("express");
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
const errorHandler = require("./extra/errorHandler");

//router
const employeesRouter = require("./extra/routes");

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

//use the router for all the employee routes
app.use("/employees", employeesRouter);

//404 middleware
app.use((req, res, next) => {
  next({ status: 404, message: "Endpoint not found." });
});

//general errorhandler middleware
app.use(errorHandler);

const employees = require("./employees");

//app.get("/", (req, res) => {
//  res.send("Hello employees!");
//});

//const employees = require("./employees");

//app.get("/employees", (req, res) => {
// res.json(employees);
//});

//app.get("/employees/random", (req, res) => {
// const i = Math.floor(Math.random() * employees.length);
// res.json(employees[i]);
//});

//app.get("/employees/:id", (req, res) => {
// const { id } = req.params;
// const employee = employees.find((e) => e.id === +id);
// if (employee) {
//   res.json(employee);
// } else {
//   res.status(404).send(`There is no employee with id ${id}.`);
// }
//});

app.listen(PORT, () => {
  `Listening on port ${PORT}...`;
});
