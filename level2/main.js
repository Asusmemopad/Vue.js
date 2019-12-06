const app = new Vue({
  el: "#app",
  data: {
    friends: []
  },
  methods: {
    deleteFriend(id) {
      fetch("http://rest.learncode.academy/api/someuser/friends/" + id, {
        method: "DELETE"
      }).then(() => {
        console.log("deleted");
      });
    }
  },
  mounted() {
    fetch("http://rest.learncode.academy/api/someuser/friends")
      .then(response => response.json())
      .then(data => {
        this.friends = data;
      });
  },
  template: `
        <div>
            <li v-for="friend in friends">
              <button v-on:click="deleteFriend(friend.id)">x</button>{{friend.name}}
            </li> 
        </div>
    `
});
