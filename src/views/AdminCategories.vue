<template>
  <div class="container py-5">
    <AdminNav />
    <Spinner v-if="isLoading" />
    <template v-else>
      <form class="my-4" @click.stop.prevent="createCategory">
        <div class="form-row">
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              placeholder="新增餐廳類別..."
              v-model="newCategoryName"
            />
          </div>
          <div class="col-auto">
            <button
              type="button"
              class="btn btn-primary"
              :disabled="isProcessing"
            >
              {{ isProcessing ? '處理中' : '新增' }}
            </button>
          </div>
        </div>
      </form>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col" width="60">
              #
            </th>
            <th scope="col">
              Category Name
            </th>
            <th scope="col" width="210">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <th scope="row">
              {{ category.id }}
            </th>
            <td class="position-relative">
              <div v-show="!category.isEditing" class="category-name">
                {{ category.name }}
              </div>
              <input
                v-show="category.isEditing"
                v-model="category.name"
                type="text"
                class="form-control"
              />
              <span
                v-show="category.isEditing"
                class="cancel"
                @click="handleCancel(category.id)"
              >
                ✕
              </span>
            </td>
            <td class="d-flex justify-content-between">
              <button
                v-show="!category.isEditing"
                type="button"
                class="btn btn-link mr-2"
                @click.stop.prevent="toggleIsEditing(category.id)"
              >
                Edit
              </button>
              <button
                v-show="category.isEditing"
                type="button"
                class="btn btn-link mr-2"
                @click.stop.prevent="
                  updateCategory({
                    categoryId: category.id,
                    name: category.name,
                  })
                "
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-link mr-2"
                @click.stop.prevent="deleteCategory(category.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
import Spinner from './../components/Spinner.vue'

import adminAPI from './../apis/admin'
import { Toast } from '../utils/helpers'

export default {
  name: 'AdminCategories',
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      categories: [],
      newCategoryName: '',
      isProcessing: false,
      isLoading: true,
    }
  },

  created() {
    this.fetchCategories()
  },
  methods: {
    // Read the categories
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get()
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        this.categories = data.categories.map((category) => ({
          ...category,
          isEditing: false,
          nameCached: '',
        }))
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log('error: ', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳類別，請稍後再試',
        })
      }
    },

    // Create the category
    async createCategory() {
      try {
        // 避免送出空白表單
        if (!this.newCategoryName) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入要新增的類別名稱',
          })
          return
        }
        this.isProcessing = true
        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName,
        })
        console.log('data: ', data)
        Toast.fire({
          icon: 'success',
          title: '建立餐廳類別成功',
        })
        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName,
          isEditing: false,
        })
        this.newCategoryName = ''
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log('error: ', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得新增餐廳類別，請稍後再試',
        })
      }
    },
    // Update the category
    async updateCategory({ categoryId, name }) {
      try {
        if (!name) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入類別名稱',
          })
          return
        }
        console.log('in')
        const { data } = await adminAPI.categories.update({ categoryId, name })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.toggleIsEditing(categoryId)
      } catch (error) {
        console.log('error: ', error)
        Toast.fire({
          icon: 'error',
          title: '無法更新類別名稱，請稍後再試',
        })
      }
    },
    // Delete the category
    async deleteCategory(categoryId) {
      try {
        const { data } = await adminAPI.categories.delete({ categoryId })
        console.log('data: ', data)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '刪除餐廳類別成功',
        })
        //將該餐廳從列表中移除
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        )
      } catch (error) {
        console.log('error: ', error)
        Toast.fire({
          icon: 'error',
          title: '無法刪除餐廳類別，請稍後再試',
        })
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          }
        }
        return category
      })
    },

    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached,
          }
        }
        return category
      })
      this.toggleIsEditing(categoryId)
    },
  },
}
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>
