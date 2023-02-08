export interface DataRow {
  place: number
  login: string
  orders: number
  status: string
}

export type DataRowSortField = "login" | "place" | "orders" | "status"
