<template>
  <div id="allList">
    <b-form-input v-model="keyword" class="mb-3" placeholder="イベントを検索"></b-form-input>
    <b-card-group>
    <div v-for="event in filterdEvents" :key="event.index">
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
  name: 'allList',
  data () {
    return {
      events: [],
      keyword: null
    }
  },
  mounted () {
    axios
      .get('https://raw.githubusercontent.com/jigjp/intern_exam/master/fukui_event.json')
      .then(response => (this.events = response.data))
      .catch(error => console.log(error))
  },
  computed: {
    filterdEvents () {
      let events = []
      for (let i = 0; i < this.events.length; i++) {
        if (this.keyword === null ||
              this.events[i].event_name.indexOf(this.keyword) !== -1 ||
              this.events[i].description.indexOf(this.keyword) !== -1 ||
              this.events[i].category.indexOf(this.keyword) !== -1 ||
              this.events[i].contact.indexOf(this.keyword) !== -1 ||
              this.events[i].event_place.indexOf(this.keyword) !== -1) {
          events.push(this.events[i])
        }
      }
      return events
    }
  }
}
</script>

<style scoped>
</style>
