import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export default [
  {
    name: "Happiness",
    quote:
      "“Happinness is not something ready made, it comes from your own actions.”  - Dalai Lama",
    topicImage: require("../assets/topics_happiness.png"),
    topicDetailsImage: require("../assets/sun.png"),
    exercises: [
      {
        id: uuidv4(),
        favorite: false,
        cardImage: require("../assets/flower.png"),
        time: "5",
        topicName: "Happiness",
        brief: {
          title: "Breather",
          body: "A 5 min intro to meditation, relax and inhale to start."
        },
        details: {
          title: "Breather",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          detailsImage: require("../assets/pablo-coffee.png"),
          exercisesDone: [
            {
              id: uuidv4(),
              date: "Date: 19/02/2021",
              content: "Something I've written...",
              name: "Breather"
            }
          ]
        },
        pratice: {
          title: "Breather",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium?"
        }
      }
    ]
  },
  {
    name: "Relax",
    quote:
      "“Your mind will answer most questions if you learn to relax and wait.”  - William S. Burroughs",
    topicImage: require("../assets/topics_relax.png"),
    topicDetailsImage: require("../assets/relax_bg.png"),
    exercises: [
      {
        id: uuidv4(),
        favorite: false,
        cardImage: require("../assets/flower.png"),
        time: "5",
        topicName: "Relax",
        brief: {
          title: "Breather",
          body: "A 5 min intro to meditation, relax and inhale to start."
        },
        details: {
          title: "Breather",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          detailsImage: require("../assets/pablo-coffee.png"),
          exercisesDone: [
            {
              id: uuidv4(),
              date: "Date: 19/02/2021",
              content: "Something I've written...",
              name: "Breather"
            }
          ]
        },
        pratice: {
          title: "Breather",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium?"
        }
      }
    ]
  },
  {
    name: "Work Balance",
    quote:
      "“There's virtue in work and there's virtue in resting. Use both and overlook neither.”  - Alan Cohen",
    topicImage: require("../assets/topics_work.png"),
    topicDetailsImage: require("../assets/balance.png"),
    exercises: [
      {
        id: uuidv4(),
        favorite: false,
        cardImage: require("../assets/flower.png"),
        time: "5",
        topicName: "Work Balance",
        brief: {
          title: "Breather",
          body: "A 5 min intro to meditation, relax and inhale to start."
        },
        details: {
          title: "Breather",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          detailsImage: require("../assets/pablo-coffee.png"),
          exercisesDone: [
            {
              id: uuidv4(),
              date: "Date: 19/02/2021",
              content: "Something I've written...",
              name: "Breather"
            }
          ]
        },
        pratice: {
          title: "Breather",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium?"
        }
      }
    ]
  },
  {
    name: "Problem Solving",
    quote:
      "“Most people spend more time and energy going around problems than in trying to solve them.”  - Henry Ford",
    topicImage: require("../assets/topics_problem.png"),
    topicDetailsImage: require("../assets/lamp.png"),
    exercises: [
      {
        id: uuidv4(),
        favorite: false,
        cardImage: require("../assets/flower.png"),
        time: "5",
        topicName: "Problem Solving",
        brief: {
          title: "Breather",
          body: "A 5 min intro to meditation, relax and inhale to start."
        },
        details: {
          title: "Breather",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          detailsImage: require("../assets/pablo-coffee.png"),
          exercisesDone: [
            {
              id: uuidv4(),
              date: "Date: 19/02/2021",
              content: "Something I've written...",
              name: "Breather"
            }
          ]
        },
        pratice: {
          title: "Breather",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium?"
        }
      }
    ]
  }
];
