import { apiHelper } from '../utils/helpers'

export default {
  delete({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  },
  create({ restaurantId, text }) {
    return apiHelper.post(`/comments`, { restaurantId, text })
  },
}
