const MAXIMS = [
  `Pillage, then burn.`,
  `A Sergeant in motion outranks a Lieutenant who doesn't know what's going on.`,
  `An ordnance technician at a dead run outranks everybody.`,
  `Close air support covereth a multitude of sins.`,
  `Close air support and friendly fire should be easier to tell apart.`,
  `If violence wasn’t your last resort, you failed to resort to enough of it.`,
  `If the food is good enough, the grunts will stop complaining about the incoming fire.`,
  `Mockery and derision have their place. Usually, it's on the far side of the airlock.`,
  `Never turn your back on an enemy.`,
  `Sometimes the only way out is through. . . through the hull.`,
  `Everything is air-droppable at least once.`,
  `A soft answer turneth away wrath. Once wrath is looking the other way, shoot it in the head.`,
  `Do unto others.`,
  `"Mad Science" means never stopping to ask "what's the worst thing that could happen?"`,
  `Only you can prevent friendly fire.`,
  `Your name is in the mouth of others: be sure it has teeth.`,
  `The longer everything goes according to plan, the bigger the impending disaster.`,
  `If the officers are leading from in front, watch out for an attack from the rear.`,
  `The world is richer when you turn enemies into friends, but that's not the same as you being richer.`,
  `If you're not willing to shell your own position, you're not willing to win.`,
  `Give a man a fish, feed him for a day. Take his fish away and tell him he's lucky just to be alive, and he'll figure out how to catch another one for you to take tomorrow.`,
  `If you can see the whites of their eyes, somebody's done something wrong.`,
  `The company mess and friendly fire should be easier to tell apart`,
  `Any sufficiently advanced technology is indistinguishable from a big gun.`,
  `If a manufacturer's warranty covers the damage you did, you didn't do enough damage.`,
  `"Fire and Forget" is fine, provided you never actually forget.`,
  `Don't be afraid to be the first to resort to violence.`,
  `If the price of collateral damage is high enough, you might be able to get paid for bringing ammunition home with you.`,
  `The enemy of my enemy is my enemy's enemy. No more. No less.`,
  `A little trust goes a long way. The less you use, the further you'll go.`,
  `Only cheaters prosper.`,
  `Anything is amphibious if you can get it back out of the water.`,
  `If you're leaving tracks, you're being followed.`,
  `If you’re leaving scorch-marks, you need a bigger gun.`,
  `That which does not kill me has made a tactical error.`,
  `When the going gets tough, the tough call for close air support.`,
  `There is no "overkill." There is only "open fire" and "reload."`,
  `What's easy for you can still be hard on your clients.`,
  `There is a difference between spare parts and extra parts.`,
  `Not all good news is enemy action.`,
  `“Do you have a backup?” means “I can’t fix this.”`,
  `"They'll never expect this" means "I want to try something stupid."`,
  `If it's stupid and it works, it's still stupid and you're lucky.`,
  `If it will blow a hole in the ground, it will double as an entrenching tool.`,
  `The size of the combat bonus is inversely proportional to the likelihood of surviving to collect it.`,
  `Don’t try to save money by conserving ammunition.`,
  `Don't expect the enemy to cooperate in the creation of your dream engagement.`,
  `If it ain't broke, it hasn't been issued to the infantry.`,
  `Every client is one missed payment away from becoming a target`,
  `If it only works in exactly the way the manufacturer intended, it is defective.`,
  `Let them see you sharpen the sword before you fall on it.`,
  `The army you've got is never the army you want.`,
  `The intel you've got is never the intel you want.`,
  `It's only too many troops if you can't pay them.`,
  `It's only too many weapons if they're pointing in the wrong direction.`,
  `Infantry exists to paint targets for people with real guns.`,
  `Artillery exists to launch large chunks of budget at an enemy it cannot actually see.`,
  `The pen is mightiest when it writes orders for more swords.`,
  `"Two wrongs is probably not going to be enough."`,
  `Any weapon's rate of fire is inversely proportional to the number of available targets.`,
  `Don't bring big grenades into small rooms.`,
  `Anything labeled "This end toward enemy" is dangerous at both ends.`,
  `The brass knows how to do it by knowing who can do it.`,
  `An ounce of sniper is worth a pound of suppressing fire.`,
  `After the toss, be the one with the pin, not the one with the grenade.`,
  `Necessity is the mother of deception.`,
  `If you can't carry cash, carry a weapon.`,
  `Negotiating from a position of strength does not mean you shouldn’t also negotiate from a position near the exits.`,
  `Sometimes rank is a function of firepower.`,
  `Failure is not an option - it is mandatory. The option is whether or not to let failure be the last thing you do.`
]

function getMaxim(id) {
  const random = getRandomIntInclusive(0, 69);
  const maximID = (parseInt(id) - 1) >= 0 ? (parseInt(id) - 1) : random;
  return MAXIMS[maximID];
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  MAXIMS,
  getMaxim
}