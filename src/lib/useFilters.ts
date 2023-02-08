import { useRoute, useRouter } from "vue-router"
import { computed } from "vue"
import { DataRowFilters } from "./types/filters"
import data from "../data"
import { DataRowSortField } from "./types"

export function useFilters() {
  const route = useRoute()
  const router = useRouter()

  const query = computed(() => route.query as any as DataRowFilters)

  const filteredData = computed(() => {
    let filteredData = [...data]

    if (query.value.from && !Number.isNaN(parseInt(query.value.from))) {
      const from = parseInt(query.value.from)
      filteredData = filteredData.filter((row) => row.orders >= from)
    }

    if (query.value.to && !Number.isNaN(parseInt(query.value.to))) {
      const to = parseInt(query.value.to)
      filteredData = filteredData.filter((row) => row.orders <= to)
    }

    if (query.value.login) {
      const regExp = new RegExp(query.value.login, "i")
      filteredData = filteredData.filter((row) => regExp.test(row.login))
    }

    if (query.value.status) {
      const regExp = new RegExp(query.value.status, "i")
      filteredData = filteredData.filter((row) => regExp.test(row.status))
    }

    if (query.value.sort) {
      const regExp = new RegExp("^(login|place|orders|status)$", "i")
      const sort = query.value.sort as DataRowSortField
      if (regExp.test(sort)) {
        if (query.value.sortType == "ASC") {
          filteredData.sort((a, b) => (a[sort] < b[sort] ? -1 : 1))
        } else if (query.value.sortType == "DESC") {
          filteredData.sort((a, b) => (a[sort] > b[sort] ? -1 : 1))
        }
      }
    }

    return filteredData
  })

  const setFilters = (values: DataRowFilters) => {
    console.log(values)

    const query = { ...route.query, ...values }

    // Remove undefined values
    Object.keys(query).forEach(
      (key: any) => (query as any)[key] == "" && delete (query as any)[key]
    )

    router.push({
      query,
      path: route.path,
      force: false,
    })
  }

  return {
    filteredData,
    setFilters,
    query,
  }
}
