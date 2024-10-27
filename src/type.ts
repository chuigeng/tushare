export type SelectiveResponse<K extends keyof R, R> = {
  [P in K]: R[P];
};
