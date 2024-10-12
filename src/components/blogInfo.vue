<template>
  <h1 class="font-moonspace-special">
    WELCOME TO MY BLOG
  </h1>
  <BlogContents
    v-for="(blogData, index) in APIBlogData"
    :key="index"
    :title="blogData.title"
    :link="blogData.link"
    :img="blogData.img"
    :status="blogData.status"
    :hasImage="blogData.hasImage"
    class="control"
  ></BlogContents>
</template>

<script>
import axios from 'axios';
import BlogContents from '@/components/blogcontent.vue';

export default {
  components: {
    BlogContents,
  },

  data() {
    return {
      dummyData: [
        {
          link: 'https://www.amazon.com/Starts-Us-Novel-Ends/dp/1668001225/ref=zg_d_sccl_2/146-7527954-4726056?pd_rd_w=wQcyO&content-id=amzn1.sym.193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_p=193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_r=ATJMHNSTR983953V28SV&pd_rd_wg=UbIbU&pd_rd_r=5ea9fce9-93bc-43ec-abc7-e3ce1fca646c&pd_rd_i=1668001225&psc=1',
          title: 'book 1',
          // Verify the paths used in require
          img: require('../assets/Blog/book1.jpg'),
          hasImage: 'True',
        },

        //book2
        {
          link: 'https://www.amazon.com/God-Woods-Novel-Liz-Moore/dp/0593418913/ref=zg_d_sccl_2/146-7527954-4726056?pd_rd_w=wQcyO&content-id=amzn1.sym.193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_p=193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_r=ATJMHNSTR983953V28SV&pd_rd_wg=UbIbU&pd_rd_r=5ea9fce9-93bc-43ec-abc7-e3ce1fca646c&pd_rd_i=0593418913&psc=1',
          title: 'book 2',
          img: require('../assets/Blog/book2.jpg'),
          hasImage: 'True',
        },

        //book3
        {
          link: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299/ref=zg_d_sccl_2/146-7527954-4726056?pd_rd_w=wQcyO&content-id=amzn1.sym.193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_p=193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_r=ATJMHNSTR983953V28SV&pd_rd_wg=UbIbU&pd_rd_r=5ea9fce9-93bc-43ec-abc7-e3ce1fca646c&pd_rd_i=0735211299&psc=1',
          title: 'book 3',
          img: require('../assets/Blog/book3.jpg'),
          hasImage: 'True',
        },

        //book4
        {
          link: 'https://www.amazon.com/Tell-Me-Everything-Elizabeth-Strout/dp/0593446097/ref=zg_d_sccl_2/146-7527954-4726056?pd_rd_w=wQcyO&content-id=amzn1.sym.193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_p=193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_r=ATJMHNSTR983953V28SV&pd_rd_wg=UbIbU&pd_rd_r=5ea9fce9-93bc-43ec-abc7-e3ce1fca646c&pd_rd_i=0593446097&psc=1',
          title: 'book 4',
          img: require('../assets/Blog/book4.jpg'),
          hasImage: 'True',
        },

        //book5
        {
          link: 'https://www.amazon.com/Good-Energy-Surprising-Connection-Metabolism/dp/0593712641/ref=zg_d_sccl_2/146-7527954-4726056?pd_rd_w=wQcyO&content-id=amzn1.sym.193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_p=193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_r=ATJMHNSTR983953V28SV&pd_rd_wg=UbIbU&pd_rd_r=5ea9fce9-93bc-43ec-abc7-e3ce1fca646c&pd_rd_i=0593712641&psc=1',
          title: 'book 5',
          img: require('../assets/Blog/book5.jpg'),
          hasImage: 'True',
        },

        //book6
        {
          link: 'https://www.amazon.com/Starts-Us-Novel-Ends/dp/1668001225/ref=zg_d_sccl_2/146-7527954-4726056?pd_rd_w=wQcyO&content-id=amzn1.sym.193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_p=193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_r=ATJMHNSTR983953V28SV&pd_rd_wg=UbIbU&pd_rd_r=5ea9fce9-93bc-43ec-abc7-e3ce1fca646c&pd_rd_i=1668001225&psc=1',
          title: 'book 6',
          img: require('../assets/Blog/book6.jpg'),
          hasImage: 'True',
        },

        //book7
        {
          link: 'https://www.amazon.com/Mom-Want-Hear-Your-Story/dp/1081439793/ref=zg_d_sccl_2/146-7527954-4726056?pd_rd_w=wQcyO&content-id=amzn1.sym.193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_p=193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_r=ATJMHNSTR983953V28SV&pd_rd_wg=UbIbU&pd_rd_r=5ea9fce9-93bc-43ec-abc7-e3ce1fca646c&pd_rd_i=1081439793&psc=1',
          title: 'book 7',
          img: require('../assets/Blog/book7.jpg'),
          hasImage: 'True',
        },

        //book8
        {
          link: 'https://www.amazon.com/Used-Like-You-Until-Thinking/dp/1668067277/ref=zg_d_sccl_2/146-7527954-4726056?pd_rd_w=wQcyO&content-id=amzn1.sym.193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_p=193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_r=ATJMHNSTR983953V28SV&pd_rd_wg=UbIbU&pd_rd_r=5ea9fce9-93bc-43ec-abc7-e3ce1fca646c&pd_rd_i=1668067277&psc=1',
          title: 'book 8',
          //Verify the paths used in require
          img: require('../assets/Blog/book8.jpg'),
          hasImage: 'True',
        },
      ],
      APIBlogData: [],
    };
  },

  methods: {},

  async created() {
    //Call API to get data
    // const response = await axios.get("/v1/courses");
    const response = await axios.get('v1/courses');
    const course = response.data;
    this.APIBlogData = course;
    //Merging Data: When the API data is received, the static array and the API data are merged using the spread operator [...this.staticArray, ...data], ensuring that the static array elements are included first, followed by the API data elements.
    this.APIBlogData = [...this.dummyData, ...course];
    console.log('APIBlogData', this.APIBlogData);
  },
};
</script>
