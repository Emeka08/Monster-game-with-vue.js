new Vue({
  el: "#app",
  data: {
    name: "Emeka",
    life1: 100,
    life2: 100,
  },
  methods: {
    randomNumber() {
      let randomNum = Math.round(Math.random() * 10) + 10;
      return randomNum;
    },
    punch() {
      setTimeout(() => {
        this.life2 -= this.randomNumber();
        if (this.life2 < 1) {
          this.life2 = 0;
          setTimeout(() => alert("Monster Loss"), 500);
          setTimeout(() => {
            this.life1 = 100;
            this.life2 = 100;
          }, 1000);
        }
        console.log("Monster Punch" + " " + this.randomNumber());
        console.log("Monster Life" + " " + this.life2);
      }, 0);
      this.life1 -= this.randomNumber();
      if (this.life1 < 1) {
        this.life1 = 0;
        setTimeout(() => alert("User Loss"), 500);
        setTimeout(() => {
          this.life1 = 100;
          this.life2 = 100;
        }, 1000);
      }
      console.log("User Life" + " " + this.life1);
      console.log("User Punch" + " " + this.randomNumber());
    },
  },
});
