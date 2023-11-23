export enum CAMERAS {
  KITCHEN = `KITCHEN`,
  LIVING = `LIVING`,
  ATTIC = `ATTIC`,
}
export interface Camera {
  title: string
  type: CAMERAS
}
export interface CardProps {
  title: string
  type: string
  measure: string
  value: number
}
