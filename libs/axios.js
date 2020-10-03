export const switchCaseList = (response) => {
  switch (response.response_code) {
    case 200:
      return response.result
    default:
      return { lists: [], pagination: {} }
  }
}

export const switchCaseDetail = (response) => {
  switch (response.response_code) {
    case 200:
      return response.result
    default:
      return {}
  }
}

export const verifyResponse = (response) => {
  switch (response.response_code) {
    case 200:
      return { value: true }
    default:
      return { error: response.response_msg }
  }
}
