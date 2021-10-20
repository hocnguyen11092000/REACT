import axiosClient from "./axiosClient";

const postApi = {
  getAll(params) {
    const url = '/Post'
    return axiosClient.get(url, { params })
  },
  get(id) {
    const url = `/Post/${id}`
    return axiosClient.get(url)
  },
  add(data) {
    const url = '/Post'
    return axiosClient.post(url, data)
  },
  update(data) {
    const url = `/Post/${data.id}`
    return axiosClient.patch(url, data)
  },
  remove(id) {
    const url = `/Post/${id}`
    return axiosClient.delete(url)
  }
}

export default postApi