var vue1 = new Vue({
  el: "#demo",

  data: {
    sortKey: "",

    reverse: false,

    search: "",

    gender: "all",

    columns: ['name', 'age', 'gender'],

    people: [
      {name: "John", age: 50, gender: "male"},
      {name: "Jane", age: 22, gender: "female"},
      {name: "Paul", age: 34, gender: "male"},
      {name: "Kate", age: 15, gender: "female"},
      {name: "Amanda", age: 65, gender: "female"},
      {name: "Steve", age: 38, gender: "male"},
      {name: "Keith", age: 21, gender: "female"},
      {name: "Don", age: 50, gender: "male"},
      {name: "Susan", age: 50, gender: "female"}
    ]
  },

  filters: {
    gender: function(people) {
      if (this.gender == "all") {
        return people;
      }

      return people.filter(function(person) {
        return person.gender == this.gender;
      }.bind(this));
    }
  },

  methods: {
    sortBy: function(sortKey) {
      this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
      this.sortKey = sortKey;
    }
  }
});