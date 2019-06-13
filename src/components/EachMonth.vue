<template>
  <div id="eachmonth">
    <b-container class="mb-5">
      <b-row>
        <div v-for="i in 12" :key="i" class="mx-auto">
          <b-button class="mr-2" @click="setDisplayMonth(i)" :variant="[activeMonth(i) ? 'success' : null]">{{ i }}月</b-button>
        </div>
      </b-row>
    </b-container>
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
  name: 'eachmonth',
  data () {
    return {
      events: [],
      displayMonth: '1'
    }
  },
  mounted () {
    axios
      .get('https://raw.githubusercontent.com/jigjp/intern_exam/master/fukui_event.json')
      .then(response => (this.events = response.data))
      .catch(error => (console.log(error)))
  },
  computed: {
    startmonths () {
      var months = []
      for (var i = 0; i < this.events.length; i++) {
        months.push(this.events[i].start_date.split('/')[1])
      }
      return months
    },
    endmonths () {
      var months = []
      for (var i = 0; i < this.events.length; i++) {
        months.push(this.events[i].end_date.split('/')[1])
      }
      return months
    },
    displayEvents () {
      let events = []
      for (let i = 0; i < this.events.length; i++) {
        if (this.startmonths[i] === this.displayMonth || this.endmonths[i] === this.displayMonth) {
          events.push(this.events[i])
        }
      }
      return events
    }
  },
  methods: {
    setDisplayMonth: function (month) {
      this.displayMonth = month.toString()
    },
    activeMonth: function (month) {
      if (this.displayMonth === month.toString()) return true
      else return false
    }
  }
}
</script>

<style scoped>
</style>
