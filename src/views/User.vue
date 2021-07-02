<template>
  <main role="main">
    <div class="album py-5 bg-light">
      <div class="container">
        <UserProfileCard
          :initial-profile="profile"
          :initial-is-followed="isFollowed"
        />
        <div class="row">
          <div class="col-md-4">
            <UserFollowingsCard :followings="followings" />
            <br />
            <UserFollowersCard :followers="followers" />
          </div>
          <div class="col-md-8">
            <UserCommentsCard :comments="comments" />
            <br />
            <UserFavoritedRestaurantsCard
              :favorited-restaurants="favoritedRestaurants"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import UserProfileCard from './../components/UserProfileCard.vue';
import UserFollowingsCard from './../components/UserFollowingsCard.vue';
import UserFollowersCard from './../components/UserFollowersCard.vue';
import UserCommentsCard from './../components/UserCommentsCard.vue';
import UserFavoritedRestaurantsCard from './../components/UserFavoritedRestaurantsCard.vue';
import usersAPI from './../apis/users';
import { Toast } from '../utils/helpers';
import { mapState } from 'vuex';

export default {
  name: 'user',
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      profile: {
        id: 0,
        name: '',
        email: '',
        image: '',
        isAdmin: false,
        commentsCount: 0,
        favoritedCount: 0,
        followingsCount: 0,
        followersCount: 0,
      },
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isFollowed: false,
    };
  },
  computed: {
    ...mapState(['currentUser']),
  },
  created() {
    const { id: userId } = this.$route.params;
    console.log('id: ', userId);
    this.fetchUser(userId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.get({ userId });
        if (data.status === 'error') {
          throw new Error(data.message);
        }
        const { profile, isFollowed } = data;
        const {
          id,
          name,
          email,
          image,
          isAdmin,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = profile;
        this.profile = {
          id,
          name,
          email,
          image,
          isAdmin,
          commentsCount: Comments.length,
          favoritedCount: FavoritedRestaurants.length,
          followingsCount: Followings.length,
          followersCount: Followers.length,
        };
        //處理可能有空值的情況
        this.comments = Comments.filter((comment) => comment.Restaurant);
        this.favoritedRestaurants = FavoritedRestaurants;
        this.followers = Followers;
        this.followings = Followings;
        this.isFollowed = isFollowed;
      } catch (error) {
        console.log('error: ', error);
        Toast.fire({
          icon: 'error',
          title: '目前無法讀取使用者資料，請稍後再試',
        });
      }
    },
  },
};
</script>
