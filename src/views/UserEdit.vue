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
          v-model="profile.name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="profile.image"
          :src="profile.image"
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

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>
<script>
const dummyData = {
  profile: {
    id: 1,
    name: 'root',
    email: 'root@example.com',
    password: '$2a$10$XaxJSOdUg2/931GxMxcJpOWAB1wmUbW5WUwM1GohFh0SyfUxHNYKG',
    isAdmin: true,
    image: 'https://i.imgur.com/eVfTIsY.jpg',
    createdAt: '2021-05-17T05:11:05.000Z',
    updatedAt: '2021-05-29T16:22:50.000Z',
    Comments: [
      {
        id: 1,
        text: 'Ex dolorem molestiae id sint.',
        UserId: 1,
        RestaurantId: 1,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 1,
          name: 'Keely BogisichDa',
          tel: '119.568.4472 x714',
          address: '9991 Dorothy Canyon',
          opening_hours: '08:00',
          description:
            'Beatae et sit aut velit sed minus esse est est. Cupiditate quod ut impedit ipsa repudiandae dicta blanditiis dignissimos consequuntur. Illum minima explicabo animi nostrum recusandae voluptatum fugit. Sunt impedit praesentium atque. Itaque doloribus minima provident unde odit quod iste et.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=43.31238337743435',
          viewCounts: 31,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-06-21T15:41:41.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 2,
        text: 'Et aut voluptate explicabo architecto libero non deserunt qui.',
        UserId: 1,
        RestaurantId: 2,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 2,
          name: 'Alexandrine McKenzie DVM',
          tel: '(266) 656-0345 x270',
          address: '0142 Smith Gateway',
          opening_hours: '08:00',
          description: 'voluptas',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=7.1615087469963035',
          viewCounts: 13,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-06-22T16:08:18.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 3,
        text: 'Perspiciatis fugit est dolores blanditiis adipisci sit nihil.',
        UserId: 1,
        RestaurantId: 3,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 3,
          name: 'Aglae Gulgowski',
          tel: '114.568.9420 x031',
          address: '43362 Noel Turnpike',
          opening_hours: '08:00',
          description:
            'At commodi ut veritatis et velit est quis. Ut laudantium laudantium exercitationem ipsam molestiae corporis quasi maxime sequi. Possimus et perspiciatis qui et vel quod. Veniam totam asperiores fuga error rerum sit quasi. Architecto debitis rem minus dolore.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=79.91299846538044',
          viewCounts: 8,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-06-21T15:41:54.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 7,
        text:
          'Consectetur voluptatibus assumenda commodi amet molestiae eveniet.',
        UserId: 1,
        RestaurantId: 7,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 7,
          name: 'Frederic Grant',
          tel: '1-249-944-2682 x0629',
          address: '13538 Michel Rapid',
          opening_hours: '08:00',
          description:
            'Neque sunt et quia est.\nNatus nihil consequatur similique fuga illum.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=7.4017327223739215',
          viewCounts: 5,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-28T16:24:40.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 11,
        text: 'Voluptatibus sunt porro quo aperiam et earum vel.',
        UserId: 1,
        RestaurantId: 11,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 11,
          name: 'Verona Grady',
          tel: '(482) 132-8200 x10167',
          address: '9635 Malinda Ranch',
          opening_hours: '08:00',
          description: 'Sit sed occaecati vel.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=14.504936560833315',
          viewCounts: 6,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-28T16:44:25.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 13,
        text: 'Quae alias numquam amet dolores.',
        UserId: 1,
        RestaurantId: 13,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 13,
          name: 'Erna Cassin PhD',
          tel: '642-685-6113',
          address: '902 Maegan Inlet',
          opening_hours: '08:00',
          description: 'tenetur rerum magnam',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=75.12026971384928',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 17,
        text: 'Voluptatem eligendi dolorem eaque incidunt.',
        UserId: 1,
        RestaurantId: 17,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 17,
          name: 'Katrina Cole',
          tel: '1-371-311-9102 x334',
          address: '6713 Considine Falls',
          opening_hours: '08:00',
          description: 'est',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=15.98745500777856',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 18,
        text: 'Accusamus aut id blanditiis voluptas ratione temporibus.',
        UserId: 1,
        RestaurantId: 18,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 18,
          name: 'Juliana Rowe',
          tel: '540.926.8892',
          address: '0308 Maximillia Highway',
          opening_hours: '08:00',
          description:
            'Deserunt eos velit vel corporis ut ut similique quasi atque.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=70.98988728179461',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 24,
        text: 'Et totam aspernatur in expedita voluptatem.',
        UserId: 1,
        RestaurantId: 24,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 24,
          name: 'Ludwig Pouros',
          tel: '(170) 707-5090 x0867',
          address: '518 Greenholt Viaduct',
          opening_hours: '08:00',
          description:
            'Nihil voluptate aut. Molestias voluptatibus reprehenderit ex quisquam. Enim ad doloribus. Voluptas a dolorem omnis sint. Maiores quia dolor ea.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=64.05875201807739',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 2,
        },
      },
      {
        id: 26,
        text: 'Aut aspernatur qui.',
        UserId: 1,
        RestaurantId: 26,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 26,
          name: 'Pansy Bahringer',
          tel: '305-389-4179',
          address: '954 Willms Stravenue',
          opening_hours: '08:00',
          description:
            'Enim consectetur quasi dolores. Repellat minus sint omnis reprehenderit. Voluptas repellendus aut voluptas iusto similique omnis. Eligendi quis laboriosam adipisci rerum nemo saepe odio harum quia.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=14.666378775084677',
          viewCounts: 1,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-06-20T12:11:14.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 28,
        text: 'Dicta dolorem atque recusandae eveniet rerum quidem.',
        UserId: 1,
        RestaurantId: 28,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 28,
          name: 'Rupert Funk',
          tel: '1-912-257-4926 x148',
          address: '01847 Lubowitz Curve',
          opening_hours: '08:00',
          description:
            'Sit odit tempore.\nQuisquam facere aperiam corrupti libero et ut.\nQuidem quidem corporis officiis quidem commodi aliquam fuga adipisci.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=75.17214091328148',
          viewCounts: 1,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-06-20T12:11:24.000Z',
          CategoryId: 2,
        },
      },
      {
        id: 30,
        text: 'Incidunt est maiores voluptatem sint blanditiis eligendi sint.',
        UserId: 1,
        RestaurantId: 30,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 30,
          name: 'Wyatt Maggio',
          tel: '076-093-9479',
          address: '8628 Botsford Garden',
          opening_hours: '08:00',
          description:
            'Voluptatem voluptatem illum quod dolorem alias repellendus modi dolores. Non qui voluptas sunt praesentium. Eligendi expedita quae. Provident sed aut nam eos dignissimos.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=62.31411189273619',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 31,
        text: 'Nulla ad nihil hic praesentium impedit unde.',
        UserId: 1,
        RestaurantId: 31,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 31,
          name: 'Chadrick Dickens',
          tel: '1-050-475-7015',
          address: '590 Paul Wells',
          opening_hours: '08:00',
          description: 'amet',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=55.720348665264005',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 32,
        text: 'Ducimus minus asperiores delectus rem illo quasi.',
        UserId: 1,
        RestaurantId: 32,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 32,
          name: 'Pedro Carter',
          tel: '1-851-583-9952',
          address: '10168 Freda Village',
          opening_hours: '08:00',
          description: 'enim fuga harum',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=70.15679994507582',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 36,
        text: 'Dicta praesentium vero.',
        UserId: 1,
        RestaurantId: 36,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 36,
          name: 'Santos Boyer',
          tel: '1-717-120-7465 x8700',
          address: '672 Ward Crest',
          opening_hours: '08:00',
          description:
            'Et totam et dignissimos est consequatur tenetur. Molestiae tempora aut. Nostrum aliquid qui voluptas. Voluptatem et repudiandae quibusdam excepturi magni illo inventore. Illo veritatis occaecati. Adipisci vero maxime tempore.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=70.76118223213477',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 2,
        },
      },
      {
        id: 41,
        text: 'Dicta dolor temporibus.',
        UserId: 1,
        RestaurantId: 41,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 41,
          name: 'Merlin Bednar',
          tel: '501.423.3243 x38704',
          address: '9885 Chelsie Rest',
          opening_hours: '08:00',
          description: 'vel',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=65.36671251477443',
          viewCounts: 1,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-06-21T11:42:57.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 42,
        text: 'Nisi quod iure et aut.',
        UserId: 1,
        RestaurantId: 42,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 42,
          name: 'Miguel Reynolds',
          tel: '1-947-459-1991',
          address: '1805 Boehm Pines',
          opening_hours: '08:00',
          description: 'repellat',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=15.744870749346273',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 46,
        text: 'Sit non ipsa molestiae sed voluptas nobis est aut.',
        UserId: 1,
        RestaurantId: 46,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 46,
          name: 'Peyton Kris',
          tel: '(791) 475-7815 x090',
          address: '571 Herzog Fort',
          opening_hours: '08:00',
          description: 'consectetur cupiditate corporis',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=73.88235510224528',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 47,
        text: 'Recusandae labore nihil nesciunt quo.',
        UserId: 1,
        RestaurantId: 47,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 47,
          name: 'Damon Hills',
          tel: '263.655.4368 x2431',
          address: '315 Dexter Trail',
          opening_hours: '08:00',
          description:
            'Quo quos quibusdam est earum.\nOdio et provident praesentium in aut.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=83.04917751090251',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 59,
        text: 'Autem dolores cum aut.',
        UserId: 1,
        RestaurantId: 9,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 9,
          name: 'Cecile Schaden',
          tel: '1-132-261-4174',
          address: '768 Boyle Canyon',
          opening_hours: '08:00',
          description:
            'Et distinctio commodi reprehenderit omnis. Maxime dolorem qui laboriosam impedit qui reiciendis adipisci modi iure. Recusandae quam nulla sequi fuga quo dolor saepe vitae dolor. Vel aut perferendis sed dolorem. Iste non consequuntur quos ut autem doloremque voluptatem.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=39.152519630246154',
          viewCounts: 2,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-28T16:31:23.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 65,
        text: 'Modi aut voluptatem quam.',
        UserId: 1,
        RestaurantId: 15,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 15,
          name: 'Yadira Prohaska',
          tel: '1-347-390-1996',
          address: '60365 Funk Squares',
          opening_hours: '08:00',
          description:
            'Mollitia dolor molestiae ea. Aspernatur sint dignissimos qui ipsa. Porro sit soluta dignissimos placeat. Eius dolore ex consequatur cumque. Saepe illo quia eveniet sed. Vero doloribus voluptatem enim sequi quia non reiciendis.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=94.40706825623026',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 66,
        text: 'Ut repudiandae ipsum harum tempore dicta voluptatibus dolor.',
        UserId: 1,
        RestaurantId: 16,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 16,
          name: 'Preston Terry',
          tel: '690-158-9300',
          address: '9410 McKenzie Spur',
          opening_hours: '08:00',
          description: 'unde',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=72.83894629155955',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 69,
        text: 'Quidem id aut voluptatem quia ipsum.',
        UserId: 1,
        RestaurantId: 19,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 19,
          name: 'Jocelyn Schmeler',
          tel: '191.390.3339 x38458',
          address: '93275 Crooks Ports',
          opening_hours: '08:00',
          description:
            'Nostrum ut assumenda qui praesentium vero itaque tempore cumque. Vitae voluptates voluptas doloribus minima et enim alias odio odit. Sit sint suscipit consectetur.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=50.25480575800692',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 74,
        text:
          'Atque ipsa aut et provident accusantium id voluptate magnam est.',
        UserId: 1,
        RestaurantId: 24,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 24,
          name: 'Ludwig Pouros',
          tel: '(170) 707-5090 x0867',
          address: '518 Greenholt Viaduct',
          opening_hours: '08:00',
          description:
            'Nihil voluptate aut. Molestias voluptatibus reprehenderit ex quisquam. Enim ad doloribus. Voluptas a dolorem omnis sint. Maiores quia dolor ea.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=64.05875201807739',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 2,
        },
      },
      {
        id: 75,
        text: 'Harum iusto laborum cum velit.',
        UserId: 1,
        RestaurantId: 25,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 25,
          name: 'Alaina Graham',
          tel: '246-341-5275 x9966',
          address: '59159 Luettgen Stravenue',
          opening_hours: '08:00',
          description:
            'Vitae occaecati consequatur quam omnis quis. Laborum est ullam corporis fuga tempora. Laudantium dicta quis voluptatem reprehenderit eos libero vero. Vel dolorem ullam aut iure qui ab quis consectetur. Rerum perspiciatis illo.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=6.262011046505567',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 79,
        text: 'Nulla ut ut quo adipisci.',
        UserId: 1,
        RestaurantId: 29,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 29,
          name: 'Mrs. Collin Carroll',
          tel: '657-166-3656',
          address: '89858 Rogahn Parkway',
          opening_hours: '08:00',
          description: 'sit',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=67.73711641187701',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 84,
        text: 'Reiciendis suscipit laboriosam.',
        UserId: 1,
        RestaurantId: 34,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 34,
          name: 'Christina Wilderman',
          tel: '994-533-6732 x683',
          address: '781 Manuel Corner',
          opening_hours: '08:00',
          description: 'corrupti',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=17.92886995776586',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 86,
        text:
          'Soluta qui sit voluptatem temporibus et cupiditate necessitatibus alias.',
        UserId: 1,
        RestaurantId: 36,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 36,
          name: 'Santos Boyer',
          tel: '1-717-120-7465 x8700',
          address: '672 Ward Crest',
          opening_hours: '08:00',
          description:
            'Et totam et dignissimos est consequatur tenetur. Molestiae tempora aut. Nostrum aliquid qui voluptas. Voluptatem et repudiandae quibusdam excepturi magni illo inventore. Illo veritatis occaecati. Adipisci vero maxime tempore.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=70.76118223213477',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 2,
        },
      },
      {
        id: 87,
        text: 'Beatae omnis repellat ut illo fuga quod perferendis ut.',
        UserId: 1,
        RestaurantId: 37,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 37,
          name: 'Ms. Lesley VonRueden',
          tel: '1-970-570-3548 x164',
          address: '12326 Adolphus Ways',
          opening_hours: '08:00',
          description:
            'Iste rerum inventore accusantium odio dolor sunt repellendus mollitia saepe.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=35.528833224491784',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 89,
        text: 'Impedit voluptates quia cum cumque.',
        UserId: 1,
        RestaurantId: 39,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 39,
          name: 'Francisco Welch',
          tel: '559-037-3903 x264',
          address: '8551 Milford Manor',
          opening_hours: '08:00',
          description: 'cupiditate minima voluptatibus',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=63.78881920944735',
          viewCounts: 1,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-06-20T12:11:08.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 94,
        text: 'Fugit eos inventore non voluptatem libero molestias.',
        UserId: 1,
        RestaurantId: 44,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 44,
          name: 'Kaia Bechtelar',
          tel: '053-919-6662 x16712',
          address: '6966 Barney Shoals',
          opening_hours: '08:00',
          description:
            'Expedita praesentium facere qui error commodi architecto molestias. Magni quia libero aut et.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=98.72311605088555',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 96,
        text: 'Dolor iusto dolorem quisquam natus nihil perferendis sit magni.',
        UserId: 1,
        RestaurantId: 46,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 46,
          name: 'Peyton Kris',
          tel: '(791) 475-7815 x090',
          address: '571 Herzog Fort',
          opening_hours: '08:00',
          description: 'consectetur cupiditate corporis',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=73.88235510224528',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 98,
        text: 'Quis deleniti beatae ut distinctio iusto velit sequi fugit.',
        UserId: 1,
        RestaurantId: 48,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 48,
          name: 'Dr. Angelita Cassin',
          tel: '(934) 446-1520 x790',
          address: '6463 Dach Parkway',
          opening_hours: '08:00',
          description:
            'A perferendis doloremque quae alias officiis ea. Exercitationem animi molestias enim repudiandae facere voluptate dolore sunt eligendi. Itaque aliquam voluptatem commodi dolorem fugiat ut minima in consectetur. Facere aspernatur consequatur nam ipsum aliquam et quidem quis nihil.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=57.07047964964713',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 99,
        text: 'Sed sint aut ex ut vero ut doloremque.',
        UserId: 1,
        RestaurantId: 49,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 49,
          name: 'Nicklaus Brown',
          tel: '699.468.6852 x46694',
          address: '677 Kub Junction',
          opening_hours: '08:00',
          description:
            'Adipisci deleniti voluptatibus ut incidunt quod consequatur non nihil. Officiis exercitationem omnis tenetur quaerat placeat molestiae. Quam consequuntur sed unde ad voluptas odit quos. Quisquam rerum quos est et consequuntur.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=32.163308489265475',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 2,
        },
      },
      {
        id: 101,
        text: 'Eligendi et ut magni occaecati ipsum.',
        UserId: 1,
        RestaurantId: 1,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 1,
          name: 'Keely BogisichDa',
          tel: '119.568.4472 x714',
          address: '9991 Dorothy Canyon',
          opening_hours: '08:00',
          description:
            'Beatae et sit aut velit sed minus esse est est. Cupiditate quod ut impedit ipsa repudiandae dicta blanditiis dignissimos consequuntur. Illum minima explicabo animi nostrum recusandae voluptatum fugit. Sunt impedit praesentium atque. Itaque doloribus minima provident unde odit quod iste et.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=43.31238337743435',
          viewCounts: 31,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-06-21T15:41:41.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 102,
        text: 'Nostrum adipisci quia quia saepe quis quasi.',
        UserId: 1,
        RestaurantId: 2,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 2,
          name: 'Alexandrine McKenzie DVM',
          tel: '(266) 656-0345 x270',
          address: '0142 Smith Gateway',
          opening_hours: '08:00',
          description: 'voluptas',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=7.1615087469963035',
          viewCounts: 13,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-06-22T16:08:18.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 104,
        text: 'Voluptatum nihil explicabo consequatur.',
        UserId: 1,
        RestaurantId: 4,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 4,
          name: 'Vicenta Terry',
          tel: '(044) 422-4145 x30459',
          address: '19271 Ziemann Cape',
          opening_hours: '08:00',
          description:
            'Quia autem adipisci et rerum officia earum quidem dignissimos.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=69.23537063310978',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 106,
        text:
          'Aliquid in nam harum debitis aut dignissimos aut nihil eligendi.',
        UserId: 1,
        RestaurantId: 6,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 6,
          name: 'Miss Darrel Funk',
          tel: '1-174-686-9086 x8073',
          address: '11507 Weimann Place',
          opening_hours: '08:00',
          description: 'Veniam omnis in iste perferendis quod quia tempora.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=84.47709833016874',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 107,
        text: 'Ipsa quos sed nesciunt a.',
        UserId: 1,
        RestaurantId: 7,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 7,
          name: 'Frederic Grant',
          tel: '1-249-944-2682 x0629',
          address: '13538 Michel Rapid',
          opening_hours: '08:00',
          description:
            'Neque sunt et quia est.\nNatus nihil consequatur similique fuga illum.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=7.4017327223739215',
          viewCounts: 5,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-28T16:24:40.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 108,
        text: 'Culpa earum maiores non quidem.',
        UserId: 1,
        RestaurantId: 8,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 8,
          name: 'Dr. Ansley Johnston',
          tel: '294-480-0575',
          address: '1071 Idell Gardens',
          opening_hours: '08:00',
          description: 'eum',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=81.1442811444988',
          viewCounts: 4,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-28T16:30:48.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 116,
        text:
          'Est quod cupiditate facilis ut temporibus natus perferendis similique laudantium.',
        UserId: 1,
        RestaurantId: 16,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 16,
          name: 'Preston Terry',
          tel: '690-158-9300',
          address: '9410 McKenzie Spur',
          opening_hours: '08:00',
          description: 'unde',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=72.83894629155955',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 119,
        text: 'Amet doloribus maiores quia ea minima eum.',
        UserId: 1,
        RestaurantId: 19,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 19,
          name: 'Jocelyn Schmeler',
          tel: '191.390.3339 x38458',
          address: '93275 Crooks Ports',
          opening_hours: '08:00',
          description:
            'Nostrum ut assumenda qui praesentium vero itaque tempore cumque. Vitae voluptates voluptas doloribus minima et enim alias odio odit. Sit sint suscipit consectetur.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=50.25480575800692',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 124,
        text: 'Et aut quo ut velit.',
        UserId: 1,
        RestaurantId: 24,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 24,
          name: 'Ludwig Pouros',
          tel: '(170) 707-5090 x0867',
          address: '518 Greenholt Viaduct',
          opening_hours: '08:00',
          description:
            'Nihil voluptate aut. Molestias voluptatibus reprehenderit ex quisquam. Enim ad doloribus. Voluptas a dolorem omnis sint. Maiores quia dolor ea.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=64.05875201807739',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 2,
        },
      },
      {
        id: 125,
        text: 'Nihil nostrum sint neque facere id quaerat.',
        UserId: 1,
        RestaurantId: 25,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 25,
          name: 'Alaina Graham',
          tel: '246-341-5275 x9966',
          address: '59159 Luettgen Stravenue',
          opening_hours: '08:00',
          description:
            'Vitae occaecati consequatur quam omnis quis. Laborum est ullam corporis fuga tempora. Laudantium dicta quis voluptatem reprehenderit eos libero vero. Vel dolorem ullam aut iure qui ab quis consectetur. Rerum perspiciatis illo.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=6.262011046505567',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 126,
        text: 'Et sit similique totam unde velit.',
        UserId: 1,
        RestaurantId: 26,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 26,
          name: 'Pansy Bahringer',
          tel: '305-389-4179',
          address: '954 Willms Stravenue',
          opening_hours: '08:00',
          description:
            'Enim consectetur quasi dolores. Repellat minus sint omnis reprehenderit. Voluptas repellendus aut voluptas iusto similique omnis. Eligendi quis laboriosam adipisci rerum nemo saepe odio harum quia.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=14.666378775084677',
          viewCounts: 1,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-06-20T12:11:14.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 127,
        text: 'Reiciendis sequi rerum.',
        UserId: 1,
        RestaurantId: 27,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 27,
          name: 'Forest Bradtke',
          tel: '1-143-940-1327 x30947',
          address: '8449 Kessler Union',
          opening_hours: '08:00',
          description:
            'Repudiandae voluptates voluptatibus. Hic sit eum excepturi. Recusandae odit voluptatem doloribus illum id rerum. Voluptate nihil asperiores. Et sint quasi ut minus possimus dolor est illo. Quibusdam rerum qui voluptas possimus optio ab sit aut et.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=66.92696260309216',
          viewCounts: 1,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-06-20T12:11:06.000Z',
          CategoryId: 2,
        },
      },
      {
        id: 129,
        text: 'Deleniti voluptatem omnis magnam et dolor voluptates.',
        UserId: 1,
        RestaurantId: 29,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 29,
          name: 'Mrs. Collin Carroll',
          tel: '657-166-3656',
          address: '89858 Rogahn Parkway',
          opening_hours: '08:00',
          description: 'sit',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=67.73711641187701',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 131,
        text: 'Qui sit voluptas nihil ut ab alias.',
        UserId: 1,
        RestaurantId: 31,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 31,
          name: 'Chadrick Dickens',
          tel: '1-050-475-7015',
          address: '590 Paul Wells',
          opening_hours: '08:00',
          description: 'amet',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=55.720348665264005',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 134,
        text: 'Nemo corporis rem nihil velit.',
        UserId: 1,
        RestaurantId: 34,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 34,
          name: 'Christina Wilderman',
          tel: '994-533-6732 x683',
          address: '781 Manuel Corner',
          opening_hours: '08:00',
          description: 'corrupti',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=17.92886995776586',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 139,
        text: 'Sit autem totam amet velit similique sint.',
        UserId: 1,
        RestaurantId: 39,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 39,
          name: 'Francisco Welch',
          tel: '559-037-3903 x264',
          address: '8551 Milford Manor',
          opening_hours: '08:00',
          description: 'cupiditate minima voluptatibus',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=63.78881920944735',
          viewCounts: 1,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-06-20T12:11:08.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 141,
        text:
          'Architecto non rem est repellendus amet placeat asperiores repellat.',
        UserId: 1,
        RestaurantId: 41,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 41,
          name: 'Merlin Bednar',
          tel: '501.423.3243 x38704',
          address: '9885 Chelsie Rest',
          opening_hours: '08:00',
          description: 'vel',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=65.36671251477443',
          viewCounts: 1,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-06-21T11:42:57.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 149,
        text: 'Rerum ut non rem est sequi.',
        UserId: 1,
        RestaurantId: 49,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        Restaurant: {
          id: 49,
          name: 'Nicklaus Brown',
          tel: '699.468.6852 x46694',
          address: '677 Kub Junction',
          opening_hours: '08:00',
          description:
            'Adipisci deleniti voluptatibus ut incidunt quod consequatur non nihil. Officiis exercitationem omnis tenetur quaerat placeat molestiae. Quam consequuntur sed unde ad voluptas odit quos. Quisquam rerum quos est et consequuntur.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=32.163308489265475',
          viewCounts: 0,
          createdAt: '2021-05-17T05:11:05.000Z',
          updatedAt: '2021-05-17T05:11:05.000Z',
          CategoryId: 2,
        },
      },
    ],
    FavoritedRestaurants: [
      {
        id: 3,
        name: 'Aglae Gulgowski',
        tel: '114.568.9420 x031',
        address: '43362 Noel Turnpike',
        opening_hours: '08:00',
        description:
          'At commodi ut veritatis et velit est quis. Ut laudantium laudantium exercitationem ipsam molestiae corporis quasi maxime sequi. Possimus et perspiciatis qui et vel quod. Veniam totam asperiores fuga error rerum sit quasi. Architecto debitis rem minus dolore.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=79.91299846538044',
        viewCounts: 8,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-06-21T15:41:54.000Z',
        CategoryId: 4,
        Favorite: {
          UserId: 1,
          RestaurantId: 3,
          createdAt: '2021-05-27T15:40:21.000Z',
          updatedAt: '2021-05-27T15:40:21.000Z',
        },
      },
      {
        id: 13,
        name: 'Erna Cassin PhD',
        tel: '642-685-6113',
        address: '902 Maegan Inlet',
        opening_hours: '08:00',
        description: 'tenetur rerum magnam',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=75.12026971384928',
        viewCounts: 0,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        CategoryId: 1,
        Favorite: {
          UserId: 1,
          RestaurantId: 13,
          createdAt: '2021-05-30T07:56:36.000Z',
          updatedAt: '2021-05-30T07:56:36.000Z',
        },
      },
      {
        id: 6,
        name: 'Miss Darrel Funk',
        tel: '1-174-686-9086 x8073',
        address: '11507 Weimann Place',
        opening_hours: '08:00',
        description: 'Veniam omnis in iste perferendis quod quia tempora.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=84.47709833016874',
        viewCounts: 0,
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-17T05:11:05.000Z',
        CategoryId: 4,
        Favorite: {
          UserId: 1,
          RestaurantId: 6,
          createdAt: '2021-06-21T14:03:21.000Z',
          updatedAt: '2021-06-21T14:03:21.000Z',
        },
      },
    ],
    Followers: [
      {
        id: 11,
        name: 'Itadori Yuji',
        email: 'Da@example.com',
        password:
          '$2a$10$p7b9n0Gg1WNmrhTx.pQfhOtkCcynVowSDNM6BpMORotEz/d6.nA0K',
        isAdmin: false,
        image: 'https://i.imgur.com/pIHFJtM.png',
        createdAt: '2021-05-29T07:38:44.000Z',
        updatedAt: '2021-05-29T16:30:20.000Z',
        Followship: {
          followerId: 11,
          followingId: 1,
          createdAt: '2021-05-30T03:40:21.000Z',
          updatedAt: '2021-05-30T03:40:21.000Z',
        },
      },
      {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$XaxJSOdUg2/931GxMxcJpOWAB1wmUbW5WUwM1GohFh0SyfUxHNYKG',
        isAdmin: true,
        image: 'https://i.imgur.com/eVfTIsY.jpg',
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-29T16:22:50.000Z',
        Followship: {
          followerId: 1,
          followingId: 1,
          createdAt: '2021-06-15T02:38:29.000Z',
          updatedAt: '2021-06-15T02:38:29.000Z',
        },
      },
      {
        id: 31,
        name: '12',
        email: '123@123',
        password:
          '$2a$10$P4OM.30O29Gnh3D3fh0d2eD53LCDBO.24hurukOU/sRqgmJAS53TG',
        isAdmin: false,
        image: null,
        createdAt: '2021-06-17T07:15:33.000Z',
        updatedAt: '2021-06-17T07:15:33.000Z',
        Followship: {
          followerId: 31,
          followingId: 1,
          createdAt: '2021-06-19T16:11:37.000Z',
          updatedAt: '2021-06-19T16:11:37.000Z',
        },
      },
    ],
    Followings: [
      {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$XaxJSOdUg2/931GxMxcJpOWAB1wmUbW5WUwM1GohFh0SyfUxHNYKG',
        isAdmin: true,
        image: 'https://i.imgur.com/eVfTIsY.jpg',
        createdAt: '2021-05-17T05:11:05.000Z',
        updatedAt: '2021-05-29T16:22:50.000Z',
        Followship: {
          followerId: 1,
          followingId: 1,
          createdAt: '2021-06-15T02:38:29.000Z',
          updatedAt: '2021-06-15T02:38:29.000Z',
        },
      },
      {
        id: 11,
        name: 'Itadori Yuji',
        email: 'Da@example.com',
        password:
          '$2a$10$p7b9n0Gg1WNmrhTx.pQfhOtkCcynVowSDNM6BpMORotEz/d6.nA0K',
        isAdmin: false,
        image: 'https://i.imgur.com/pIHFJtM.png',
        createdAt: '2021-05-29T07:38:44.000Z',
        updatedAt: '2021-05-29T16:30:20.000Z',
        Followship: {
          followerId: 1,
          followingId: 11,
          createdAt: '2021-06-22T13:54:27.000Z',
          updatedAt: '2021-06-22T13:54:27.000Z',
        },
      },
    ],
  },
  isFollowed: true,
};
export default {
  data() {
    return {
      profile: {
        name: '',
        image: '',
      },
    };
  },
  methods: {
    fetchUser(userId) {
      console.log(userId);
      const { profile } = dummyData;
      const { name, image } = profile;
      this.profile = {
        ...this.profile,
        name,
        image,
      };
    },
    handleFileChange(e) {
      const { files } = e.target;
      console.log(files);

      if (files.length === 0) {
        this.profile.image = '';
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.profile.image = imageURL;
      }
    },
    handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);
      for (let [name, value] of formData.entries()) {
        console.log(name+': '+ value);
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
};
</script>
