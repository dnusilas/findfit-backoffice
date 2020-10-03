export default function ({ $axios, redirect }) {
  $axios.onResponse(({ data }) => {
    if (data.response_code === 5103) {
      redirect('/logout')
    }
  })
}
