import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export default [
  {
    name: "Happiness",
    quote:
      "“Happinness is not something ready made, it comes from your own actions.”  - Dalai Lama",
    topicImage: require("../assets/exercises/compassion.png"),
    topicDetailsImage: require("../assets/sun.png"),
    topicTitleColor: "#6D9ED6",
    topicBgColor: "#FEEADA",
    exercises: [
      {
        id: uuidv4(),
        favorite: false,
        time: "6",
        topicName: "Happiness",
        brief: {
          title: "Three Good Things",
          body: "Simple method for redirecting attention towards positive events."
        },
        details: {
          title: "Three Good Things",
          description: `\tHumans have evolved to spend much more time thinking about negative experiences than positive ones. We spend a lot of time thinking about what has gone wrong (past), what can go wrong (future), or how we aren’t stacking up (present). In the past, there may have been an evolutionary advantage to this way of thinking for survival. 
\tHowever, in modern times, this negative bias is considered one of the main sources of anxiety, depression, and a general lack of well-being. Martin Seligman, the "father	of Positive Psychology" developed a very simple but powerful technique, called "Three Good Things" which consists in re‐directing our thoughts towards positive experiences, in order to balance the innate negative balance. Want to give it a try?`,
          detailsImage: require("../assets/exercises/good_things.png"),
          exercisesDone: []
        },
        pratice: {
          title: "Three Good Things",
          description: `\tWrite down, at least 3 positive things that happened to you today. It doesn't need to be big or important, just anything from the most simple to the most exalted, as long as it seems good, positive, and joyful to you. After doing it, take a time to reflect on these things and why they mattered to you. Try do it everyday, for last longing effects.`
        }
      },
      {
        id: uuidv4(),
        favorite: false,
        time: "10",
        topicName: "Happiness",
        brief: {
          title: "Best Positive Self",
          body: "A simple method for changing the mindset and increase optimism."
        },
        details: {
          title: "Best Positive Self",
          description: `\tConcerns about the future. Did you ever have those? Well, if you have a mind, you certainly do. The brain is addicted to "what if" statements, like: "What if I couldn't make it?", "What if that goes wrong?" and so it goes... On the one hand, this skill is essential thus it enables us to identify possible threats, increases awareness, and therefore we can find solutions before things go wrong. 
\tOn the other hand, if we live only in this mindset, it can lead to high levels of stress, chronic pessimism and lack of motivation. The Best Possible Self, has been shown to boost people’s positive emotions, balacing those "what if"'s with happiness, optimism, hope, and positive expectations about the future.`,
          detailsImage: require("../assets/exercises/best_positive.png"),
          exercisesDone: []
        },
        pratice: {
          title: "Best Positive Self",
          description: `\tImagine your life the way you always imagined it would be. Imagine that you have performed to the best of your abilities and achieved all the things you wanted to in life. 
\tWhile writing, do not worry about grammar or punctuation. Just focus on writing all your thoughts and emotions expressively. Write about a realistic positive future self and avoid comparing it with your current reality. After completing the initial exercise, reflect on your feelings.`
        }
      },
      {
        id: uuidv4(),
        favorite: false,
        time: "12",
        topicName: "Happiness",
        brief: {
          title: "Gratitude Journal",
          body: "Count your blessings and enjoy better health and happiness."
        },
        details: {
          title: "Gratitude Journal",
          description: `\tThe act of gratitude plays an important role in psychological wellbeing and self-actualization. By appreciating even little positive things that happened to us, we're not only reinforcing the skill of gratitude, we are also reviving those same joyfull experiences. 
\tRegular expression of gratitude leads to increased feelings of happiness, as well as reports of higher life satisfaction, meaningfulness, and productivity. The goal of the exercise is to remember a good event, experience, person, or thing in your life and then enjoy the good emotions that come with it.`,
          detailsImage: require("../assets/exercises/journal.png"),
          exercisesDone: []
        },
        pratice: {
          title: "Gratitude Journal",
          description: `\tWrite down up to five simple things for which you feel grateful. In this way, you are focusing and appreciating on all the good things that you liked most.
\tEx: “I’m grateful that my neighbors offered my help with my grocery today.”`
        }
      }
    ]
  },
  {
    name: "Relax",
    quote:
      "“Your mind will answer most questions if you learn to relax and wait.”  - William S. Burroughs",
    topicImage: require("../assets/exercises/journal.png"),
    topicDetailsImage: require("../assets/bg/relax_bg.png"),
    topicTitleColor: "white",
    topicBgColor: "#AAD2F0",
    exercises: [
      {
        id: uuidv4(),
        favorite: false,
        time: "15",
        topicName: "Relax",
        brief: {
          title: "Affirming Personal Values",
          body: "Simple exercise for whenever you feel defensive or threatened."
        },
        details: {
          title: "Affirming Personal Values",
          description: `\tIn our daily lives, we sometimes perceive situations as threats, either from receiving negative feedback or just being rejected in social situations. In these moments, it’s difficult to stay clear-headed, open-minded, and in control of our thoughts and emotions. We may get defensive or act out, depriving ourselves of constructive lessons and sometimes harming our relationships with others. Researchers have found that writing about our most important values can help us experience less stress, be less defensive and more open to information, and make healthier choices in these situations. 
\tIt can remind us of the other resources we have in our lives: how strong and capable we are, or how much support we receive from others. We start to realize that there's something we care about, whether it’s cultivating relationships or creativity, that matters more to us than whatever difficulty we’re experiencing in the moment.`,
          detailsImage: require("../assets/exercises/values.png"),
          exercisesDone: []
        },
        pratice: {
          title: "Affirming Personal Values",
          description: `  Take a moment to think and write down a list of values, characteristics, and qualities, important to you.
\tStart by ranking them in order of their importance from 1 to 7. 
\tThen, explain why these qualities matter, specially the first one. The goal here to help you getting the bigger picture of who you are, and allowing you to be more open to hearing negative feedback. You can take a wiser and more long-term perspective, instead of getting bogged down in momentary negative feelings.
\tEx: "1- artistic skills/aesthetic appreciation, 2- sense of humor... Artistic skills is important for me, because it allows me to be more empathetic towards other people's feelings."`
        }
      },
      {
        id: uuidv4(),
        favorite: false,
        time: "15",
        topicName: "Relax",
        brief: {
          title: "Nourish Personal Strengths",
          body: "Get in touch with your positive traits and enjoy greater peace."
        },
        details: {
          title: "Nourish Personal Strengths",
          description: `\tSometimes we give our weaknesses and limitations more attention than our strengths. While working to improve shortcomings is important for well-being, it is also important to nurture our strengths and put them to use. Research suggests that thinking about personal strengths can increase our happiness and reduce depression. Also, it reminds people that they do have important positive qualities that bring a difference to themselves and the world, so we need to nourish and nurture them. Recognizing and exercising these strengths can make them stronger and better equiped to meet life’s challenges.
\tAre you curious on how to do it?`,
          detailsImage: require("../assets/exercises/strengths.png"),
          exercisesDone: []
        },
        pratice: {
          title: "Nourish Personal Strengths",
          description: `\tTake a moment to think about one of your strengths, for instance, creativity, perseverance, kindness, or curiosity. 
\tNow, how you could use this strength today in a new and different way? 
\tDescribe in writing the personal strength you plan to use today and how you are going to use it. 
\tThen, go ahead and act on your strength as regularly as possible throughout the day. For example, if you choose curiosity, you might attempt an activity that it's completely new to you. 
\tAt the end of the week, write in detail about what you did, how you felt, and what you learned from the experience.`
        }
      },
      {
        id: uuidv4(),
        favorite: false,
        time: "7",
        topicName: "Relax",
        brief: {
          title: "Self-Compassion",
          body: "Learn a better way to deal with stressful situations."
        },
        details: {
          title: "Self-Compassion",
          description: `\tThis practice can be used any time of day or night. If you practice it in moments of relative calm, it might become easier for you to experience the three parts of self-compassion mindfulness, common humanity, and self-kindness when you need them most.`,
          detailsImage: require("../assets/exercises/compassion.png"),
          exercisesDone: []
        },
        pratice: {
          title: "Self-Compassion",
          description: `\tThink of a situation in your life that is difficult and is causing you stress. For this practice, especially if you are new to it, it's better to choose something that is moderately difficult in your life, rather than overwhelming.
\tNow say to yourself: “This is a moment of (name)” and write down the name of that feeling, it can be "stress", "suffering", choose whatever statement feels most natural to you. This acknowledgment is a form of mindfulness, of noticing what is going emotionally in the present moment, without judging it as good or bad.
\tNext, say to yourself, “Suffering is a part of life.”. This is an acknowledgment of your common humanity with others, it's human to feel suffering, pain, and discomfort many times. You can include “Other people feel this way,” “I’m not alone,” or “We all struggle in our lives.".
\tFinally, say to yourself, "I allow myself to not feel wonderfull everyday", let your body and mind embrace your current state, and say "I give myself the compassion to live this moment of...".
\tAt the end, write in detail about how you felt, and what you learned from the experience..`
        }
      }
    ]
  },
  {
    name: "Empathy",
    quote: `“There highest form of knowledge is empathy.”  - Bill Bullard`,
    topicImage: require("../assets/exercises/qualities.png"),
    topicDetailsImage: require("../assets/empathy.png"),
    topicTitleColor: "#9679AB",
    topicBgColor: "#EACDE6",
    exercises: [
      {
        id: uuidv4(),
        favorite: false,
        time: "5",
        topicName: "Empathy",
        brief: {
          title: "Letting Go of Anger",
          body: "Learn to think about hurtful events in a different way."
        },
        details: {
          title: "Letting Go of Anger",
          description: `\tWhen we're hurt or deceived by someone, it’s understandable to feel angry and view the person in a negative frame. However, remaining on these painful feelings keep us stuck in a grudge, which is highly stressful and wreaks our physical and mental health. One way to loosen the grip of anger and resentment is to change the way we think about the person who hurt us. Research suggests that when people perceive offenders as fallible human beings who behaved badly but have the potential to change, they experience emotional and physiological benefits, such as increased positive emotions and a more stress-resilient cardiovascular system. 
\tInstead of just trying to reduce the negative emotions associated with a hurtful event, Letting Go of Anger helps us replace them with feelings of compassion and forgiveness. It allows us to develop genuine empathy and concern for an offender, while still acknowledging the hurtfulness of the offense and the offender’s need for growth or healing.`,
          detailsImage: require("../assets/exercises/strengths.png"),
          exercisesDone: []
        },
        pratice: {
          title: "Letting Go of Anger",
          description: `\t1. Identify a time in the past when another person hurt or offended you. Write down how you felt. 
\t2. Now, think of the offender as a human being who behaved incorrectly. Even if the relationship cannot be restored, try to genuinely wish that this person learns to be better and live life in a more meaningful and hatred-free way. Even though it may be hard to do this, focus your thoughts and feelings on giving a gift of mercy and compassion for their inner suffering. Instead of feeling a victim of the offender's action, get a broader view, understand his pattern of damage. 
\t3. Finally write down your thoughts, feelings, and expectations for yourself and that person. You can repeat this exercise each time you find yourself ruminating on an experience when someone hurt you.`
        }
      },
      {
        id: uuidv4(),
        favorite: false,
        time: "8",
        topicName: "Empathy",
        brief: {
          title: "Positive Events",
          body: "Increase empathy by strengthing your bonds with close ones"
        },
        details: {
          title: "Positive Events",
          description: `\tThe people close to us need our support when things go right, not just when they go wrong. When people close to us, friends, family members, significant others, tell us about positive things that happened to them, these moments have the potential to make us feel significantly closer to one another, depending on how we respond. 
\tProviding encouragement for another person’s positive event can not only increase the satisfaction they derive from that event, but it can also make them feel loved and cared about. Talking about a positive event together creates a shared positive experience that can enhance overall relationship satisfaction.`,
          detailsImage: require("../assets/exercises/events.png"),
          exercisesDone: []
        },
        pratice: {
          title: "Positive Events",
          description: `\tAsk a friend, family member, colleague, romantic partner, or other acquaintance to tell you about a good thing that happened to them today. It does not matter what type of event or how important it was, as long as it was a positive thing that happened to them and they feel comfortable discussing it.
\tAs they share, listen and try to respond in an “active-constructive” manner, make enthusiastic comments, make good eye contact and ask constructive questions. At the end, write in detail about how you felt, and what you learned from the experience.`
        }
      },
      {
        id: uuidv4(),
        favorite: false,
        time: "7",
        topicName: "Empathy",
        brief: {
          title: "Qualities in Others",
          body: "Learn to connect with others recognizing qualities."
        },
        details: {
          title: "Qualities in Others",
          description: `\tFor personal growth, it's essential to surround yourself with people who support you in your dreams and aspirations. Supportive people will increase your energy, help you thrive, and accomplish your most challenging dreams. In the same way, they also thrive with your supportive presence. 
\tIn order to strengthen your bonds and building a healthy relationship, it's essential to acknowledge their own qualities and how they help you thrive. This acknowledgment will reinforce a positive perspective on that person, leading you to increase empathy, and consequently increasing happiness, and gratitude for having that person beside you.`,
          detailsImage: require("../assets/exercises/qualities.png"),
          exercisesDone: []
        },
        pratice: {
          title: "Qualities in Others",
          description: `\t1. Take a moment to think about a close one, someone that helps you in most difficult times validates your feelings, and aims to protect your mental health and personal growth. 
\t2. Write down 3-5 qualities that person has, and detail why they matter to you and how they make you feel.
          (Ex. "John is caring, loving, rational, and a good listener. That makes me feel cherished, significant and protected."). 
\t3. Optionally, you can describe an event where that person's help was essential for you to overcome the problem. 
\t4. Finally, if you feel to share it, go ahead and make them know. If not, enjoy and appreciate silently the feeling of having someone like that in your life.`
        }
      }
    ]
  },
  {
    name: "Rational Thinking",
    quote:
      "“Most people spend more time and energy going around problems than in trying to solve them.”  - Henry Ford",
    topicImage: require("../assets/exercises/irrational.png"),
    topicDetailsImage: require("../assets/lamp.png"),
    topicTitleColor: "white",
    topicBgColor: "#8AD7B3",
    exercises: [
      {
        id: uuidv4(),
        favorite: false,
        time: "10",
        topicName: "Rational Thinking",
        brief: {
          title: "Goal Visualization",
          body: "An effective way to tackle difficult tasks."
        },
        details: {
          title: "Goal Visualization",
          description: `          When we're faced with a hard challenge, usually the hardest part is getting started. On the other hand, when you believe that you will be successful at something, it encourages you to work harder toward achieving that goal and this greater effort increases the chance that you will succeed. Plus, the more you succeed, the more confident you will be about future goals. Having confidence in your ability to achieve your goals is a key component of happiness, a better ability to cope with stress, and more relationship satisfaction. 
          To help you overcome that big initial hurdle, this exercise asks you to describe a short-term goal and to visualize the steps you will take to achieve it. Remember, though, not to get down on yourself if you don’t succeed right away or perform perfectly. Repeated practice will help you build confidence and develop a more optimistic mindset.`,
          detailsImage: require("../assets/exercises/goal.png"),
          exercisesDone: []
        },
        pratice: {
          title: "Goal Visualization",
          description: `\t1. Briefly describe in writing one goal that you would like to achieve in the next day or two. Make sure that this goal is realistic, simple, important to you, and not too time-consuming.
\tEx. “organize office paperwork” rather than “clean the entire house top to bottom”.
\t2. Now, when you have an oportunity go ahead and do it.
\t3. At the end, write in detail about how you felt.`
        }
      },
      {
        id: uuidv4(),
        favorite: false,
        time: "10",
        topicName: "Rational Thinking",
        brief: {
          title: "Irrational Thinking",
          body: "Learn how to change negative mindset patterns."
        },
        details: {
          title: "Irrational Thinking",
          description: `\tDo you ever find yourself following a certain train of thought, without consciously choosing to believe it and it takes you to a bad or upsetting conclusion? I’m going to assume you answered affirmatively since you’re human. It’s in our nature to come up with the so-called "cognitive schemas", in other words, patterns and assumptions about how things operate. Without them, we would have to approach every problem as being the first one, with no pre-existing skills, problem-solving techniques, or models learned to tackle it. The issue with these schemas is that they are not always accurate, we do not always come up with the best and most effective approaches for solving problems. 
\tFortunately, there's an effective, evidence-backed process of reframing and restructuring these faulty ways of thinking that can help you correct the biased and inaccurate beliefs you've built. Learn about cognitive restructuring and how it can help you improve your thinking.`,
          detailsImage: require("../assets/exercises/irrational.png"),
          exercisesDone: []
        },
        pratice: {
          title: "Irrational Thinking",
          description: `\tFirst, we need to increase the awareness of our thoughts. 
\t1. Write down some of the irrational thoughts you're currently having.
          Ex. "This is the worse thing ever", "If this isn't perfect then it's a complete failure". 
\t2. Now let's understand the distortion type, here're some examples: catastrophic, "all or nothing" and "disqualifying thepositive". Check for "Cognitive Distortions" to learn more, it will help you immensely. 
\t3. Once you've identified the type of your thought, we need to restructure it. So finally write, just below the distortion type, a proper answer or a realistic substitute to it.
\tEx."This situation is really difficult, but I will get through it", "Perfect is unrealistic. Giving is my all, is what matters". 
\tNaturally, it takes time to update a schema, eventually, your old one will come back again and again, but you just have to repeat the new ones and don't forget to act on it, reframing thoughts don't work without acting like it.`
        }
      },
      {
        id: uuidv4(),
        favorite: false,
        time: "10",
        topicName: "Rational Thinking",
        brief: {
          title: "Problem-Solving",
          body: "Implement a problem-solving approach to your life."
        },
        details: {
          title: "Problem-Solving",
          description: `\tWe as humans are confronted daily with contradictory situations, obstacles that have to be overcome to achieve our personal goals or fulfill our necessities. Challenges are healthy, it increases motivation, engagement with the current tasks, and general life fulfillment. However this can become an issue when we perceive the problem as being bigger than our resources to cope with it, then it gets overwhelming and unsolvable. 
\tIt becomes a source of stress, anxiety, and demotivation. This is where the problem-solving approach comes in handy. This technique teaches us to have a more solution-oriented approach to difficulties, instead of just mourning and complaining, we build a curious approach to life and inner challenges.`,
          detailsImage: require("../assets/exercises/problem.png"),
          exercisesDone: []
        },
        pratice: {
          title: "Problem-Solving",
          description: `\tThis method has 4 parts towards the problem: 
            1. Understand it; 
            2. Plan a solution; 
            3. Apply the solution; 
            4. Check if it worked.
\tFirst, try to understand the problem, think about the main root, if it's something common then read about it, get to know your problem by gathering information. 
\tSecondly, choose a strategy, make a list of possible solutions, we recommend writing realistic actions that you control. Ask yourself: "Does my solution makes sense?", "Is my solution reasonable?", "Can I solve it another way?". 
\tThirdly it's time to apply them, try the first one, and check if the results are what you expect. If not, try another solution and optimize this process until you find yourself managing the problem.`
        }
      }
    ]
  }
];
