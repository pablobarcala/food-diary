import { Time } from "./Time";

export interface Food {
    id?: number;
    name?: string;
    type?: string;
    cantidad?: string;
    description?: string;
    date?: string;
    timeRef: string;
    uid?: string;
}