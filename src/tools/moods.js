import HappyMood from "../assets/happy.png";
import SurpriseMeMood from "../assets/surprise-me.png";
import NotMyDayMood from "../assets/notmyday.png";

const moods = [
  {
    mood: "Happy",
    key: 1,
    id: "happy",
    color: "#109b55",
    img: HappyMood,
    prev: "prev",
    next: "next",
    isMood: true,
  },
  {
    mood: "Surprise Me",
    key: 2,
    id: "surpriseme",
    color: "#f48267",
    img: SurpriseMeMood,
    prev: "prev",
    next: "next",
    isMood: true,
  },
  {
    mood: "Not My Day",
    key: 3,
    id: "notmyday",
    color: "#8d89ff",
    img: NotMyDayMood,
    prev: "prev",
    next: "next",
    isMood: true,
  },
  {
    mood: "Filter",
    key: 4,
    id: "filter",
    color: "#FFBEB9",
    img: "",
    prev: "prev",
    next: "next",
    isMood: false,
  },
  {
    mood: "Favorites",
    key: 5,
    id: "filter",
    color: "#FFBEB9",
    img: "",
    prev: "prev",
    next: "next",
    isMood: false,
  },
];

export default moods;
