<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          v-model="name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="image"
          :src="image"
          width="200"
          height="200"
          class="d-block img-thumbnail mb-3"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        Submit
      </button>
    </form>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { Toast } from '../utils/helpers';
import usersAPI from './../apis/users';
export default {
  name: 'userEdit',
  data() {
    return {
      id: -1,
      name: '',
      image: '',
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(['currentUser']),
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.setUser(id)
    next()
  },
  watch: {
    // currentUser是透過非同步取得，若變更需要再呼叫一次 setUser
    currentUser(user) {
      if (user.id === -1) return;
      const { id } = this.$route.params;
      this.setUser(id);
    },
  },
  methods: {
    setUser(userId) {
      const { id, name, image } = this.currentUser;
      // 如果 currentUser 的 id 和 userId 不同，則轉址去 404
      if (id.toString() !== userId.toString()) {
        this.$router.push({ name: 'not-found' });
        return;
      }
      this.name = name;
      this.image = image;
      this.id = id;
    },
    handleFileChange(e) {
      const { files } = e.target;
      console.log(files);

      if (files.length === 0) {
        this.image = '';
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.image = imageURL;
      }
    },
    async handleSubmit(e) {
      try {
        if (!this.name) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入姓名',
          });
          return;
        }
        this.isProcessing = true;
        const form = e.target;
        const formData = new FormData(form);

        const { data } = await usersAPI.update({ userId: this.id, formData });
        console.log('data: ', data);
        if (data.status !== 'success') {
          throw new Error(data.message);
        }

        this.$router.push({ name: 'user', params: { id: this.id } });
      } catch (error) {
        this.isProcessing = false;
        console.log('error: ', error);
        Toast.fire({
          icon: 'error',
          title: '現在無法更新資料，請稍後再試',
        });
      }
    },
  },
  created() {
    if (this.currentUser.id === -1) return;
    const { id } = this.$route.params;
    this.setUser(id);
  },
};
</script>
