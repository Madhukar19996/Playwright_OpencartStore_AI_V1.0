import dotenv from 'dotenv';
import { Routes } from '../api/endpoints/routes';

dotenv.config({ path: ['.env', '.env.example'] });

export const API_BASE_URL = (process.env.API_BASE_URL || Routes.BASE_URL).replace(/\/$/, '');

export function requireApiEnv(name: string): string {
    const value = process.env[name]?.trim();
    if (!value) {
        throw new Error(`Required API environment variable ${name} is not set.`);
    }
    return value;
}

export function requireApiNumber(name: string): number {
    const value = Number(requireApiEnv(name));
    if (!Number.isFinite(value)) {
        throw new Error(`API environment variable ${name} must be a valid number.`);
    }
    return value;
}
