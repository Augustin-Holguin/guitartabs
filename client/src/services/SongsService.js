import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  post () {
    return Api().get('songs')
  }
}
