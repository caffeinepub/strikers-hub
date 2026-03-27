import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Striker {
    bio: string;
    club: string;
    name: string;
    nationality: string;
    imageUrl: string;
    matches: bigint;
    goals: bigint;
    position: string;
}
export interface backendInterface {
    getAllStrikers(): Promise<Array<Striker>>;
    getStrikerById(id: string): Promise<Striker>;
    getTopStrikers(limit: bigint): Promise<Array<Striker>>;
}
