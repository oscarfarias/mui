export enum CAMERAS {
  KITCHEN = `KITCHEN`,
  LIVING = `LIVING`,
  ATTIC = `ATTIC`,
}
export interface Camera {
  title: string
  type: CAMERAS
}
