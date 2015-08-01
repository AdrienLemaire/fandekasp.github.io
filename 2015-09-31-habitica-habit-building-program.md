---
layout: post

title:  "Habitica"
subtitle: "Role Playing game and Habit building program"

date:   2015-07-31 22:00:00
categories: Productivity
cover_image: habitica/intro.png
cover_image_caption: "Motivate yourself to do anything."
news_keywords: "Productivity, Application, Game, Todo list, Community"
post_images: [
    "habitica/logo.png",
    "habitica/health_xp_mana.png",
    "habitica/classes.png",
    "habitica/items.png",
    "habitica/party.png",
    "habitica/badges.png",
]

description: "A brief look into Habitica, one of the best gamified productivity
applications, and a few tips"

---

<!-- What is Habitica ? Talk about the new name -->

[Habitica](https://habitica.com) is a todo-list
application inspired from the [Get Things Done](http://gettingthingsdone.com/)
productivity methodology.

You basically have 4 columns:

* **Habits**: for activities that could be repeated several times a day.
* **Dailies**: for recurring activities.
* **Todo**: One-time tasks.
* **Rewards**: Things you can do for fun after working hard on your tasks.

It's simple to use, accepts the [Markdown](http://daringfireball.net/projects/markdown/) 
markup language and [Emoji](http://emoji-cheat-sheet.com/) emoticons.


The strenght of Habitica is not really its todo-list features, but the game
that wraps it and the community that gives it life.

As a fact, I've tried many todo-list tools before Habitica, and always gave
up on them (not enough features, not intuitive, or simply because I couldn't
build the habit of checking them regularly and forgot them). But when I started
using Habitica back in its beta days, although it was cribbled with bugs, I
sticked to it because it was fun and people there very friendly.


<img class='float_left' src='/images/habitica/logo.png' alt='Habitica Logo' />

Formely named **HabitRPG**, the application was renamed **Habitica** on 2015,
July 31th. The old name was difficult to pronunce and confused by people
(HabitRG? HabitGRG?), so they decided to name the application after the land of
Habitica, where all these adventures take place.


The [Gamification](https://en.wikipedia.org/wiki/Gamification) comes in
multiples aspects:

* **Health**, **Experience**, **Mana**: Like any RPG, your avatar will
  evolve as you complete tasks, and might die if you're slacking off.
  ![Health, XP and Mana bars](/images/habitica/health_xp_mana.png)
* **Attribute points and Class System**: Do you want to complete quests faster,
  get more gold, avoid dying? Smartly distribute your points in [Strenght,
  Intelligence, Constitution and Perception](http://habitica.wikia.com/wiki/Character_Attributes)
  and select the most appropriate class for your avatar
  ([Warrior](http://habitica.wikia.com/wiki/Character_Attributes),
  [Mage](http://habitica.wikia.com/wiki/Mage),
  [Rogue](http://habitica.wikia.com/wiki/Rogue) or 
  [Healer](http://habitica.wikia.com/wiki/Healer))
  ![Classes system: Warrior, Mage, Rogue and Healer](/images/habitica/classes.png)
* **Gold**, **Food**, **Eggs**, **Potions**: As you complete your tasks, items
  will drop.
  ![items](/images/habitica/items.png)
* **Pets**, **Mounts**, **Equipment**, **Background**: Hatch eggs into pets,
  feed pets into mounts, buy equipments, and enjoy customizing your avatar in
  any way you'd like.
* **Party**, **Guilds**: You can join groups of people from all over the world,
  doing completely different jobs, and socialize with them, motivate each other
  to become everyday a bit more productive.
  ![Party backgrounds](/images/habitica/party.png)
* **Quests**, **Challenges**: Fight against bosses by completing your tasks,
  together with your team members, or compete against other players for habit
  building activities.
* **Achievements badges**: You can collect badges by contributing, by killing
  bosses, by getting all pets/mounts/equipments, by interacting with your party,
  and more!
  ![Achievement badges](/images/habitica/badges.png)


<!-- Talk about my experience -->

What hooked me up the most are the facts that Habitica is Open Source and
strongly motivates you to contribute, as well as the community.

I had the chance to join a really great party named
[Project Mayhem](https://hrpgprojectmayhem.wordpress.com/), and we went through
countless quests, looking for holes in the game to break it, and always keeping
a good spirit in the group. Habitica is a community building application, which
makes it invaluable: Even if there are better applications out there, it will be
hard to convince Habitica users to get out of it, since they would that
community.

<!-- Talk about contributions -->

The beauty about [contributions](http://habitica.wikia.com/wiki/Contributing_to_HabitRPG)
is that anybody can participate: Designers, Pixel artists, Translators, Music
and soud effect artists, Writers, Mobile & Web coders. Since the game has been
documented by its users, it results in
[one of the best documentations](http://habitica.wikia.com/wiki/Habitica_Wiki)
I've ever seen for an application.

<!-- Talk about the project source, organization

The code source is build on top of [AngularJS](https://angularjs.org/).
NO SURE WHAT TO TALK ABOUT HERE
 -->


<!-- Give Tips -->

To finish, I'd like to share a couple top secret advanced tips for you.

The first one is called **Auto-cast Mana**. You unlock mana with the class
system at level 10, and get new skills in the following levels.
When you reach higher levels, and want to cast a lot of Valorous Presence or
Earthquake with your party to complete quests faster, it can take a lot of time
to cast the skill over and over.
To accelerate that process, use this code:

{% gist 9bc9223f1c904340d31d %}

Right-Click on the skill you want to cast, click on "Inspect element". This will
open the browser's debugger. Go to the tab "Console", paste the code
there and press enter.


The second hack is called **Auto-feed pets**. If you only feed your pets once a
week or so, you'll have accumulated by then a large quantity of food, and
feeding will take a considerable amount of time. Let's cut this down to a few
seconds with this code:

{% gist d130eda27aa45238ebee %}

Go to your pets page, open your browser debugger (ctrl-shift-I on Chrome), go to
the Console, paste the previous code there and press enter. Click on a
food, then click on all pets you'd like to feed with that food until it runs
out.
