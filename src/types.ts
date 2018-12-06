export interface Todo {
    id: number;
    description: string;
    done: boolean;
    priority: Priority
}

export type Priority = '🤷‍♂️'| '❗️' | '‼';