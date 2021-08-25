# 餐廳論壇專案
運用Vue.js + Vuex 前端框架加上 Bootstrap 呈現畫面細節、串接後端 Restful API 復刻 Taipei米其林餐廳– 米其林指南的餐廳網站 [【Demo Link】](https://alphacampprojects.github.io/forum-front-end-vue/#/signin)

管理者帳號密碼：root@example.com / 12345678

一般使用者帳號密碼：user2@example.com / 12345678
## 專案畫面

### 1. 首頁
功能：
- 可瀏覽所有餐廳列表並可分頁瀏覽減輕網頁 loading 速度
- 可根據餐廳類別瀏覽餐廳
- 使用者可直接對餐廳按讚（取消按讚）或是將餐廳加到最愛（移除最愛）
<img width="1433" alt="截圖 2021-08-09 上午12 41 09" src="https://user-images.githubusercontent.com/69742330/128639186-6b4e7767-864d-4afb-a032-17a8dbff8eaf.png">

### 2. 個別餐廳頁面
- 可查看各餐廳詳細資訊及評論列表
- 可針對該餐廳按讚及加入最愛
- 可留下對該餐廳評論
- （若為管理者）可刪除個別評論
<img width="1433" alt="截圖 2021-08-09 上午12 41 51" src="https://user-images.githubusercontent.com/69742330/128639183-3ebd2478-776b-4b07-972d-c653040ef3d9.png">

### 3. 使用者資訊頁面
- 可查看各使用者詳細資訊，包含：追蹤人數、追隨者人數、收藏餐廳、已評論餐廳
- 若為自己的使用者介面，則可以編輯使用者的名稱及大頭貼
<img width="1433" alt="截圖" src="https://user-images.githubusercontent.com/69742330/128639339-0eff9bdc-cdac-419e-afb6-fe20446b9423.png">

### 4. 管理員頁面
- 可查看餐廳列表、餐廳類別列表、使用者列表
- 管理員可對餐廳列表進行查看細節、編輯、刪除、新增功能
- 管理員可對餐廳類別列表進行編輯、刪除、新增功能
- 管理員可對使用者列表進行管理者、一般使用者權限切換功能

<img width="1433" alt="截圖" src="https://user-images.githubusercontent.com/69742330/128639391-a5947a6b-c1ef-41de-822c-e94cf0e43528.png">


## 專案建立流程
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
