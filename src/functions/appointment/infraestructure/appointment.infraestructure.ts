import { Appointment } from "../domain/appointment";
import { AppointmentRepository } from "../domain/repository/appoinment.repository";
import { Factory } from "./appointment.factory";

export class AppointmentInfraestructure implements AppointmentRepository {
    async create(appointment: Appointment, factory:Factory) {
      return   await  factory.sendMessage(appointment);
    }
}