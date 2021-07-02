<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image | emptyImage" width="300px" height="300px" />
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
            <router-link :to="{ name: 'user-edit', params: { id: profile.id } }"
              ><button type="submit" class="btn btn-primary">
                edit
              </button></router-link
            >
          </template>
          <template v-else>
            <button
              v-if="isFollowed"
              class="btn btn-danger"
              @click.stop.prevent="deleteFollowed(profile.id)"
            >
              取消追蹤
            </button>
            <button
              v-else
              class="btn btn-success"
              @click.stop.prevent="addFollowed(profile.id)"
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
import { Toast } from '../utils/helpers';
import { emptyImageFilter } from './../utils/mixins';
import usersAPI from './../apis/users';
export default {
  mixins: [emptyImageFilter],
  props: {
    initialProfile: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      profile: this.initialProfile,
      isFollowed: this.initialIsFollowed,
    };
  },
  watch: {
    initialProfile(newValue) {
      this.profile = {
        ...this.profile,
        ...newValue,
      };
    },
    initialIsFollowed(newValue) {
      this.isFollowed = newValue;
    },
  },
  methods: {
    async deleteFollowed(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });
        if (data.status === 'error') {
          throw new Error(data.message);
        }
        this.isFollowed = false;
      } catch (error) {
        console.log('error: ', error);
        Toast.fire({
          icon: 'error',
          title: '目前無法取消追蹤該使用者，請稍後再試',
        });
      }
    },
    async addFollowed(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });
        console.log('data: ', data);
        if (data.status === 'error') {
          throw new Error(data.message);
        }
        this.isFollowed = true;
      } catch (error) {
        console.log('error: ', error);
        Toast.fire({
          icon: 'error',
          title: '目前無法追蹤該使用者，請稍後再試',
        });
      }
    },
  },
};
</script>
