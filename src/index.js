import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

// importing routes
import healthCentreRoute from "./routes/healthCareRoute";
import userRoute from "./routes/usersRoute";
import newBoneRoute from "./routes/newBorn";
import draftRoute from "./routes/draftRoute";

import { Sequelize } from "sequelize";
dotenv.config();
const db = new Sequelize(process.env.DbConnection);
const connectToDatabase = async () => {
    try {
        await db.authenticate();
        console.log("Database connected successfully")
        
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}
connectToDatabase()

const app = express();
//Documentation Side

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PostgreSQL Blog API Node JS",
      version: "1.0.0",
    },
    servers: [
      {
        
        url: "http://localhost:4600",
      },
    ],
    security: [
      {
        BearerAuth: [],
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  apis: ["./src/docs/*.js"], //determination of path
};
const swaggerSpec = swaggerJSDoc(options)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))



app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Require app to use imported routes
app.use("/DataCollection/API",healthCentreRoute);
app.use("/DataCollection/API",userRoute);
app.use("/DataCollection/API",newBoneRoute);
app.use("/DataCollection/API",draftRoute);


app.get("/", (req, res) => {
  res.status(200).json({
    status: "200",
    author: "Alexis",
    message:"Most welcome to my API"
  })
});
const PORT = process.env.PORT || 2300;
app.listen(PORT, () =>{
    console.log(`Server is running on port:http://localhost:${PORT}`);

});
