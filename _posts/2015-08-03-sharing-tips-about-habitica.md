---
layout: post

title:  "Long life to Habitica, former HabitRPG"
subtitle: "A Role Playing game and Habit building program."

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
    "habitica/pm.png",
]

sharing: "Habitica, awesome gamified Todo-list: introduction and expert tips."
description: "A brief look into Habitica, one of the best gamified productivity
applications and a few tips"

counturl: http://adrien.is/sharing-tips-about-habitica/
---
Do you like RPGs? Are you needing a good Todo list tool? Habitica was made just
for you.

`Well... I'm already using Habitica, so...`<br />
Wait! I've got a gift for you. You definitely want to check [the tips](#tips)
sections.

## Brief introduction to Habitica

[Habitica](https://habitica.com) is a todo-list
application inspired from the [Get Things Done](http://gettingthingsdone.com/)
productivity methodology.

{: .clear}
![Habitica Logo](/images/habitica/logo.png "New logo looking like a Gryphon"){: .float_left}
Formely named **HabitRPG**, the application was renamed **Habitica** on July 31th 2015.
The old name was difficult to pronunce and confused by people
(HabitRG? HabitGRG?), so they decided to name the application after the land of
Habitica, where all these adventures take place.

<!--more-->

You basically have 4 columns:

* **Habits**: for activities that could be repeated several times a day.
* **Dailies**: for recurring activities.
* **Todo**: for one-time tasks.
* **Rewards**: for leisure activities available after working hard on your tasks.

It's  simple to use, accepts the [Markdown](http://daringfireball.net/projects/markdown/) 
markup language and [Emoji](http://emoji-cheat-sheet.com/) emoticons.


Although its todo-list features have increased a lot over the time, I believe the
strength of Habitica comes from the gaming aspect that wraps the tool and the
community that gives it life.

As a fact, I've tried many todo-list tools before Habitica and always gave
up on them (missing features, not intuitive enough, or simply because I couldn't
build the habit of checking them regularly and forgot them). But when I started
using Habitica back in its beta days, although it was cribbled with bugs, I
sticked to it because I was having fun and had met very friendly people there.

The [Gamification](https://en.wikipedia.org/wiki/Gamification) comes in
multiples aspects:

* **Health**, **Experience**, **Mana**: Like any [RPG
  game](https://en.wikipedia.org/wiki/Role-playing_game), your avatar will
  evolve as you complete tasks and will die if you're slacking off.

  {: .centered}
  ![Health, XP and Mana bars](/images/habitica/health_xp_mana.png)
* **Gold**, **Food**, **Eggs**, **Potions**: As you complete your tasks, items
  will drop.
 
  {: .centered }
  ![items](/images/habitica/items.png)
* **Pets**, **Mounts**, **Equipment**, **Background**: Hatch eggs into pets,
  feed pets into mounts, buy equipments and enjoy customizing your avatar in
  any way you'd like.
* **Attribute points and Class System**: Become a ([Warrior](http://habitica.wikia.com/wiki/Character_Attributes),
  [Mage](http://habitica.wikia.com/wiki/Mage),
  [Rogue](http://habitica.wikia.com/wiki/Rogue) or 
  [Healer](http://habitica.wikia.com/wiki/Healer)), and customize your game
  experience accordingly (get more gold, level faster, or be more solid to avoid
  death). Smartly distribute your points in [Strength,
  Intelligence, Constitution and Perception](http://habitica.wikia.com/wiki/Character_Attributes),
  depending on your class primary and secondary attributes to increase your gear
  effect (Find advanced strategy tips [at the end of the post](#classes-strategy)).

  {: .centered }
  ![Classes system: Warrior, Mage, Rogue and Healer](/images/habitica/classes.png)
* **Party**, **Guilds**: You can join groups of people from all over the world,
  doing completely different jobs, socialize with them and motivate each other
  to become everyday a bit more productive.

  {: .centered}
  ![Party backgrounds](/images/habitica/party.png)
* **Quests**, **Challenges**: Fight against bosses by completing your tasks,
  together with your team members, or compete against other players for habit
  building activities.
* **Achievements badges**: You can collect badges by contributing, by killing
  bosses, by getting all pets/mounts/equipments, by interacting with your party,
  and more!

  {: .centered}
  ![Achievement badges](/images/habitica/badges.png)


## An excerpt of my personal experience

What hooked me up the most was the community and that Habitica is Open Source
and strongly encourages you to contribute.

{: .clear}
![Project Mayhem Logo](/images/habitica/pm.png "Using the quest boss Vice"){: .float_left}
I had the chance to join a really great party named
[Project Mayhem](https://hrpgprojectmayhem.wordpress.com/) and we went through
countless quests, looking for holes in the game to break it and always keeping
a good spirit in the group. Habitica is a community building application, which
makes it invaluable: Even if there are better applications out there, it will be
hard to convince Habitica users to get out of it, since they would lose that
community. Something I've been pondering a lot as I'm looking into building new
productivity applications in the future.

<!-- Talk about contributions -->

The beauty about [contributions](http://habitica.wikia.com/wiki/Contributing_to_HabitRPG)
is that anybody can participate: Designers, Pixel artists, Translators, Music
and soud effect artists, Writers, Mobile & Web coders. Since the game has been
documented by its users, it results in
[one of the best documentations](http://habitica.wikia.com/wiki/Habitica_Wiki)
I've ever seen for an application.

Once I've contributed to the project, of course it made me want to use it more,
and I've borne the eventual bugs, finding new ways to handle my tasks the way I
wanted.

## The behind-the-scenes of Habitica

The code source for the web version is built on top of
[AngularJS](https://angularjs.org/). Mobile versions were initially made by
contributors, then [an official one](https://github.com/HabitRPG/habitrpg-mobile)
came out from AngularJS and [PhoneGap](http://phonegap.com/). Up to today,
I have to say this application has given me lot of troubles, especially its
slowness (the downside of using a HTML application). But there are
good news: the native [iOS application](https://itunes.apple.com/us/app/habitica/id994882113?mt=89)
is now available and the android one is on its way (
[details on the Habitica blog](https://habitica.com/static/old-news)).

I'll definitely have a look at the Android app and do some minor contributions
when I'll find time as this will be a good use-case for the [UX Design for Mobile
Developers](https://www.udacity.com/course/viewer#!/c-ud849/l-1646378760/e-1648148840/m-1679598652)
[MOOC](https://en.wikipedia.org/wiki/Massive_open_online_course) course :smile:. 

For the other tools that the team use in its development workflow:

* The projects are [hosted on Github](https://github.com/HabitRPG), which is
  also used for bug report and pull requests.
* The projects managements are done [on Trello](https://trello.com/habitica),
  also used for feature requests.
* All documentations are updated [in Wikia](http://habitica.wikia.com/wiki/Habitica_Wiki).
* Habitica has a blog [hosted on Tumbler](http://blog.habitrpg.com/).
* The project was boosted with a [Kickstarter campaign](http://habitica.wikia.com/wiki/Kickstarter)
  funded by 2800+ people and is now self-supported from selling ubscriptions and gems.

I find such organization beautiful. They managed to keep their tools list to a
minimum and simplify everything to help contributors getting onboard.

## Tips

To finish, I'd like to share some top secret advanced tips for you.

### Classes Strategy

Some of my party members are really into it, and we've been able to break the
game several times by adopting specific strategies. The game is rebalanced
regularly, and lately it became harder to break it. Still, those advices still
hold true:

* **Valorous Presence**: Especially stronger at low levels, this spel will
  increase the STR (Strength) of all party players, increasing seriously the
  Boss damage.

* **Ethereal Surge**: Increase the MP (Mana) of your teammates, allowing them to
  cast more spells.

* **Earthquake**: Increase your party INT (Intelligence). It means your party
  will level up much faster.

Our last game breaking adventure was a month and half ago. We went for a
"Everyone's a Mage" strategy, and made sure to start the day by casting
**Ethereal Surge** for everybody to have an insane amount of Mana, then finish
the day with **Earthquake** to easily jump several levels a day, thanks for the
automation script below.


### Accelerator scripts

The first one is called **Auto-cast Mana**. You unlock mana with the class
system at level 10 and get new skills in the following levels.
When you reach higher levels and want to cast a lot of Valorous Presence or
Earthquake with your party to complete quests faster, it can take a lot of time
to cast the spell over and over.
To accelerate that process, use this code:

{% gist 9bc9223f1c904340d31d %}

*Right-Click on the spell you want to cast, click on "Inspect element". This will
open the browser's debugger. Go to the tab "Console", paste the code
there and press enter.*


The second hack is called **Auto-feed pets**. If you only feed your pets once a
week or so, you'll have accumulated by then a large quantity of food and
feeding will take a considerable amount of time. Let's cut this down to a few
seconds with this code:

{% gist d130eda27aa45238ebee %}

*Go to your pets page, open your browser debugger (ctrl-shift-I on Chrome), go to
the Console, paste the previous code there and press enter. Click on a
food, then click on all pets you'd like to feed with that food until it runs
out.*


----

If you're new to Habitica, did you find this article interesting ?
Otherwise did you find the advanced tips useful ?<br />
I will blog regularly about Productivity applications and methodologies, so if
you'd like to stay tuned, [please subscribe here](http://eepurl.com/bt8739).
