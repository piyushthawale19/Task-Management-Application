export type TaskPriority = 'low' | 'medium' | 'high';
export type TaskStatus = 'todo' | 'in_progress' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

const TASKS_KEY = 'taskflow_tasks';
const USER_KEY = 'taskflow_user';

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function getTasks(): Task[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(TASKS_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveTasks(tasks: Task[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export function createTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Task {
  const tasks = getTasks();
  const newTask: Task = {
    ...task,
    id: generateId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  saveTasks(tasks);
  return newTask;
}

export function updateTask(id: string, updates: Partial<Omit<Task, 'id' | 'createdAt'>>): Task | null {
  const tasks = getTasks();
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return null;
  
  tasks[index] = {
    ...tasks[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  saveTasks(tasks);
  return tasks[index];
}

export function deleteTask(id: string): boolean {
  const tasks = getTasks();
  const filtered = tasks.filter(t => t.id !== id);
  if (filtered.length === tasks.length) return false;
  saveTasks(filtered);
  return true;
}

export function getUser(): User | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(USER_KEY);
  return stored ? JSON.parse(stored) : null;
}

export function saveUser(user: User): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearUser(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(USER_KEY);
}

export function registerUser(email: string, name: string, password: string): User {
  const existingUsers = getStoredUsers();
  if (existingUsers.find(u => u.email === email)) {
    throw new Error('User with this email already exists');
  }
  
  const user: User = {
    id: generateId(),
    email,
    name,
  };
  
  existingUsers.push({ ...user, password });
  localStorage.setItem('taskflow_users', JSON.stringify(existingUsers));
  saveUser(user);
  return user;
}

export function loginUser(email: string, password: string): User {
  const existingUsers = getStoredUsers();
  const found = existingUsers.find(u => u.email === email && u.password === password);
  
  if (!found) {
    throw new Error('Invalid email or password');
  }
  
  const user: User = {
    id: found.id,
    email: found.email,
    name: found.name,
  };
  saveUser(user);
  return user;
}

function getStoredUsers(): Array<User & { password: string }> {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('taskflow_users');
  return stored ? JSON.parse(stored) : [];
}
