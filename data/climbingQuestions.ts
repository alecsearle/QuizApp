export interface QuizQuestion {
  id: number;
  image: string;
  question: string;
  correctAnswer: boolean;
  explanation: string;
}

export const climbingQuestions: QuizQuestion[] = [
  {
    id: 1,
    image: "../assets/images/figure8.jpeg",
    question: "A figure-8 knot is the most commonly used knot for tying into a climbing rope.",
    correctAnswer: true,
    explanation: "The figure-8 follow-through is indeed the most common and trusted knot for tying into a climbing rope.",
  },
  {
    id: 2,
    image: "../assets/images/bouldering.jpg",
    question: "Bouldering always requires a rope for safety.",
    correctAnswer: false,
    explanation: "Bouldering is done without ropes, typically close to the ground with crash pads for protection.",
  },
  {
    id: 3,
    image: "../assets/images/yds.jpg",
    question: "The Yosemite Decimal System (YDS) is used worldwide as the primary grading system for rock climbing.",
    correctAnswer: false,
    explanation: "While YDS is common in North America, other systems like French, British, and UIAA are used in different regions.",
  },
  {
    id: 4,
    image: "../assets/images/chalk.jpeg",
    question: "Chalk is used in climbing to increase friction between hands and holds.",
    correctAnswer: true,
    explanation: "Chalk absorbs sweat and increases friction between climbers' hands and the holds.",
  },
  {
    id: 5,
    image: "../assets/images/rope.jpg",
    question: "Dynamic ropes are designed to stretch under tension to absorb the impact of falls.",
    correctAnswer: true,
    explanation: "Dynamic ropes have built-in stretch to reduce the impact force on climbers and anchors during falls.",
  },
  {
    id: 6,
    image: "../assets/images/belay_device.jpeg",
    question: "An ATC and a GriGri are both types of belay devices.",
    correctAnswer: true,
    explanation: "Both ATC (Air Traffic Controller) and GriGri are common belay devices, though they work differently - ATCs are manual while GriGris have an assisted braking mechanism.",
  },
  {
    id: 7,
    image: "../assets/images/anchor.jpeg",
    question: "In top-rope climbing, the anchor point is below the climber.",
    correctAnswer: false,
    explanation: "In top-rope climbing, the anchor point is above the climber at the top of the route, with the rope running through it.",
  },
  {
    id: 8,
    image: "../assets/images/quickdraws.jpeg",
    question: "Quickdraws are primarily used in sport climbing to clip the rope to bolt anchors.",
    correctAnswer: true,
    explanation: "Quickdraws consist of two carabiners connected by a strong strip of webbing, used to clip climbing ropes to protection points in sport climbing.",
  },
  {
    id: 9,
    image: "../assets/images/crimp.jpeg",
    question: "Full crimping is the safest way to grab small holds.",
    correctAnswer: false,
    explanation: "Full crimping puts significant stress on finger tendons and can lead to injuries. Open-hand or half-crimp positions are generally safer.",
  },
  {
    id: 10,
    image: "../assets/images/beta.jpeg",
    question: "Spraying beta means giving climbing advice without being asked.",
    correctAnswer: true,
    explanation: "Spraying beta refers to giving unsolicited advice about how to climb a route, which is generally considered poor etiquette in climbing.",
  },
];
