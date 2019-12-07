const app = new Vue({
  el: "#app",
  data: {
    editFriend: null,
    friends: []
  },
  methods: {
    updateFriend(friend) {
      fetch("http://rest.learncode.academy/api/vue-5/friends/" + friend.id, {
        body: JSON.stringify(friend),
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(() => {
        this.editFriend = null;
      });
    },
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
    <div v-if="editFriend === friend.id">
      <input v-on:keyup.13="updateFriend(friend)" v-model="friend.name" />
      <button v-on:click="updateFriend(friend)">save</button>
    </div>
    <div v-else>
      <button v-on:click="editFriend = friend.id">edit</button>
      <button v-on:click="deleteFriend(friend.id, i)">x</button>
      {{friend.name}}
    </div>
  </li>
</div>
    `
});
