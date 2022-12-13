export type Shifts = {
    facility_name: string;
    facility_id: number;
    shift_id: number;
    shift_date: string;
    start_time: string;
    end_time: string;
}

export type ValidatedResponse = {
    statusCode: number;
    message: string;
    error: boolean;
    data?: any;
}

export type Time = {
    hours: number;
    minutes: number;
    seconds?: number;
}