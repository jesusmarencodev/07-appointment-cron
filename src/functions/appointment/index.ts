import { getPathHandler } from "../libs/getPathHandler";

export default {
  handler: `${getPathHandler(__dirname)}/handler.appointmentHandler`,
  events: [
    {
      //cada minuto se dispare
      //schedule: "cron(0/1 * * * ? *)",
      schedule: "rate(365 hours)",
    },
  ],
};
