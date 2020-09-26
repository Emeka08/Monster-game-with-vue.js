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
    timer() {
      setTimeout(() => {
        this.life1 = 100;
        this.life2 = 100;
      }, 500);
    },
    punch() {
      // ! display 0 instead of minus sign on the screen
      this.life2 -= this.randomNumber();
      setTimeout(() => {
        this.life1 -= this.randomNumber();
      }, 300);
      setTimeout(() => {
        if (this.life1 < 1 && this.life2 < 1) {
          alert("draw!!!");
          this.timer();
        } else if (this.life2 < 1) {
          this.life2 = 0;
          setTimeout(() => alert("Monster Loss"), 500);
          this.timer();
        } else if (this.life1 < 1) {
          this.life1 = 0;
          setTimeout(() => alert("User Loss"), 500);
          this.timer();
        }
        console.log("Monster Punch" + " " + this.randomNumber());
        console.log("User Punch" + " " + this.randomNumber());
      }, 400);
    },
  },
});
