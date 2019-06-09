<template>
  <div id="eachList">
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <a @click="first" class="page-link" href="#">&laquo;</a>
        </li>
        <li class="page-item">
          <a @click="prev" class="page-link" href="#">&lt;</a>
        </li>
        <li
          v-for="i in displayPageRange" :key="i"
          class="page-item"
          :class="{active: i-1 === currentPage}">
          <a @click="pageSelect(i)" class="page-link" href="#">{{ i }}</a>
        </li>
        <li class="page-item">
          <a @click="next" class="page-link" href="#">&gt;</a>
        </li>
        <li class="page-item">
          <a @click="last" class="page-link" href="#">&raquo;</a>
        </li>
      </ul>
    </nav>
    <div v-for="event in displayEvents" :key="event.index">
      <b-card-group>
        <b-card bg-variant="light" v-bind:header="event.event_name" class="mb-3 center">
          <b-card-text class="text-left">{{ event.description }}<br><br>
            日時: {{ event.start_date }} ～ {{ event.end_date }}<br>
            <span class="text-left" v-if="event.event_place_url != ''">場所: <a v-bind:href="event.event_place_url">{{ event.event_place }}</a></span>
            <span class="text-left" v-else>場所: {{ event.event_place }}</span><br>
            住所: {{ event.address }}<br>
            申し込み: {{ event.contact }}<br>
            電話:{{ event.contact_phone_number }}<br>
            <span v-if="event.mail_address != ''">メールアドレス: {{ event.mail_address }}<br></span>
            <span v-if="event.transportation != ''">交通アクセス: {{ event.transportation }}</span>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'eachList',
  created: function () {
    this.getSize(this.$route.params.each)
  },
  data () {
    return {
      currentPage: 0,
      size: null,
      pageRange: 10,
      events: []
    }
  },
  mounted () {
    axios
      .get('https://raw.githubusercontent.com/jigjp/intern_exam/master/fukui_event.json')
      .then(response => (this.events = response.data))
      .catch(error => (console.log(error)))
  },
  watch: {
    $route: function (to, from) {
      this.getSize(to.params.each)
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.events.length / this.size)
    },
    displayPageRange () {
      const half = Math.ceil(this.pageRange / 2)
      let start, end

      if (this.pages < this.pageRange) {
        start = 1
        end = this.pages
      } else if (this.currentPage < half) {
        start = 1
        end = start + this.pageRange - 1
      } else if (this.pages - half < this.currentPage) {
        end = this.pages
        start = end - this.pageRange + 1
      } else {
        start = this.currentPage - half + 1
        end = this.currentPage + half
      }

      let indexes = []
      for (let i = start; i <= end; i++) {
        indexes.push(i)
      }
      return indexes
    },
    displayEvents () {
      const head = this.currentPage * this.size
      return this.events.slice(head, head + this.size)
    }
  },
  methods: {
    first () {
      this.currentPage = 0
    },
    last () {
      this.currentPage = this.pages - 1
    },
    prev () {
      if (this.currentPage > 0) {
        this.currentPage--
      }
    },
    next () {
      if (this.currentPage < this.pages - 1) {
        this.currentPage++
      }
    },
    pageSelect (index) {
      this.currentPage = index - 1
    },
    getSize (size) {
      this.size = size
    }
  }
}
</script>

<style scoped>
</style>
