<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
          :disabled="isProcessing"
        >
          Delete
        </button>
        <h3>
          <router-link :to="{ name: 'user', params: { id: comment.User.id } }">
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from './../utils/mixins';
import { mapState } from 'vuex';
import commentsAPI from './../apis/comments';
import { Toast } from '../utils/helpers';
export default {
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(['currentUser']),
  },
  methods: {
    async handleDeleteButtonClick(commentId) {
      try {
        this.isProcessing = true;
        const { data } = await commentsAPI.delete({ commentId });
        if (data.status !== 'success') {
          throw new Error(data.message);
        }
        console.log('handleDeleteButtonClick', commentId);
        this.$emit('after-delete-comment', commentId);
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log('error: ', error);
        Toast.fire({
          icon: 'error',
          title: '目前無法刪除評論，請稍後再試',
        });
      }
    },
  },
};
</script>
