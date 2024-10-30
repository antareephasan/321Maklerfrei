 
const { errorLogger, logger } = require("./shared/logger");  

// Create an Express app
const app = require("./app");

// Database connection
const connectDB = require("./connection/connectDB");
const config = require("./config");
// Main function to start the server and set up Socket.IO
async function main() {
  try {
    await connectDB();
    logger.info(`DB Connected Successfully at ${new Date().toLocaleString()}`);

    const port = process.env.PORT || 5000;
 

    // Start the server------------------
    const server = app.listen(port, () => {
      logger.info(`App listening on http://${config.base_url}:${config.port}`);
    });
  
    // Handle unhandled promise rejections
    process.on("unhandledRejection", (error) => {
      logger.error("Unhandled Rejection:", error);
      server.close(() => process.exit(1));
    });

    // Handle uncaught exceptions
    process.on("uncaughtException", (error) => {
      errorLogger.error("Uncaught Exception:", error);
      process.exit(1);
    });

    // Handle termination signals
    process.on("SIGTERM", () => {
      logger.info("SIGTERM received");
      server.close(() => process.exit(0));
    });
  } catch (err) {
    errorLogger.error("Main Function Error:", err);
    process.exit(1);
  }
}

// Start the application
main();
