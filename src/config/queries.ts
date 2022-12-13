import { Shifts } from "../constants/types";
import sql from "./connection"

export const getShifts = async (): Promise<Shifts[]> => {
    return await sql<Shifts[]>
    `select 
    f.facility_name ,
    qos.facility_id ,
    qos.shift_id ,
    qos.shift_date,
    qos.start_time,
    qos.end_time
    from question_one_shifts qos inner join facilities f 
    on 
    qos.facility_id = f.facility_id`;
}

export const getShift = async (shiftId: number): Promise<Shifts[]> => {
    return await sql<Shifts[]>
    `select 
    f.facility_name ,
    qos.facility_id ,
    qos.shift_id ,
    qos.shift_date,
    qos.start_time,
    qos.end_time
    from question_one_shifts qos inner join facilities f 
    on 
    qos.facility_id = f.facility_id
    where
    qos.shift_id = ${shiftId}`;
}