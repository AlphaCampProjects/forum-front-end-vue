<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">
            {{ profile.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ profile.commentsCount }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ profile.favoritedCount }}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{ profile.followingsCount }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ profile.followersCount }}</strong> followers (追隨者)
            </li>
          </ul>

          <template v-if="profile.isAdmin">
            <a href="/users/1/edit"
              ><button type="submit" class="btn btn-primary">
                edit
              </button></a
            >
          </template>
          <template v-else>
            <button
              v-if="isFollowed"
              class="btn btn-danger"
              @click.stop.prevent="deleteFollowed"
            >
              取消追蹤
            </button>
            <button
              v-else
              class="btn btn-success"
              @click.stop.prevent="addFollowed"
            >
              追蹤
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialProfile: {
      type: Object,
      required: true,
    },
    currentUser: {
      type: Object,
      required: true,
    },
    initialIsfollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      profile: this.initialProfile,
      isFollowed: this.initialIsfollowed,
    };
  },
  methods: {
    deleteFollowed() {
      this.isFollowed = false;
    },
    addFollowed() {
      this.isFollowed = true;
    },
  },
};
</script>
