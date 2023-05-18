import { Factory } from "../../infraestructure/appointment.factory";
import { Appointment } from "../appointment";

export interface AppointmentRepository {
  create(appointment: Appointment, factory: Factory): Promise<Appointment>;
}
