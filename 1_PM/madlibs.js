/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.

Change thses values to generate a different story
*/

const noun1 = "Gnorman Gnommington"
const pospronoun1 = "His"
const adj2 = "frightful"
const noun2 = "beast"
const adv1 = "disgustingly"
const verb1 = "trampled"
const phrase1 = "change the local weather conditions temporarily to a most acidic rain"

const story = `
Here's a story about your favourite garden gnome ${noun1}. 
${pospronoun1} day had been quite unremarkable until he was suddenly interrupted from his highly valued and most crucial gnomial duties by a ${adj2} ${noun2},
who quite ${adv1} ${verb1} His Gnomial Lordship and proceeded to ${phrase1}. How HGL (His Gnomial Lordship) ${noun1} will ever quite recover is yet to be seen,
although few gnomes have been gnown to have such gnormous poise and resolve as HGL ${noun1}.
`

console.log(story)
