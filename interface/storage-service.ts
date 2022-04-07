export interface StorageService {
    save(key: string, value: string): boolean;
    remove(key: string): void;
    clear(): void;
  }