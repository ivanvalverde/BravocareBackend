import { CoWorkers, RemainingSpots, Shifts } from "../constants";
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

export const getRemainingSpots = async (): Promise<RemainingSpots[]> => {
    return await sql<RemainingSpots[]>
    `select q1.facility_id, q1.nurse_type, (q1.total - q2.total) as nurses_needed from 
    (select facility_id ,nurse_type_needed as nurse_type, sum(total_number_nurses_needed) as total from jobs j 
    group by nurse_type, facility_id  order by facility_id ) as q1 
    inner join (select j.facility_id, n.nurse_type, count(nurse_type) as total from nurses n 
    inner join nurse_hired_jobs nhj on n.nurse_id = nhj.nurse_id 
    inner join jobs j on nhj.job_id = j.job_id group by nurse_type, j.facility_id 
    order by j.facility_id) as q2 on q1.facility_id = q2.facility_id and 
    q1.nurse_type = q2.nurse_type order by facility_id , nurse_type `;
}

export const getCoWorkers = async (facilityName = 'Facility C', nurseName = 'Anne'): Promise<CoWorkers[]> => {
    console.log(facilityName, nurseName)
    return await sql<CoWorkers[]>
    `select distinct nurse_name as "co-workers" from nurses n 
    inner join nurse_hired_jobs nhj on n.nurse_id = nhj.nurse_id 
    inner join jobs j on j.job_id = nhj.job_id 
    inner join facilities f on f.facility_id = j.facility_id 
    where facility_name ilike ${'%'+facilityName+'%'} and n.nurse_name <> ${nurseName}`;
}