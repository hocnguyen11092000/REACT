import axiosClient from "./axiosClient";

const categoryNewsApi = {
  getAll(params) {
    const url = '/Category'
    return axiosClient.get(url, { params })
  },
  get(id) {
    const url = `/Category/${id}`
    return axiosClient.get(url)
  },
  add(data) {
    const url = '/Category'
    return axiosClient.post(url, data)
  },
  update(data) {
    const url = `/Category/${data.id}`
    return axiosClient.patch(url, data)
  },
  remove(id) {
    const url = `/Category/${id}`
    return axiosClient.delete(url)
  }
}

export default categoryNewsApi