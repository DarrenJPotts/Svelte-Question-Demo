import { writable } from 'svelte/store';
import type { Answer } from '../interfaces/answer.interface';

export const answers = writable<Answer[]>([]);
