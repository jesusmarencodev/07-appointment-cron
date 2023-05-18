export const appointmentHandler = async (event) => {
  console.log("estoy desde la lambda que ejecutara appointment-cron");
  console.log(JSON.stringify(event));
  return {
    statusCode: 200,
    event
  };
};
