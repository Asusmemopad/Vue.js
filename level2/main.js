const app = new Vue({
  el: "#app",
  data: {
    friends: []
  },
  methods: {
    deleteFriend(id, i) {
      fetch("http://rest.learncode.academy/api/someuser/friends/" + id, {
        method: "DELETE"
      }).then(() => {
        this.friends.splice(i, 1);
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
            <li v-for="friend, i in friends">
              <button v-on:click="deleteFriend(friend.id, i)">x</button>{{friend.name}}
            </li> 
        </div>
    `
});
