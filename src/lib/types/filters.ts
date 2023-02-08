export type SelectFilter = "loginFilter" | "ordersFilter" | "statusFilter"

export interface DataRowFilters {
  from?: string
  to?: string
  login?: string
  status?: string
  sort?: string
  sortType?: "ASC" | "DESC"
}
