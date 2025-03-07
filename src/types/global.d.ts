declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clarity?: (command: string, ...args: any[]) => void;
  }
}

export {};
