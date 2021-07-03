<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <Spinner v-if="isLoading" />
    <template v-else>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">
              #
            </th>
            <th scope="col">
              Email
            </th>
            <th scope="col">
              Role
            </th>
            <th scope="col" width="140">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">
              {{ user.id }}
            </th>
            <td>{{ user.email }}</td>
            <td>{{ user.isAdmin ? 'admin' : 'user' }}</td>

            <td>
              <button
                v-if="currentUser.id !== user.id"
                @click="toggleUserRole(user.id, user.isAdmin)"
                type="button"
                class="btn btn-link"
              >
                {{ user.isAdmin ? 'set as user' : 'set as admin' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>
<script>
import Spinner from './../components/Spinner.vue'
import AdminNav from './../components/AdminNav.vue'
import adminAPI from './../apis/admin'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      users: [],
      isLoading: true,
    }
  },
  computed: {
    //從 Vuex 中取得 currentUser 資料
    ...mapState(['currentUser']),
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.get()
        console.log('data: ', data)
        this.users = data.users
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log('error: ', error)
        Toast.fire({
          icon: 'error',
          title: '目前無法讀取使用者清單，請稍後再試',
        })
      }
    },
    async toggleUserRole(userId, isAdmin) {
      try {
        const { data } = await adminAPI.users.updateRole({
          userId,
          // 根據後端接收格式調整
          isAdmin: (!isAdmin).toString(),
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '更新完成',
        })
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin,
            }
          }
          return user
        })
      } catch (error) {
        console.log('error: ', error)
        Toast.fire({
          icon: 'error',
          title: '目前無法更新使用者權限，請稍後再試',
        })
      }
    },
  },
  created() {
    this.fetchUsers()
  },
}
</script>
