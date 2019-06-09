<template>
  <div id="category">
    <b-container class="mb-5">
      <b-row>
        <div v-for="category in categories" :key="category">
          <b-button class="mr-2" @click="setDisplayCategory(category)" :variant="[activeCategory(category) ? 'success' : null]">{{ category }}</b-button>
        </div>
      </b-row>
    </b-container>
    <b-card-group columns>
      <div v-for="event in displayEvents" :key="event.index">
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
      </div>
    </b-card-group>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'category',
  data () {
    return {
      events: [],
      displayCategory: '歴史'
    }
  },
  mounted () {
    axios
      .get('https://raw.githubusercontent.com/jigjp/intern_exam/master/fukui_event.json')
      .then(response => (this.events = response.data))
      .catch(error => (console.log(error)))
  },
  computed: {
    categories () {
      var values = []
      var events = this.events.filter(e => {
        if (values.indexOf(e['category']) === -1) {
          values.push(e['category'])
          return e
        }
      })
      var categories = []
      for (let i = 0; i < events.length; i++) {
        categories.push(events[i].category)
      }
      return categories
    },
    displayEvents () {
      let events = []
      for (let i = 0; i < this.events.length; i++) {
        if (this.events[i].category === this.displayCategory) {
          events.push(this.events[i])
        }
      }
      return events
    }
  },
  methods: {
    setDisplayCategory: function (category) {
      this.displayCategory = category
    },
    activeCategory: function (category) {
      if (this.displayCategory === category) return true
      else return false
    }
  }
}
</script>

<style scoped>
</style>
