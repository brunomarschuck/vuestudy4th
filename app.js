const app = Vue.createApp({
  data() {
    return {
      showSongs: true,
      songs: [
        {
          title: "사건의 지평선",
          singer: "윤하",
          img: "assets/1.jpg",
          isFav: false
        },
        {
          title: "After Like",
          singer: "IVE(아이브)",
          img: "assets/2.jpg",
          isFav: false
        },
        {
          title: "Nxde",
          singer: "(여자)아이들",
          img: "assets/3.jpg",
          isFav: true
        },
        {
          title: "ANTIFRAGILE",
          singer: "LE SSERAFIM(르세라핌)",
          img: "assets/4.jpg",
          isFav: false
        },
        {
          title: "Hype boy",
          singer: "NewJeans",
          img: "assets/5.jpg",
          isFav: false
        }
      ],
      기다리는중: false,
      answer: "",
      image: ""
    }
  },
  methods: {
    toggleFav(song) {
      song.isFav = !song.isFav
    },
    toggleShowSongs() {
      this.showSongs = !this.showSongs
    },
    askAnswer() {
      this.기다리는중 = true
      axios.get("https://yesno.wtf/api").then((response) => {
        setTimeout(() => (this.기다리는중 = false), 1300)
        this.answer = response.data.answer
        this.image = response.data.image
      })
    }
  }
}).mount("#app")
