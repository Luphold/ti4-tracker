// TI4 Tracker — Game Data
// Auto-extracted from ti4-tracker_29.html
// Do not edit manually — regenerate if source changes

const FACTIONS = [
  "Last Bastion","Sardakk N'orr","The Argent Flight","The Arborec",
  "The Barony of Letnev","The Clan of Saar","The Council Keleres","The Crimson Rebellion",
  "The Deepwrought Scholarate","The Emirates of Hacan","The Embers of Muaat","The Empyrean",
  "The Federation of Sol","The Firmament / The Obsidian","The Ghosts of Creuss","The L1Z1X Mindnet",
  "The Mahact Gene-Sorcerers","The Mentak Coalition","The Naalu Collective","The Naaz-Rokha Alliance",
  "The Nekro Virus","The Nomad","The Ral Nel Consortium",
  "The Titans of Ul","The Universities of Jol-Nar","The Vuil'raith Cabal","The Winnu",
  "The Xxcha Kingdom","The Yin Brotherhood","The Yssaril Tribes"
];

const TECHNOLOGIES = [
  // BIOTIC
  {name:"Neural Motivator",type:"biotic",
   desc:"During the status phase, draw 2 action cards instead of 1."},
  {name:"Dacxive Animators",type:"biotic",
   desc:"After you win a ground combat, you may place 1 infantry from your reinforcements on that planet."},
  {name:"Hyper Metabolism",type:"biotic",
   desc:"During the status phase, gain 3 command tokens instead of 2."},
  {name:"X-89 Bacterial Weapon",type:"biotic",
   desc:"Double the hits produced by your units' BOMBARDMENT and ground combat rolls. Exhaust each planet you use BOMBARDMENT against."},
  {name:"Psychoarchaeology",type:"biotic",
   desc:"You can use technology specialties on planets you control without exhausting them, even if those planets are exhausted. During the Action Phase, you can exhaust planets you control that have technology specialties to gain 1 Trade Good."},
  {name:"Bio-Stims",type:"biotic",
   desc:"You may exhaust this card at the end of your turn to ready 1 of your planets that has a technology specialty or 1 of your other technologies."},
  // PROPULSION
  {name:"Antimass Deflectors",type:"propulsion",
   desc:"Your ships can move into and through asteroid fields. When other players' units use SPACE CANNON against your units, apply -1 to the result of each die roll."},
  {name:"Gravity Drive",type:"propulsion",
   desc:"After you activate a system, apply +1 to the move value of 1 of your ships during this tactical action."},
  {name:"Fleet Logistics",type:"propulsion",
   desc:"During each of your turns of the action phase, you may perform 2 actions instead of 1."},
  {name:"Light/Wave Deflector",type:"propulsion",
   desc:"Your ships can move through systems that contain other players' ships."},
  {name:"Dark Energy Tap",type:"propulsion",
   desc:"After you perform a tactical action in a system that contains a frontier token, if you have 1 or more ships in that system, explore that token. Your ships can retreat into adjacent systems that do not contain other players' units, even if you do not have units or control planets in that system."},
  {name:"Sling Relay",type:"propulsion",
   desc:"ACTION: Exhaust this card to produce 1 ship in any system that contains 1 of your space docks."},
  // CYBERNETIC
  {name:"Sarween Tools",type:"cybernetic",
   desc:"When 1 or more of your units use PRODUCTION, reduce the combined cost of the produced units by 1."},
  {name:"Graviton Laser System",type:"cybernetic",
   desc:"You may exhaust this card before 1 or more of your units uses SPACE CANNON; hits produced by those units must be assigned to non-fighter ships if able."},
  {name:"Transit Diodes",type:"cybernetic",
   desc:"You may exhaust this card at the start of your turn during the action phase; remove up to 4 of your ground forces from the game board and place them on 1 or more planets you control."},
  {name:"Integrated Economy",type:"cybernetic",
   desc:"After you gain control of a planet, you may produce any number of units on that planet that have a combined cost equal to or less than that planet's resource value."},
  {name:"Scanlink Drone Network",type:"cybernetic",
   desc:"When you activate a system, you may explore 1 planet in that system which contains 1 or more of your units."},
  {name:"Predictive Intelligence",type:"cybernetic",
   desc:"At the end of your turn, you may exhaust this card to redistribute your command tokens. When you cast votes during the agenda phase, you may cast 3 additional votes; if you do, and the outcome you voted for is not resolved, exhaust this card."},
  // WARFARE
  {name:"Plasma Scoring",type:"warfare",
   desc:"When 1 or more of your units use BOMBARDMENT or SPACE CANNON, 1 of those units may roll 1 additional die."},
  {name:"Magen Defense Grid",type:"warfare",
   desc:"When any player activates a system that contains 1 or more of your structures, place 1 infantry from your reinforcements with each of those structures. At the start of ground combat on a planet that contains 1 or more of your structures, produce 1 hit and assign it to 1 of your opponent's ground forces."},
  {name:"Duranium Armor",type:"warfare",
   desc:"During each combat round, after you assign hits to your units, repair 1 of your damaged units that did not use SUSTAIN DAMAGE during this combat round."},
  {name:"Assault Cannon",type:"warfare",
   desc:"At the start of a space combat in a system that contains 3 or more of your non-fighter ships, your opponent must destroy 1 of their non-fighter ships."},
  {name:"AI Development Algorithm",type:"warfare",
   desc:"When you research a unit upgrade technology, you may exhaust this card to ignore any 1 prerequisite. When 1 or more of your units use PRODUCTION, you may exhaust this card to reduce the combined cost of the produced units by the number of unit upgrade technologies that you own."},
  {name:"Self Assembly Routines",type:"warfare",
   desc:"After 1 or more of your units use PRODUCTION, you may exhaust this card to place 1 mech from your reinforcements on a planet you control in that system. After 1 of your mechs is destroyed, gain 1 trade good."},
  // UNIT UPGRADES
  // UNIT UPGRADES
  {name:"Carrier II",type:"unit",
   desc:"Carrier: Move 2 · Capacity 6. SUSTAIN DAMAGE."},
  {name:"Cruiser II",type:"unit",
   desc:"Cruiser: Move 3 · Combat 5(×2). SUSTAIN DAMAGE."},
  {name:"Destroyer II",type:"unit",
   desc:"Destroyer: Combat 5(×2). ANTI-FIGHTER BARRAGE 5(×3)."},
  {name:"Dreadnought II",type:"unit",
   desc:"Dreadnought: Move 2 · Combat 5(×2) · Capacity 1. BOMBARDMENT 4(×3)."},
  {name:"Fighter II",type:"unit",
   desc:"Fighter: Move 3 · Combat 7. Does not count against capacity."},
  {name:"Infantry II",type:"unit",
   desc:"Infantry: Combat 6. Can be produced in space. PRODUCTION cost 1."},
  {name:"Mech",type:"unit",
   desc:"Mech: Ground combat 6(×2). SUSTAIN DAMAGE. Each faction has a unique Mech ability."},
  {name:"PDS II",type:"unit",
   desc:"PDS: SPACE CANNON 5(×3). Can fire at ships in adjacent systems."},
  {name:"Space Dock II",type:"unit",
   desc:"Space Dock: PRODUCTION 7. Can be placed in any system you control."},
  {name:"War Sun",type:"unit",
   desc:"War Sun: Move 2 · Combat 3(×3) · Capacity 6. SUSTAIN DAMAGE. BOMBARDMENT 3(×3). PLANETARY SHIELD ignored. Other players' PDS cannot use SPACE CANNON against your ships."},
  // FACTION
  {name:"Aerie Hololattice",type:"faction",
   desc:"Other players cannot move ships through systems that contain your structures. Each planet that contains 1 or more of your structures gains the PRODUCTION 1 ability as if it were a unit."},
  {name:"Aetherstream",type:"faction",
   desc:"After you or one of your neighbors activates a system that is adjacent to an anomaly, you may apply +1 to the move value of all of that player's ships during this tactical action."},
  {name:"Agency Supply Network",type:"faction",
   desc:"Once per action, when you resolve a unit's PRODUCTION ability, you may resolve another of your unit's PRODUCTION abilities in any system."},
  {name:"Bioplasmosis",type:"faction",
   desc:"At the end of the status phase, you may remove any number of infantry from planets you control and place them on 1 or more planets you control in the same or adjacent systems."},
  {name:"Chaos Mapping",type:"faction",
   desc:"Other players cannot activate asteroid fields that contain 1 or more of your ships. At the start of your turn during the action phase, you may produce 1 unit in a system that contains at least 1 of your units that has PRODUCTION."},
  {name:"Dimensional Splicer",type:"faction",
   desc:"At the start of space combat in a system that contains a wormhole and 1 or more of your ships, you may produce 1 hit and assign it to 1 of your opponent's ships."},
  {name:"E-Res Siphons",type:"faction",
   desc:"After another player activates a system that contains 1 or more of your ships, gain 4 trade goods."},
  {name:"Executive Order",type:"faction",
   desc:"ACTION: Exhaust this card and draw the top or bottom card of the agenda deck. Players immediately vote on this agenda as if you were the speaker; you can spend trade goods and resources on this agenda as if they were votes."},
  {name:"Genetic Recombination",type:"faction",
   desc:"Before a player casts votes on an agenda, you may exhaust this card; if you do, that player must cast at least 1 vote for the outcome of your choice."},
  {name:"Hegemonic Trade Policy \u03a9",type:"faction",
   desc:"Exhaust this card when 1 or more of your units use PRODUCTION; swap the resource and influence values of 1 planet you control during that use of PRODUCTION."},
  {name:"Hydrothermal Mining",type:"faction",
   desc:"At the start of the status phase, gain 1 trade good for each ocean card in play."},
  {name:"Impulse Core",type:"faction",
   desc:"At the start of a space combat, you may destroy 1 of your cruisers or destroyers in the active system to produce 1 hit against your opponent's ships; that hit must be assigned to a non-fighter ship if able."},
  {name:"Inheritance Systems",type:"faction",
   desc:"You may exhaust this card and spend 2 resources when you research a technology; if you do, ignore all of that technology's prerequisites."},
  {name:"Instinct Training",type:"faction",
   desc:"You may exhaust this card and spend 1 token from your strategy pool when another player plays an action card; cancel that action card."},
  {name:"L4 Disruptors",type:"faction",
   desc:"During an invasion, units cannot use SPACE CANNON against your units."},
  {name:"Mageon Implants",type:"faction",
   desc:"ACTION: Exhaust this card to look at another player's hand of action cards. Choose 1 of those cards and add it to your hand."},
  {name:"Magmus Reactor \u03a9",type:"faction",
   desc:"Your ships can move into supernovas. Each supernova that contains 1 or more of your units gains the PRODUCTION 5 ability as if it were 1 of your units."},
  {name:"Mirror Computing",type:"faction",
   desc:"When you spend trade goods, each trade good is worth 2 resources or influence instead of 1."},
  {name:"Nanomachines",type:"faction",
   desc:"ACTION: Exhaust this card to place 1 PDS on a planet you control. ACTION: Exhaust this card to repair all of your damaged units. ACTION: Exhaust this card and discard 1 action card to draw 1 action card."},
  {name:"Neural Parasite",type:"faction",
   desc:"At the start of the status phase, you may place 1 infantry from your reinforcements on a planet you control in your home system. Flip this card if the Obsidian faction is in play."},
  {name:"Neuroglaive",type:"faction",
   desc:"After another player activates a system that contains 1 or more of your ships, that player removes 1 token from their fleet pool and returns it to their reinforcements."},
  {name:"Noneuclid Shielding",type:"faction",
   desc:"When 1 of your units uses SUSTAIN DAMAGE, cancel 2 hits instead of 1."},
  {name:"Nullification Field",type:"faction",
   desc:"After another player activates a system that contains 1 or more of your ships, you may exhaust this card and spend 1 token from your strategy pool; immediately end that player's turn."},
  {name:"Plane Splitter",type:"faction",
   desc:"When you gain this card, put The Fracture into play. Flip this card if the Obsidian faction is in play."},
  {name:"Pre-Fab Arcologies",type:"faction",
   desc:"After you explore a planet, you may place 1 space dock or 1 PDS from your reinforcements on that planet."},
  {name:"Production Biomes",type:"faction",
   desc:"ACTION: Exhaust this card and spend 1 token from your strategy pool to gain 4 trade goods and choose 1 other player; that player gains 2 trade goods."},
  {name:"Proxima Targeting VI",type:"faction",
   desc:"Cancel 1 hit produced by BOMBARDMENT rolls made against your ground forces for each of your galvanized units present. At the start of a round of ground combat, you may resolve BOMBARDMENT 8(\u00d73) against your opponent's ground forces; if you do, make an identical roll against your own ground forces."},
  {name:"Quantum Datahub Node",type:"faction",
   desc:"At the end of the strategy phase, you may spend 1 token from your strategy pool and give another player 3 of your trade goods. If you do, give 1 of your strategy cards to that player and take 1 of their strategy cards."},
  {name:"Radical Advancement",type:"faction",
   desc:"At the start of the status phase, you may replace one of your non-unit upgrade technologies with a technology of the same color that has exactly 1 more prerequisite."},
  {name:"Salvage Operations",type:"faction",
   desc:"After you win or lose a space combat, gain 1 trade good; if you won, you may also produce 1 ship in that system of any ship type that was destroyed during the combat."},
  {name:"Spacial Conduit Cylinder",type:"faction",
   desc:"Once per round, after you activate a system, you may exhaust this card to treat that system as if it contains both an alpha and a beta wormhole until the end of that turn."},
  {name:"Subatomic Splicer",type:"faction",
   desc:"When one of your ships is destroyed, you may produce a ship of the same type at a space dock in your home system."},
  {name:"Supercharge",type:"faction",
   desc:"At the start of a combat round, you may exhaust this card to apply +1 to the result of each of your units' combat rolls until the end of that round."},
  {name:"Temporal Command Suite",type:"faction",
   desc:"After any player's agent becomes exhausted, you may exhaust this card to ready that agent; if you ready another player's agent, you may perform a transaction with that player."},
  {name:"Transparasteel Plating",type:"faction",
   desc:"During your turn of the action phase, players that have passed cannot play action cards."},
  {name:"Valefar Assimilator X",type:"faction",
   desc:"When you would gain a technology using a faction ability, you may place the 'X' assimilator token on a faction technology owned by that player instead. While that token is on a technology, this card gains that technology's text."},
  {name:"Valefar Assimilator Y",type:"faction",
   desc:"When you would gain a technology using a faction ability, you may place the 'Y' assimilator token on a faction technology owned by that player instead. While that token is on a technology, this card gains that technology's text."},
  {name:"Valkyrie Particle Weave",type:"faction",
   desc:"After making combat rolls during a round of ground combat, if your opponent produced 1 or more hits, you produce 1 additional hit."},
  {name:"Voidwatch",type:"faction",
   desc:"After a player moves ships into a system that contains 1 or more of your units, they must give you 1 promissory note from their hand, if able."},
  {name:"Vortex",type:"faction",
   desc:"ACTION: Exhaust this card to choose another player's non-structure unit in a system that is adjacent to 1 or more of your space docks. Capture 1 unit of that type from that player's reinforcements."},
  {name:"Wormhole Generator \u03a9",type:"faction",
   desc:"ACTION: Exhaust this card to place or move a Creuss wormhole token into either a system that contains a planet you control or a non-home system that does not contain another player's ships."},
  {name:"Yin Spinner \u03a9",type:"faction",
   desc:"After you produce units, place up to 2 infantry from your reinforcements on any planet you control or in any space area that contains 1 or more of your ships."},

];

const STARTING_TECH = {
  "The Arborec":["Magen Defense Grid"],
  "The Barony of Letnev":["Antimass Deflectors","Plasma Scoring"],
  "The Clan of Saar":["Antimass Deflectors"],
  "The Embers of Muaat":["Plasma Scoring"],
  "The Emirates of Hacan":["Antimass Deflectors","Sarween Tools"],
  "The Federation of Sol":["Neural Motivator","Antimass Deflectors"],
  "The Ghosts of Creuss":["Gravity Drive"],
  "The L1Z1X Mindnet":["Neural Motivator","Plasma Scoring"],
  "The Mentak Coalition":["Sarween Tools","Plasma Scoring"],
  "The Naalu Collective":["Sarween Tools","Neural Motivator"],
  "The Nekro Virus":["Dacxive Animators"],
  "Sardakk N'orr":[],
  "The Universities of Jol-Nar":["Neural Motivator","Antimass Deflectors","Sarween Tools","Plasma Scoring"],
  "The Winnu":[],
  "The Xxcha Kingdom":["Graviton Laser System"],
  "The Yin Brotherhood":["Sarween Tools"],
  "The Yssaril Tribes":["Neural Motivator"],
  "The Argent Flight":[],
  "The Empyrean":["Dark Energy Tap"],
  "The Mahact Gene-Sorcerers":["Bio-Stims","Predictive Intelligence"],
  "The Naaz-Rokha Alliance":["Psychoarchaeology","AI Development Algorithm"],
  "The Nomad":["Sling Relay"],
  "The Titans of Ul":["Antimass Deflectors","Scanlink Drone Network"],
  "The Vuil'raith Cabal":["Self Assembly Routines"],
  "The Council Keleres":[],
  "Last Bastion":[],
  "The Ral Nel Consortium":[],
  "The Deepwrought Scholarate":[],
  "The Crimson Rebellion":[],
  "The Firmament":[],
  "The Obsidian":[],
};

const FACTION_DATA = {
  "The Arborec": {
    home:"Nestphar", commodities:3, source:"base", difficulty:"High",
    abilities:[
      "MITOSIS: Your space docks cannot produce infantry. At the start of the status phase, place 1 infantry from your reinforcements on any planet you control."
    ],
    factionTechs:[
      {name:"Bioplasmosis",color:"biotic",text:"At the end of the status phase, you may remove any number of infantry from planets you control and place them on 1 or more planets you control in the same or adjacent systems."}
    ],
    flagship:"Duha Menaimon — Cost 8, Combat 7(×2), Move 1, Capacity 5, SUSTAIN DAMAGE. After you activate this system, you may produce up to 5 units in this system.",
    units:[
      "Letani Warrior I — Infantry. Cost 1(2), Combat 8, PRODUCTION 1.",
      "Letani Warrior II — Infantry. Cost 1(2), Combat 7, PRODUCTION 2. After this unit is destroyed, roll 1 die; on a 6+, place it on this card. At the start of your next turn, place units from this card on a planet you control."
    ],
    breakthrough:"ACTION: Exhaust this card to remove a command token from a system that contains 1 or more of your infantry and return it to your reinforcements. Then, place 1 infantry in that system.",
    mech:"Letani Behemoth — Cost 2, Combat 6, SUSTAIN DAMAGE, PRODUCTION 2, PLANETARY SHIELD. DEPLOY: When you use your MITOSIS faction ability, you may replace 1 of the placed infantry with 1 mech from your reinforcements.",
    leaders:{
      agent:"Letani Ospha — ACTION: Exhaust this card and choose a player's non-fighter ship; that player may replace that ship with one from their reinforcements that costs up to 2 more than the replaced ship.",
      commander:"Dirzuga Rophal — UNLOCK: Have 12 Ground Forces on Planets you control. ABILITY: After another player activates a system that contains 1 or more of your units that have PRODUCTION: You may produce 1 unit in that system.",
      hero:"Letani Miasmiala — ACTION: Produce any number of units in any number of systems that contain 1 or more of your ground forces. Then, purge this card."
    }
  },
  "The Barony of Letnev": {
    home:"Arc Prime / Wren-Mu", commodities:3, source:"base", difficulty:"Low",
    abilities:[
      "MUNITIONS RESERVES: At the start of each round of space combat, you may spend 2 trade goods; if you do, re-roll any number of your dice during that combat round.",
      "ARMADA: The maximum number of non-fighter ships you can have in each system is equal to 2 more than the number of tokens in your fleet pool."
    ],
    factionTechs:[
      {name:"L4 Disruptors",color:"cybernetic",text:"During an invasion, units cannot use SPACE CANNON against your units."},
      {name:"Noneuclid Shielding",color:"warfare",text:"When 1 of your units uses SUSTAIN DAMAGE, cancel 2 hits instead of 1."}
    ],
    flagship:"Arc Secundus — Cost 8, Combat 5(×2), Move 1, Capacity 3, SUSTAIN DAMAGE, BOMBARDMENT 5(×3). Other players' units in this system lose PLANETARY SHIELD. At the start of each space combat round, repair this ship.",
    units:[],
    breakthrough:"Before you roll dice during space combat, apply +X to the results of 1 of your ship's rolls, where X is the number of ship types you have in the combat. During movement, your non-fighter ships' move values are equal to the highest move value amongst moving ships in the system they started in.",
    mech:"Dunlain Reaper — Cost 2, Combat 6, SUSTAIN DAMAGE. DEPLOY: At the start of a round of ground combat: you may spend 2 resources to replace 1 of your infantry in that combat with 1 mech from your reinforcements.",
    leaders:{
      agent:"Viscount Unlenn — At the start of a Space Combat round: You may exhaust this card to choose 1 ship in the active system. That ship rolls 1 additional die during this combat round.",
      commander:"Rear Admiral Farran — UNLOCK: Have 5 non-fighter ships in 1 system. ABILITY: After 1 of your units uses SUSTAIN DAMAGE: You may gain 1 Trade Good.",
      hero:"Darktalon Treilla — ACTION: Place this card near the game board; the number of non-fighter ships you can have in systems is not limited by laws or by the number of command tokens in your fleet pool during this game round. At the end of that game round, purge this card."
    }
  },
  "The Clan of Saar": {
    home:"Lisis II / Ragh", commodities:3, source:"base", difficulty:"High",
    abilities:[
      "SCAVENGE: After you gain control of a planet, gain 1 trade good.",
      "NOMADIC: You can score objectives even if you do not control the planets in your home system."
    ],
    factionTechs:[
      {name:"Chaos Mapping",color:"biotic",text:"Other players cannot activate asteroid fields that contain 1 or more of your ships. At the start of your turn during the action phase, you may produce 1 unit in a system that contains at least 1 of your units that has PRODUCTION."}
    ],
    flagship:"Son of Ragh — Cost 8, Combat 5(×2), Move 1, Capacity 3, SUSTAIN DAMAGE, ANTI-FIGHTER BARRAGE 6(×4).",
    units:[
      "Floating Factory I — Space Dock. Move 1, Capacity 4, PRODUCTION 5. Placed in space area, not on a planet. Can move and retreat as a ship. Destroyed if blockaded.",
      "Floating Factory II — Space Dock. Move 2, Capacity 5, PRODUCTION 7. Placed in space area, not on a planet. Can move and retreat as a ship. Destroyed if blockaded."
    ],
    breakthrough:"ACTION: Exhaust this card and spend any amount of resources to choose a planet up to 2 systems away from an asteroid field that contains your ships; roll a number of dice equal to the amount spent, and assign 1 hit to a ground force on that planet for each roll of 4 or greater.",
    mech:"Scavenger Zeta — Cost 2, Combat 6, SUSTAIN DAMAGE. DEPLOY: After you gain control of a planet, you may spend 1 trade good to place 1 mech on that planet.",
    leaders:{
      agent:"Captain Mendosa — After a player activates a system: You may exhaust this card to increase the move value of 1 of that player's ships to match the move value of the ship on the game board that has the highest move value.",
      commander:"Rowl Sarrig — UNLOCK: Have 3 space docks on the game board. ABILITY: When you produce fighters or infantry: You may place each of those units at any of your space docks that are not blockaded.",
      hero:"Gurno Aggero — ACTION: Choose 1 system that is adjacent to 1 of your space docks. Destroy all other player's infantry and fighters in that system. Then, purge this card."
    }
  },
  "The Embers of Muaat": {
    home:"Muaat", commodities:4, source:"base", difficulty:"High",
    abilities:[
      "STAR FORGE: ACTION: Spend 1 token from your strategy pool to place either 2 fighters or 1 destroyer from your reinforcements in a system that contains 1 or more of your war suns.",
      "GASHLAI PHYSIOLOGY: Your ships can move through supernovas."
    ],
    factionTechs:[
      {name:"Magmus Reactor Ω",color:"warfare",text:"Your ships can move into supernovas. Each supernova that contains 1 or more of your units gains the PRODUCTION 5 ability as if it were 1 of your units."}
    ],
    flagship:"The Inferno — Cost 8, Combat 5(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. ACTION: Spend 1 token from your strategy pool to place 1 cruiser in this unit's system.",
    units:[
      "Prototype War Sun I — War Sun. Cost 12, Combat 3(×3), Move 1, Capacity 3, SUSTAIN DAMAGE, BOMBARDMENT 3(×3).",
      "Prototype War Sun II — War Sun. Cost 10, Combat 3(×3), Move 2, Capacity 6, SUSTAIN DAMAGE, BOMBARDMENT 3(×3). Other players' units in this system lose PLANETARY SHIELD."
    ],
    breakthrough:"When you gain this card, place the Avernus planet token into a non-home system that is adjacent to a planet you control; gain control of and ready it. After you move 1 of your war suns out of or through Avernus's system and into a non-home system, you may move the Avernus token with it.",
    mech:"Ember Colossus — Cost 2, Combat 6, SUSTAIN DAMAGE. When you use your STAR FORGE ability in this system or an adjacent system, you may place 1 infantry from your reinforcements with this unit.",
    leaders:{
      agent:"Umbat — ACTION: Exhaust this card to choose a player; that player may produce up to 2 units that each have a cost of 4 or less in a system that contains one of their war suns or their flagship.",
      commander:"Magmus — UNLOCK: Produce a War Sun. ABILITY: After you spend a token from your strategy pool: You may gain 1 trade good.",
      hero:"Adjudicator Ba'al — After you move a war sun into a non-home system other than Mecatol Rex: You may destroy all other players' units in that system and replace that system tile with the Muaat supernova tile. If you do, purge this card and each planet card that corresponds to the replaced system tile."
    }
  },
  "The Emirates of Hacan": {
    home:"Arretze / Kamdorn / Hercant", commodities:6, source:"base", difficulty:"Low",
    abilities:[
      "MASTERS OF TRADE: You do not have to spend a command token to resolve the secondary ability of the Trade strategy card.",
      "GUILD SHIPS: You can negotiate transactions with players who are not your neighbor.",
      "ARBITERS: When you are negotiating a transaction, action cards can be exchanged as part of that transaction."
    ],
    factionTechs:[
      {name:"Production Biomes",color:"biotic",text:"ACTION: Exhaust this card and spend 1 token from your strategy pool to gain 4 trade goods and choose 1 other player; that player gains 2 trade goods."},
      {name:"Quantum Datahub Node",color:"cybernetic",text:"At the end of the strategy phase, you may spend 1 token from your strategy pool and give another player 3 of your trade goods. If you do, give 1 of your strategy cards to that player and take 1 of their strategy cards."}
    ],
    flagship:"Wrath of Kenara — Cost 8, Combat 7(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. After you roll a die during a space combat in this system, you may spend 1 trade good to apply +1 to the result.",
    units:[],
    breakthrough:"When you produce 3 or more non-fighter ships, place 1 command token from your reinforcements into your fleet pool.",
    mech:"Pride of Kenara — Cost 2, Combat 6, SUSTAIN DAMAGE. This planet's card may be traded as part of a transaction. If you do, move all of your units from this planet to another planet you control.",
    leaders:{
      agent:"Carth of Golden Sands — During the action phase: You may exhaust this card to gain 2 commodities or replenish another player's commodities.",
      commander:"Gila the Silvertongue — UNLOCK: Have 10 Trade Goods. ABILITY: When you cast votes: You may spend any number of trade goods; cast 2 additional votes for each trade good spent.",
      hero:"Harrugh Gefhara — When 1 or more of your units use PRODUCTION: You may reduce the cost of each of your units to 0 during this use of PRODUCTION. If you do, purge this card."
    }
  },
  "The Federation of Sol": {
    home:"Jord / Arcturus", commodities:4, source:"base", difficulty:"Low",
    abilities:[
      "ORBITAL DROP: ACTION: Spend 1 token from your strategy pool to place 2 infantry from your reinforcements on 1 planet you control.",
      "VERSATILE: When you gain command tokens during the status phase, gain 1 additional command token."
    ],
    factionTechs:[],
    flagship:"Genesis — Cost 8, Combat 5(×2), Move 1, Capacity 12, SUSTAIN DAMAGE. At the start of the status phase, if this ship is on the board, place 1 infantry from your reinforcements in this system's space area.",
    units:[
      "Spec Ops I — Infantry. Cost 1(2), Combat 7.",
      "Spec Ops II — Infantry. Cost 1(2), Combat 6. After this unit is destroyed, roll 1 die; on a 5+, place it on this card. At the start of your next turn, place units from this card on a planet you control in your home system.",
      "Advanced Carrier I — Carrier. Cost 3, Combat 9, Move 2, Capacity 6.",
      "Advanced Carrier II — Carrier. Cost 3, Combat 9, Move 2, Capacity 8, SUSTAIN DAMAGE."
    ],
    breakthrough:"When you produce a ship that has capacity, you may also produce any combination of ground forces or fighters up to that ship's capacity; they do not count against your PRODUCTION limit.",
    mech:"ZS Thunderbolt M2 — Cost 2, Combat 6, SUSTAIN DAMAGE. DEPLOY: After you use your ORBITAL DROP ability, you may spend 3 resources to place 1 mech on that planet.",
    leaders:{
      agent:"Evelyn Delouis — At the start of a ground combat round: You may exhaust this card to choose 1 ground force in the active system; that ground force rolls 1 additional die during that combat round.",
      commander:"Claire Gibson — UNLOCK: Control planets that have a combined total of at least 12 resources. ABILITY: At the start of a ground combat on a planet you control: You may place 1 infantry from your reinforcements on that planet.",
      hero:"Jace X. 4th Air Legion — ACTION: Remove each of your command tokens from the game board and return them to your reinforcements. Then, purge this card."
    }
  },
  "The Ghosts of Creuss": {
    home:"Creuss (Wormhole system)", commodities:4, source:"base", difficulty:"High",
    abilities:[
      "QUANTUM ENTANGLEMENT: You treat all systems that contain either an alpha or beta wormhole as adjacent to each other. Game effects cannot prevent you from using this ability.",
      "SLIPSTREAM: During your tactical actions, apply +1 to the move value of each of your ships that starts its movement in your home system or in a system that contains either an alpha or beta wormhole.",
      "CREUSS RIFT: ACTION: Move the Creuss wormhole token to either a system that contains a planet you control or a non-home system that does not contain another player's ships."
    ],
    factionTechs:[
      {name:"Dimensional Splicer",color:"warfare",text:"At the start of space combat in a system that contains a wormhole and 1 or more of your ships, you may produce 1 hit and assign it to 1 of your opponent's ships."},
      {name:"Wormhole Generator Ω",color:"propulsion",text:"ACTION: Exhaust this card to place or move a Creuss wormhole token into either a system that contains a planet you control or a non-home system that does not contain another player's ships."}
    ],
    flagship:"Hil-Colish — Cost 8, Combat 5, Move 1, Capacity 3, SUSTAIN DAMAGE. This ship's system contains a delta wormhole. During movement, this ship may move before or after your other ships.",
    units:[],
    breakthrough:"Each wormhole in a system that contains your ships gains PRODUCTION 1 as if it were a unit you control. Reduce the combined cost of units you produce in systems that contain wormholes by 1 for each wormhole in that system.",
    mech:"Icarus Drive — Cost 2, Combat 6, SUSTAIN DAMAGE. After any player activates a system: you may remove this unit from the game board to place or move a Creuss wormhole token into this system.",
    leaders:{
      agent:"Emissary Taivra — After a player activates a system that contains a non-delta wormhole: You may exhaust this card; if you do, that system is adjacent to all other systems that contain a wormhole during this tactical action.",
      commander:"Sai Seravus — UNLOCK: Have units in 3 systems that contain alpha or beta wormholes. ABILITY: After your ships move: For each ship that has a capacity value and moved through 1 or more wormholes, you may place 1 fighter from your reinforcements with that ship if you have unused capacity in the active system.",
      hero:"Riftwalker Meian — ACTION: Swap the positions of any 2 systems that contain wormholes or your units, other than the Creuss system and the Wormhole Nexus. Then, purge this card."
    }
  },
  "The L1Z1X Mindnet": {
    home:"[0.0.0] / Darien", commodities:3, source:"base", difficulty:"Low",
    abilities:[
      "ASSIMILATE: When you gain control of a planet, replace each PDS and space dock on that planet with a matching unit from your reinforcements.",
      "HARROW: At the end of each round of ground combat, your ships in the active system may use their BOMBARDMENT abilities against your opponent's ground forces on the planet."
    ],
    factionTechs:[
      {name:"Inheritance Systems",color:"cybernetic",text:"You may exhaust this card and spend 2 resources when you research a technology; if you do, ignore all of that technology's prerequisites."}
    ],
    flagship:"0.0.1 | Tyrant — Cost 8, Combat 5(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. Other players' ships cannot use SUSTAIN DAMAGE against hits produced by your units.",
    units:[
      "Super-Dreadnought I — Dreadnought. Cost 4, Combat 5, Move 1, Capacity 2, SUSTAIN DAMAGE, BOMBARDMENT 5.",
      "Super-Dreadnought II — Dreadnought. Cost 4, Combat 4, Move 2, Capacity 2, SUSTAIN DAMAGE, BOMBARDMENT 4. This unit cannot be destroyed by \"Direct Hit\" action cards."
    ],
    breakthrough:"When you gain control of a planet, place infantry from your reinforcements equal to that planet's influence value on that planet.",
    mech:"Tyrant — Cost 2, Combat 6, SUSTAIN DAMAGE. BOMBARDMENT 5. After this unit is destroyed, place it in your home system's space area.",
    leaders:{
      agent:"I48S — After a player activates a system: You may exhaust this card to allow that player to replace 1 of their infantry in the active system with 1 mech from their reinforcements.",
      commander:"2RAM — UNLOCK: Have 4 dreadnoughts on the Board. ABILITY: Units that have PLANETARY SHIELD do not prevent you from using BOMBARDMENT.",
      hero:"The Helmsman — ACTION: Choose 1 system that does not contain other players' ships; you may move your flagship and any number of your dreadnoughts from other systems into the chosen system. Then, purge this card."
    }
  },
  "The Mentak Coalition": {
    home:"Moll Primus / Quinarra / Sakkara", commodities:2, source:"base", difficulty:"Medium",
    abilities:[
      "AMBUSH: At the start of a space combat, you may roll 1 die for each of up to 2 of your cruisers or destroyers in the system. For each result equal to or greater than that ship's combat value, produce 1 hit; your opponent must assign it to 1 of their ships.",
      "PILLAGE: After 1 of your neighbors gains trade goods or resolves a transaction, if they have 3 or more trade goods, you may take 1 of their trade goods or commodities."
    ],
    factionTechs:[
      {name:"Salvage Operations",color:"propulsion",text:"After you win or lose a space combat, gain 1 trade good; if you won, you may also produce 1 ship in that system of any ship type that was destroyed during the combat."},
      {name:"Mirror Computing",color:"cybernetic",text:"When you spend trade goods, each trade good is worth 2 resources or influence instead of 1."}
    ],
    flagship:"Fourth Moon — Cost 8, Combat 7(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. Other players' ships in this system cannot use SUSTAIN DAMAGE.",
    units:[],
    breakthrough:"If you have the Cruiser II unit upgrade technology, flip this card and place it on top of Cruiser II.",
    mech:"Moll Terminus — Cost 2, Combat 6, SUSTAIN DAMAGE. Other players' ground forces on this planet cannot use SUSTAIN DAMAGE.",
    leaders:{
      agent:"Suffi An — After the PILLAGE faction ability is used against another player: You may exhaust this card; if you do, you and that player each draw 1 action card.",
      commander:"S'Ula Mentarion — UNLOCK: Have 4 cruisers on the game board. ABILITY: After you win a space combat: You may force your opponent to give you 1 promissory note from their hand.",
      hero:"Ipswitch, Loose Cannon — At the start of space combat that you are participating in: You may purge this card; if you do, for each other player's ship that is destroyed during this combat, place 1 ship of that type from your reinforcements in the active system."
    }
  },
  "The Naalu Collective": {
    home:"Nar / Naalu Wormhole", commodities:3, source:"base", difficulty:"Medium",
    abilities:[
      "TELEPATHIC: At the end of the strategy phase, place the Naalu '0' token on your strategy card; you are first in initiative order.",
      "FORESIGHT: After another player moves ships into a system containing 1 or more of your ships, you may place 1 token from your strategy pool in an adjacent system without other players' ships; move your ships from the active system into that system."
    ],
    factionTechs:[
      {name:"Neuroglaive",color:"cybernetic",text:"After another player activates a system that contains 1 or more of your ships, that player removes 1 token from their fleet pool and returns it to their reinforcements."}
    ],
    flagship:"Matriarch — Cost 8, Combat 9(×2), Move 1, Capacity 6, SUSTAIN DAMAGE. During an invasion in this system, you may commit fighters to planets as if they were ground forces. When combat ends, return those units to the space area.",
    units:[
      "Hybrid Crystal Fighter I — Fighter. Cost 1×2, Combat 8.",
      "Hybrid Crystal Fighter II — Fighter. Cost 1×2, Combat 7. This unit may move without being transported. Each fighter in excess of your ships' capacity counts as 1/2 of a ship against your fleet pool."
    ],
    breakthrough:"When you would resolve the secondary ability of another player's strategy card, you may give them a promissory note to resolve it without spending a command token.",
    mech:"Iconoclast — Cost 2, Combat 6, SUSTAIN DAMAGE. During combat against an opponent who has at least 1 relic fragment, apply +2 to the results of this unit's combat rolls.",
    leaders:{
      agent:"Z'eu — After any player's command token is placed in a system: You may exhaust this card to return that token to that player's reinforcements.",
      commander:"M'aban — UNLOCK: Have ground forces in or adjacent to the Mecatol Rex system. ABILITY: At any time: You may look at your neighbours' hands of promissory notes and the top and bottom card of the agenda deck.",
      hero:"The Oracle — At the end of the status phase: You may force each other player to give you 1 promissory note from their hand. If you do, purge this card."
    }
  },
  "The Nekro Virus": {
    home:"Mordai II", commodities:3, source:"base", difficulty:"High",
    abilities:[
      "GALACTIC THREAT: You cannot vote on agendas. Once per agenda phase, after an agenda is revealed, you may predict aloud the outcome. If correct, gain 1 technology owned by a player who voted how you predicted.",
      "TECHNOLOGICAL SINGULARITY: Once per combat, after 1 of your opponent's units is destroyed, you may gain 1 technology owned by that player.",
      "PROPAGATION: You cannot research technology. When you would research a technology, gain 3 command tokens instead."
    ],
    factionTechs:[
      {name:"Valefar Assimilator X",color:"biotic",text:"When you would gain a technology using a faction ability, you may place the 'X' assimilator token on a faction technology owned by that player instead. While that token is on a technology, this card gains that technology's text."},
      {name:"Valefar Assimilator Y",color:"biotic",text:"When you would gain a technology using a faction ability, you may place the 'Y' assimilator token on a faction technology owned by that player instead. While that token is on a technology, this card gains that technology's text."}
    ],
    flagship:"The Alastor — Cost 8, Combat 9(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. At the start of a space combat, choose any number of your ground forces in this system to participate in that combat as if they were ships.",
    units:[],
    breakthrough:"When you would gain another player's technology using one of your faction abilities, you may instead place one of your \"Z\" assimilator tokens on that player's faction sheet. Your flagship gains the text abilities of that faction's flagship in addition to its own.",
    mech:"Mordred — Cost 2, Combat 6, SUSTAIN DAMAGE. During combat against an opponent who has an \"X\" or \"Y\" token on 1 or more of their technologies, apply +2 to the result of each of this unit's combat rolls.",
    leaders:{
      agent:"Nekro Malleon — During the action phase: You may exhaust this card to choose a player; that player may discard 1 action card or spend 1 command token from their command sheet to gain 2 trade goods.",
      commander:"Nekro Acidos — UNLOCK: Own 3 technologies. A \"Valefar Assimilator\" technology counts only if its X or Y token is on a technology. ABILITY: After you gain a technology: You may draw 1 action card.",
      hero:"UNIT.DSGN.FLAYESH — ACTION: Choose a planet that has a technology specialty in a system that contains your units. Destroy any other player's units on that planet. Gain trade goods equal to that planet's combined resource and influence values and gain 1 technology that matches the specialty of that planet. Then, purge this card."
    }
  },
  "Sardakk N'orr": {
    home:"Quinarra / Tren'lak", commodities:3, source:"base", difficulty:"High",
    abilities:[
      "UNRELENTING: Apply +1 to the result of each of your units' combat rolls."
    ],
    factionTechs:[
      {name:"Valkyrie Particle Weave",color:"warfare",text:"After making combat rolls during a round of ground combat, if your opponent produced 1 or more hits, you produce 1 additional hit."}
    ],
    flagship:"C'Morran N'orr — Cost 8, Combat 6(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. Apply +1 to the result of each of your other ship's combat rolls in this system.",
    units:[
      "Exotrireme I — Dreadnought. Cost 4, Combat 5, Move 1, Capacity 1, SUSTAIN DAMAGE, BOMBARDMENT 4(×2).",
      "Exotrireme II — Dreadnought. Cost 4, Combat 5, Move 2, Capacity 1, SUSTAIN DAMAGE, BOMBARDMENT 4(×2). This unit cannot be destroyed by \"Direct Hit\" action cards. After a round of space combat, you may destroy this unit to destroy up to 2 ships in this system."
    ],
    breakthrough:"After you win a combat, either gain 1 command token or research a unit upgrade technology.",
    mech:"Valkyrie Exoskeleton — Cost 2, Combat 6, SUSTAIN DAMAGE. After this unit uses its SUSTAIN DAMAGE ability during Ground Combat, it produces 1 hit against your opponent's ground forces on this planet.",
    leaders:{
      agent:"T'ro — At the end of a player's tactical action: You may exhaust this card; if you do, that player may place 2 infantry from their reinforcements on a planet they control in the active system.",
      commander:"G'hom Sek'kus — UNLOCK: Control 5 planets in non-home systems. ABILITY: During the \"Commit Ground Forces\" step: You can commit up to 1 ground force from each planet in the active system and each planet in adjacent systems that do not contain 1 of your command tokens.",
      hero:"Sh'val, Harbinger — After you move ships into the active system: You may skip directly to the \"Commit Ground Forces\" step. If you do, after you commit ground forces to land on planets, purge this card and return each of your ships in the active system to your reinforcements."
    }
  },
  "The Universities of Jol-Nar": {
    home:"Jol / Nar", commodities:4, source:"base", difficulty:"Low",
    abilities:[
      "FRAGILE: Apply -1 to the result of each of your units' combat rolls.",
      "BRILLIANT: When you spend a command token to resolve the secondary ability of the Technology strategy card, you may resolve the primary ability instead.",
      "ANALYTICAL: When you research a technology that is not a unit upgrade technology, you may ignore 1 prerequisite."
    ],
    factionTechs:[
      {name:"E-Res Siphons",color:"cybernetic",text:"After another player activates a system that contains 1 or more of your ships, gain 4 trade goods."},
      {name:"Spacial Conduit Cylinder",color:"warfare",text:"Once per round, after you activate a system, you may exhaust this card to treat that system as if it contains both an alpha and a beta wormhole until the end of that turn."}
    ],
    flagship:"J.N.S. Hylarim — Cost 8, Combat 6(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. When making combat rolls for this ship, each result of 9 or 10, before applying modifiers, produces 2 additional hits.",
    units:[],
    breakthrough:"When you research technology using the \"Technology\" strategy card, you may exhaust a planet that has a technology speciality instead of spending resources; if you do you must research a technology of that colour.",
    mech:"Shield Paling — Cost 2, Combat 6, SUSTAIN DAMAGE. Your infantry on this planet are not affected by your FRAGILE faction ability.",
    leaders:{
      agent:"Doctor Sucaban — When a player spends resources to research: You may exhaust this card to allow that player to remove any number of their infantry from the game board. For each unit removed, reduce the resources spent by 1.",
      commander:"Agnlan Oln — UNLOCK: Own 8 technologies. ABILITY: After you roll dice for a unit ability: You may reroll any of those dice.",
      hero:"Rin, The Master's Legacy — ACTION: For each non-unit upgrade technology you own, you may replace that technology with any technology of the same color from the deck. Then, purge this card."
    }
  },
  "The Winnu": {
    home:"Winnu", commodities:3, source:"base", difficulty:"High",
    abilities:[
      "RECLAMATION: After you gain control of Mecatol Rex, you may place 1 PDS and 1 space dock from your reinforcements on Mecatol Rex.",
      "BLOOD TIES: You do not have to spend influence to remove the Custodians token from Mecatol Rex."
    ],
    factionTechs:[
      {name:"Hegemonic Trade Policy Ω",color:"cybernetic",text:"Exhaust this card when 1 or more of your units use PRODUCTION; swap the resource and influence values of 1 planet you control during that use of PRODUCTION."},
      {name:"Lazax Gate Folding",color:"propulsion",text:"During your tactical actions, if you do not control Mecatol Rex, treat its system as if it contains both an alpha and beta wormhole. ACTION: If you control Mecatol Rex, exhaust this card to place 1 infantry from your reinforcements on Mecatol Rex."}
    ],
    flagship:"Salai Sai Corian — Cost 8, Combat 7, Move 1, Capacity 3, SUSTAIN DAMAGE. When this unit makes a combat roll, it rolls a number of dice equal to the number of your opponent's non-fighter ships in this system.",
    units:[],
    breakthrough:"Apply +1 to the results of each of your unit's combat rolls for each \"Support for the Throne\" in your opponent's play area. After you activate a system that contains a legendary planet, apply +1 to the move value of 1 of your ships during this tactical action.",
    mech:"Reclaimer — Cost 2, Combat 6, SUSTAIN DAMAGE. After you resolve a tactical action where you gained control of this planet, you may place 1 PDS or 1 Space Dock from your reinforcements on this planet.",
    leaders:{
      agent:"Berekar Berekon — When 1 or more of a player's units use PRODUCTION: You may exhaust this card to reduce the combined cost of the produced units by 2.",
      commander:"Rickar Rickani — UNLOCK: Control Mecatol Rex or enter into a combat in the Mecatol Rex system. ABILITY: During combat: Apply +2 to the result of each of your unit's combat rolls in the Mecatol Rex system, your home system, and each system that contains a legendary planet.",
      hero:"Mathis Mathinus — ACTION: Perform the primary ability of any strategy card. Then, choose any number of other players. Those players may perform the secondary ability of that strategy card. Then, purge this card."
    }
  },
  "The Xxcha Kingdom": {
    home:"Xxcha / Archon Ren / Archon Tau", commodities:4, source:"base", difficulty:"Low",
    abilities:[
      "QUASH: After an agenda is revealed, you may spend 1 token from your strategy pool to discard that agenda and reveal the next.",
      "PEACE ACCORDS: After you resolve the primary or secondary ability of the Diplomacy strategy card, you may gain control of 1 planet other than Mecatol Rex that does not contain any units and is in a system adjacent to your ships."
    ],
    factionTechs:[
      {name:"Instinct Training",color:"biotic",text:"You may exhaust this card and spend 1 token from your strategy pool when another player plays an action card; cancel that action card."},
      {name:"Nullification Field",color:"warfare",text:"After another player activates a system that contains 1 or more of your ships, you may exhaust this card and spend 1 token from your strategy pool; immediately end that player's turn."}
    ],
    flagship:"Loncara Ssodu — Cost 8, Combat 7(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. SPACE CANNON 5(×3). You may use this unit's SPACE CANNON against ships that are in adjacent systems.",
    units:[],
    breakthrough:"You can spend influence as if it were resources. You can spend resources as if it were influence.",
    mech:"Indomitus — Cost 2, Combat 6, SUSTAIN DAMAGE, SPACE CANNON 8. When this unit uses SPACE CANNON, hits may be assigned to ships in adjacent systems.",
    leaders:{
      agent:"Ggrocuto Rinn — ACTION: Exhaust this card to ready any planet; if that planet is in a system that is adjacent to a planet you control, you may remove 1 infantry from that planet and return it to its reinforcements.",
      commander:"Elder Qanoj — UNLOCK: Control planets that have a combined value of at least 12 influence. ABILITY: Each planet you exhaust to cast votes provides 1 additional vote. Game effects cannot prevent you from voting on an agenda.",
      hero:"Xxekir Grom — ACTION: Place any combination of up to 4 PDS or mechs onto planets you control; ready each planet that you place a unit on. Then, purge this card."
    }
  },
  "The Yin Brotherhood": {
    home:"Darien", commodities:2, source:"base", difficulty:"Low",
    abilities:[
      "INDOCTRINATION: After any player's unit is destroyed in ground combat on a planet you control, you may spend 2 trade goods to replace that unit with 1 infantry from your reinforcements.",
      "DEVOTION: At the end of the status phase, choose 1 other player and destroy 1 of your ships in a system that contains that player's ships."
    ],
    factionTechs:[
      {name:"Yin Spinner Ω",color:"biotic",text:"After you produce units, place up to 2 infantry from your reinforcements on any planet you control or in any space area that contains 1 or more of your ships."},
      {name:"Impulse Core",color:"propulsion",text:"At the start of a space combat, you may destroy 1 of your cruisers or destroyers in the active system to produce 1 hit against your opponent's ships; that hit must be assigned to a non-fighter ship if able."}
    ],
    flagship:"Van Hauge — Cost 8, Combat 9(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. When this ship is destroyed, destroy all ships in this system.",
    units:[],
    breakthrough:"When you gain this card or score a public objective, gain the alliance ability of a random, unused faction.",
    mech:"Moyin's Ashes — Cost 2, Combat 6, SUSTAIN DAMAGE. DEPLOY: When you use your INDOCTRINATION faction ability, you may spend 1 additional influence to replace your opponent's unit with 1 mech instead of 1 infantry.",
    leaders:{
      agent:"Brother Milor — ACTION: After a player's unit is destroyed during combat: You may exhaust this card to allow that player to place 2 fighters in the destroyed unit's system if it was a ship, or 2 infantry on its planet if it was a ground force.",
      commander:"Brother Omar — UNLOCK: Use one of your faction abilities. ABILITY: This card satisfies a green technology prerequisite. When you research technology owned by another player, you may return 1 of your infantry to reinforcements to ignore all prerequisites.",
      hero:"Dannel of the Tenth — ACTION: Commit up to 3 infantry from your reinforcements to any non-home planets and resolve ground combats on those planets; players cannot use SPACE CANNON against these units. Then, purge this card."
    }
  },
  "The Yssaril Tribes": {
    home:"Yssaril / Retillion / Shalloq", commodities:3, source:"base", difficulty:"Low",
    abilities:[
      "STALL TACTICS: ACTION: Exhaust this card to draw 1 action card.",
      "CRAFTY: You may have any number of action cards in your hand.",
      "SCHEMING: When you draw action cards, draw 1 additional action card. Then, discard 1 action card."
    ],
    factionTechs:[
      {name:"Transparasteel Plating",color:"biotic",text:"During your turn of the action phase, players that have passed cannot play action cards."},
      {name:"Mageon Implants",color:"biotic",text:"ACTION: Exhaust this card to look at another player's hand of action cards. Choose 1 of those cards and add it to your hand."}
    ],
    flagship:"Y'sia Y'ssrila — Cost 8, Combat 5(×2), Move 2, Capacity 3, SUSTAIN DAMAGE. This ship can move through systems that contain other player's ships.",
    units:[],
    breakthrough:"You can allow other players to use your STALL TACTICS or SCHEMING faction abilities; when you do, you may resolve a transaction with that player. During the action phase, that transaction does not count against the once-per-player transactions limit for that turn.",
    mech:"Blackshade Infiltrator — Cost 2, Combat 6, SUSTAIN DAMAGE. DEPLOY: After you use your STALL TACTICS faction ability, you may place 1 mech on a planet you control.",
    leaders:{
      agent:"Ssruu — This card has the text ability of each other player's agent, even if that agent is exhausted.",
      commander:"So Ata — UNLOCK: Have 7 action cards. ABILITY: After another player activates a system that contains your units: You may look at that player's action cards, promissory notes, or secret objectives.",
      hero:"Kyver, Blade and Key — ACTION: Each other player shows you 1 action card from their hand. For each player, you may either take that card or force that player to discard 3 random action cards from their hand. Then, purge this card."
    }
  },
  "The Argent Flight": {
    home:"Rin / Arcturus", commodities:3, source:"pok", difficulty:"Low",
    abilities:[
      "ZEAL: You always vote first during the agenda phase. When you cast at least 1 vote, cast 1 additional vote for each player in the game including you.",
      "RAID FORMATION: When 1 or more of your units uses ANTI-FIGHTER BARRAGE, for each hit produced in excess of your opponent's Fighters, choose 1 of your opponent's ships that has SUSTAIN DAMAGE to become damaged."
    ],
    factionTechs:[
      {name:"Aerie Hololattice",color:"propulsion",text:"Other players cannot move ships through systems that contain your structures. Each planet that contains 1 or more of your structures gains the PRODUCTION 1 ability as if it were a unit."}
    ],
    flagship:"Quetzecoatl — Cost 8, Combat 7(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. Other players cannot use SPACE CANNON against your ships in this system.",
    units:[
      "Strike Wing Alpha I — Destroyer. Cost 1, Combat 8, Move 2, Capacity 1, ANTI-FIGHTER BARRAGE 9(×2).",
      "Strike Wing Alpha II — Destroyer. Cost 1, Combat 7, Move 2, Capacity 1, ANTI-FIGHTER BARRAGE 6(×3). On 9 or 10 from barrage, also destroys 1 infantry in the space area."
    ],
    breakthrough:"When you activate a system that contains only your units, you may place command tokens from your reinforcements into any system adjacent to that system that contain only your units; at the end of this action, you may move ships among the active system and systems adjacent to it that contain your command tokens.",
    mech:"Aerie Sentinel — Cost 2, Combat 6, SUSTAIN DAMAGE. This unit does not count against capacity if it is being transported or if it is in a space area with 1 or more of your ships that have capacity values.",
    leaders:{
      agent:"Trillossa Aun Mirik — When a player produces ground forces in a system: You may exhaust this card; that player may place those units on any planets they control in that system and any adjacent systems.",
      commander:"Trrakan Aun Zulok — UNLOCK: Have 6 units that have ANTI-FIGHTER BARRAGE, SPACE CANNON or BOMBARDMENT on the game board. ABILITY: When 1 or more of your units make a roll for a unit ability: You may choose 1 of those units to roll 1 additional die.",
      hero:"Mirik Aun Sissiri — ACTION: Move any number of your ships from any systems to any number of other systems that contain 1 of your command tokens and no other players' ships. Then, purge this card."
    }
  },
  "The Empyrean": {
    home:"Empyrean (Wormhole system)", commodities:4, source:"pok", difficulty:"High",
    abilities:[
      "VOIDBORN: Nebulae do not affect your ships' movement.",
      "AETHERPASSAGE: After a player activates a system, you may allow that player to move their ships through systems that contain your ships.",
      "DARK WHISPERS: During setup, take the additional Empyrean faction promissory note; you have 2 faction promissory notes."
    ],
    factionTechs:[
      {name:"Aetherstream",color:"propulsion",text:"After you or one of your neighbors activates a system that is adjacent to an anomaly, you may apply +1 to the move value of all of that player's ships during this tactical action."},
      {name:"Voidwatch",color:"biotic",text:"After a player moves ships into a system that contains 1 or more of your units, they must give you 1 promissory note from their hand, if able."}
    ],
    flagship:"Dynamo — Cost 8, Combat 5(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. After any player's unit in this system or an adjacent system uses SUSTAIN DAMAGE, you may spend 2 influence to repair that unit.",
    units:[],
    breakthrough:"When you activate a system that contains or is adjacent to a unit or planet you control, you may place or move 1 of your void tether tokens onto a border that system shares with another system; other players do not treat those systems as adjacent to each other unless you allow it.",
    mech:"Watcher — Cost 2, Combat 6, SUSTAIN DAMAGE. You may remove this unit from a system that contains or is adjacent to another player's units to cancel an action card played by that player.",
    leaders:{
      agent:"Acamar — After a player moves ships into a system that does not contain any planets: You may exhaust this card; that player gains 1 command token.",
      commander:"Xuange — UNLOCK: Be neighbors with all other players. ABILITY: After another player moves ships into a system that contains 1 of your command tokens: You may return that token to your reinforcements.",
      hero:"Conservator Procyon — ACTION: Place 1 frontier token in each system that does not contain any planets and does not already have a frontier token. Then, explore each frontier token that is in a system that contains 1 or more of your ships. Then, purge this card."
    }
  },
  "The Mahact Gene-Sorcerers": {
    home:"Ixth", commodities:3, source:"pok", difficulty:"High",
    abilities:[
      "EDICT: When you win a combat, place 1 command token from your opponent's reinforcements in your fleet pool if it does not already contain 1 of that player's tokens; other player's tokens in your fleet pool increase your fleet limit but cannot be redistributed.",
      "IMPERIA: While another player's command token is in your fleet pool, you can use the ability of that player's commander, if it is unlocked.",
      "HUBRIS: During setup, purge your \"Alliance\" promissory note. Other players cannot give you their \"Alliance\" promissory note."
    ],
    factionTechs:[
      {name:"Genetic Recombination",color:"biotic",text:"Before a player casts votes on an agenda, you may exhaust this card; if you do, that player must cast at least 1 vote for the outcome of your choice."}
    ],
    flagship:"Arvicon Rex — Cost 8, Combat 5(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. During combat against an opponent whose command token is not in your fleet pool, apply +2 to the results of this unit's combat rolls.",
    units:[
      "Crimson Legionnaire I — Infantry. Cost 1×2, Combat 8. After this unit is destroyed, gain 1 commodity or convert 1 of your commodities to a trade good.",
      "Crimson Legionnaire II — Infantry. Cost 1×2, Combat 7. After this unit is destroyed, gain 1 commodity or convert 1 of your commodities to a trade good. Then, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your home system."
    ],
    breakthrough:"ACTION: Exhaust this card and purge 1 of your technologies to gain 1 relic.",
    mech:"Starlancer — Cost 2, Combat 6, SUSTAIN DAMAGE. After a player whose command token is in your fleet pool activates this system, you may spend their token from your fleet pool to end their turn; they gain that token.",
    leaders:{
      agent:"Jae Mir Kan — When you would spend a command token during the secondary ability of a strategic action: You may exhaust this card to remove 1 of the active player's command tokens from the board and use it instead.",
      commander:"Il Na Viroset — UNLOCK: Have 2 other factions' command tokens in your fleet pool. ABILITY: During your tactical actions, you can activate systems that contain your command tokens. If you do, return both command tokens to your reinforcements and end your turn.",
      hero:"Airo Shir Aur — ACTION: Move all units in the space area of any system to an adjacent system that contains a different player's ships. Space Combat is resolved in that system; neither player can retreat or resolve abilities that would move their ships. Then, purge this card."
    }
  },
  "The Naaz-Rokha Alliance": {
    home:"Naazir / Rokha", commodities:3, source:"pok", difficulty:"Low",
    abilities:[
      "DISTANT SUNS: When you explore a planet that contains 1 of your mechs, you may draw 1 additional card; choose 1 to resolve and discard the rest.",
      "FABRICATION: ACTION: Either purge 2 of your relic fragments of the same type to gain 1 relic; or purge 1 of your relic fragments to gain 1 command token."
    ],
    factionTechs:[
      {name:"Supercharge",color:"biotic",text:"At the start of a combat round, you may exhaust this card to apply +1 to the result of each of your units' combat rolls until the end of that round."},
      {name:"Pre-Fab Arcologies",color:"biotic",text:"After you explore a planet, you may place 1 space dock or 1 PDS from your reinforcements on that planet."}
    ],
    flagship:"Visz el Vir — Cost 8, Combat 9(×2), Move 1, Capacity 4, SUSTAIN DAMAGE. Your mechs in this system roll 1 additional die during combat.",
    units:[],
    breakthrough:"When you have 4 mechs in the same system, you may return 3 of those mechs to your reinforcements to flip this card and place it on top of your mech card.",
    mech:[
      "Eidolon — Cost 2, Combat 6(×2), SUSTAIN DAMAGE. If this unit is in the space area of the active system at the start of a space combat, flip this card.",
      "Z-Grav Eidolon — Cost 2, Combat 8(×2). If this unit is in the space area of the active system, it is also a ship. At the end of a space battle in the active system, flip this card."
    ],
    leaders:{
      agent:"Garv and Gunn — At the end of a player's turn: You may exhaust this card to allow that player to explore 1 of their planets.",
      commander:"Dart and Tai — UNLOCK: Have 3 mechs in 3 systems. ABILITY: After you gain control of a planet that was controlled by another player: You may explore that planet.",
      hero:"Hesh and Prit — ACTION: Gain 1 relic and perform the secondary ability of up to 2 readied or unchosen strategy cards; during this action, spend command tokens from your reinforcements instead of your strategy pool. Then, purge this card."
    }
  },
  "The Nomad": {
    home:"Arcturus", commodities:4, source:"pok", difficulty:"Low",
    abilities:[
      "THE COMPANY: During setup, take the 2 additional Nomad faction agents; you have 3 agents.",
      "FUTURE SIGHT: During the agenda phase, after an outcome that you voted for or predicted is resolved, gain 1 trade good."
    ],
    factionTechs:[
      {name:"Temporal Command Suite",color:"propulsion",text:"After any player's agent becomes exhausted, you may exhaust this card to ready that agent; if you ready another player's agent, you may perform a transaction with that player."}
    ],
    flagship:[
      "The Memoria — Cost 8, Combat 7(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. ANTI-FIGHTER BARRAGE 8(×3). You may treat this unit as if it were adjacent to systems that contain one or more of your mechs.",
      "The Memoria II — Cost 8, Combat 5(×2), Move 2, Capacity 6, SUSTAIN DAMAGE. ANTI-FIGHTER BARRAGE 5(×3). You may treat this unit as if it were adjacent to systems that contain one or more of your mechs."
    ],
    units:[],
    breakthrough:"At the start of any player's turn, you may exhaust 1 of your agents to ready any other agent.",
    mech:"Quantum Manipulator — Cost 2, Combat 6, SUSTAIN DAMAGE. While this unit is in a space area during combat, you may use its SUSTAIN DAMAGE ability to cancel a hit that is produced against your ships in this system.",
    leaders:{
      agent:[
        "Artuno the Betrayer — When you gain trade goods from the supply: You may exhaust this card to place an equal number of trade goods on this card. When this card readies, gain the trade goods on this card.",
        "Field Marshal Mercer — At the end of a player's turn: You may exhaust this card to allow that player to remove up to 2 of their ground forces from the game board and place them on planets they control in the active system.",
        "The Thundarian — After the \"Roll Dice\" step of combat: You may exhaust this card. If you do, hits are not assigned to either players' units. Return to the start of this combat round's \"Roll Dice\" step."
      ],
      commander:"Navarch Feng — UNLOCK: Have 1 scored secret objective. ABILITY: You can produce your flagship without spending resources.",
      hero:"Ahk-Syl Siven — ACTION: Place this card near the game board; your flagship and units it transports can move out of systems that contain your command tokens during this game round. At the end of that game round, purge this card."
    }
  },
  "The Titans of Ul": {
    home:"Elysium / Ul", commodities:2, source:"pok", difficulty:"High",
    abilities:[
      "AWAKEN: After you activate a system that contains 1 or more of your sleeper tokens, you may replace each of those tokens with 1 PDS from your reinforcements.",
      "TERRAGENESIS: After you explore a planet that does not have a sleeper token, you may place or move 1 sleeper token onto that planet.",
      "COALESCENCE: If your flagship or AWAKEN places your units into the same space area or onto the same planet as another player's units, your units must participate in combat."
    ],
    factionTechs:[],
    flagship:"Ouranos — Cost 8, Combat 7(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. DEPLOY: After you activate a system that contains 1 or more of your PDS, you may replace 1 of those PDS with this unit.",
    units:[
      "Hel-Titan I — PLANETARY SHIELD. SPACE CANNON 6. SUSTAIN DAMAGE. PRODUCTION 1. This unit is treated as both a structure and a ground force. It cannot be transported.",
      "Hel-Titan II — PLANETARY SHIELD. SPACE CANNON 5. SUSTAIN DAMAGE. PRODUCTION 1. This unit is treated as both a structure and a ground force. It cannot be transported. You may use this unit's SPACE CANNON against ships that are adjacent to this unit's system.",
      "Saturn Engine I — Cost 2, Combat 7, Move 2, Capacity 1.",
      "Saturn Engine II — Cost 2, Combat 6, Move 3, Capacity 2, SUSTAIN DAMAGE."
    ],
    breakthrough:"When COALESCENCE results in a ground combat, if you commit no other units, you may choose for your units to coexist instead. During the status phase, for each player you are coexisting with, you and that player each draw 1 additional action card. Other players may allow you to place a sleeper token on a planet they control.",
    mech:"Hecatoncheires — Cost 2, Combat 6, SUSTAIN DAMAGE. DEPLOY: When you would place a PDS on a planet, you may place 1 mech and 1 infantry on that planet instead.",
    leaders:{
      agent:"Tellurian — When a hit is produced against a unit: You may exhaust this card to cancel that hit.",
      commander:"Tungstantus — UNLOCK: Have 5 structures on the game board. ABILITY: When 1 or more of your units use PRODUCTION: You may gain 1 trade good.",
      hero:"Ul The Progenitor — ACTION: Ready Elysium and attach this card to it. Its resource and influence values are each increased by 3, and it gains the SPACE CANNON 5(×3) ability as if it were a unit."
    }
  },
  "The Vuil'raith Cabal": {
    home:"Kraag / Valk", commodities:3, source:"pok", difficulty:"High",
    abilities:[
      "DEVOUR: Capture your opponent's non-structure units that are destroyed during combat.",
      "RIFTMELD: When you research a unit upgrade technology, you may return 1 captured unit of that type to ignore all of the technology's prerequisites.",
      "AMALGAMATION: When you produce a unit, you may return 1 captured unit of that type to produce that unit without spending resources."
    ],
    factionTechs:[
      {name:"Vortex",color:"cybernetic",text:"ACTION: Exhaust this card to choose another player's non-structure unit in a system that is adjacent to 1 or more of your space docks. Capture 1 unit of that type from that player's reinforcements."}
    ],
    flagship:"Terror Between — Cost 8, Combat 5(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. BOMBARDMENT 5. Capture all other non-structure units that are destroyed in this system, including your own.",
    units:[
      "Dimensional Tear I — Space Dock. PRODUCTION 5. This system is a gravity rift; your ships do not roll for this gravity rift. Place a dimensional tear token beneath this unit as a reminder. Up to 6 fighters in this system do not count against your ships' capacity.",
      "Dimensional Tear II — Space Dock. PRODUCTION 7. This system is a gravity rift; your ships do not roll for this gravity rift. Place a dimensional tear token beneath this unit as a reminder. Up to 12 fighters in this system do not count against your ships' capacity."
    ],
    breakthrough:"This breakthrough causes The Fracture to enter play without a roll, if it is not already in play. After this card enters play, move up to 2 ingress tokens into systems that contain gravity rifts. Apply +1 to the Move value of each of your ships that start their movement in The Fracture.",
    mech:"Reanimator — Cost 2, Combat 6, SUSTAIN DAMAGE. When your infantry on this planet are destroyed, place them on your faction sheet; those units are captured.",
    leaders:{
      agent:"The Stillness of Stars — After another player replenishes commodities: You may exhaust this card to convert their commodities to trade goods and capture 1 unit from their reinforcements that has a cost equal to or lower than their commodity value.",
      commander:"That Which Molds Flesh — UNLOCK: Have units in 3 Gravity Rifts. ABILITY: When you produce fighter or infantry units: Up to 2 of those units do not count against your PRODUCTION limit.",
      hero:"It Feeds on Carrion — ACTION: Each other player rolls a die for each of their non-fighter ships that are in or adjacent to a system that contains a dimensional tear; on a 1-3, capture that unit. If this causes a player's ground forces or fighters to be removed, also capture those units. Then, purge this card."
    }
  },
  "The Council Keleres": {
    home:"Chosen (Mentak / Xxcha / Argent Flight)", commodities:4, source:"codex", difficulty:"Medium",
    abilities:[
      "THE TRIBUNII: During setup, choose a Keleres hero that corresponds to an unused faction; take that faction's home system, command tokens and control tokens. The unchosen Keleres heroes are not used.",
      "COUNCIL PATRONAGE: Replenish your commodities at the start of the strategy phase, then gain 1 trade good.",
      "LAW'S ORDER: You may spend 1 trade good or 1 commodity at the start of any player's turn to treat all laws as blank until the end of that turn."
    ],
    factionTechs:[
      {name:"Agency Supply Network",color:"biotic",text:"Once per action, when you resolve a unit's PRODUCTION ability, you may resolve another of your unit's PRODUCTION abilities in any system."},
      {name:"Executive Order",color:"cybernetic",text:"ACTION: Exhaust this card and draw the top or bottom card of the agenda deck. Players immediately vote on this agenda as if you were the speaker; you can spend trade goods and resources on this agenda as if they were votes."}
    ],
    flagship:"Artemiris — Cost 8, Combat 7(×2), Move 1, Capacity 6, SUSTAIN DAMAGE. Other players must spend 2 influence to activate this system.",
    units:[],
    breakthrough:"When you gain this card, gain the Custodia Vigilia planet card and its legendary planet ability card. You are neighbors with all players that have units or control planets in or adjacent to the Mecatol Rex system.",
    mech:"Omniopiares — Cost 2, Combat 6, SUSTAIN DAMAGE. Other players must spend 1 influence to commit ground forces to the planet that contains this unit.",
    leaders:{
      agent:"Xander Alexin Victori III — At any time: You may exhaust this card to allow any player to spend commodities as if they were trade goods.",
      commander:"Suffi An — UNLOCK: Spend 1 trade good after you play an action card that has a component action. ABILITY: After you perform a component action: You may perform an additional action.",
      hero:[
        "Kuuasi Aun Jalatai — At the start of a round of space combat in a system that contains a planet you control: Place your flagship and any combination of up to 2 cruisers or destroyers from your reinforcements in the active system. Then, purge this card.",
        "Odlynn Myrr — After an agenda is revealed: You may cast up to 6 additional votes on this agenda. Predict aloud an outcome for this agenda. For each player that abstains or votes for another outcome, gain 1 trade good and 1 command token. Then, purge this card.",
        "Harka Leeds — ACTION: Reveal cards from the action card deck until you reveal 3 action cards that have component actions. Draw those cards and shuffle the rest back into the action card deck. Then, purge this card."
      ]
    }
  },
  "Last Bastion": {
    home:"Bastion / Ordinian", commodities:3, source:"te", difficulty:"Low",
    abilities:[
      "LIBERATE: When you gain control of a planet, ready that planet if it contains a number of your infantry equal to or greater than that planet's resource value; otherwise, place 1 infantry on that planet.",
      "GALVANIZE: When a game effect instructs a player to galvanize a unit, they place a galvanize token beneath it, if it does not have one. Galvanized units roll 1 additional die for combat rolls and unit abilities.",
      "PHOENIX STANDARD: At the end of combat, you may galvanize 1 of your units that participated."
    ],
    factionTechs:[
      {name:"Proxima Targeting VI",color:"warfare",text:"Cancel 1 hit produced by BOMBARDMENT rolls made against your ground forces for each of your galvanized units present. At the start of a round of ground combat, you may resolve BOMBARDMENT 8(×3) against your opponent's ground forces; if you do, make an identical roll against your own ground forces."}
    ],
    flagship:"The Egeiro — Cost 8, Combat 9, Move 1, Capacity 3, SUSTAIN DAMAGE. PRODUCTION 1. Apply +1 to the results of each of this unit's combat rolls for each non-home system that contains a planet you control.",
    units:[
      "4X41C \"HELIOS\" V1 — Space Dock. PRODUCTION X. This unit's PRODUCTION value is equal to 2 more than the resource value of this planet. The resource value of this planet is increased by 1. Up to 3 fighters in this system do not count against your ships' capacity.",
      "4X41C \"HELIOS\" V2 — Space Dock. PRODUCTION X. This unit's PRODUCTION value is equal to 4 more than the resource value of this planet. The resource value of this planet is increased by 2. Up to 3 fighters in this system do not count against your ships' capacity."
    ],
    breakthrough:"When you produce ships, you may exhaust this card to place those ships in a system that contains one of your command tokens, at least one of your ground forces, and no other player's ships.",
    mech:"A3 Valiance — Cost 2, Combat 6, SUSTAIN DAMAGE. When this unit is destroyed, if it was galvanized, galvanize up to 3 of your infantry in its system.",
    leaders:{
      agent:"Dame Briar — When a player's unit is destroyed: You may exhaust this card to galvanize another of that player's units in the destroyed unit's system.",
      commander:"Nip and Tuck — UNLOCK: There are 3 galvanized units on the game board. ABILITY: Your action cards cannot be canceled by \"Sabotage\" action cards. The Nekro Virus cannot place assimilator tokens on your components.",
      hero:"Lyra Keen — When one of your galvanized units is destroyed: You may purge this card to roll 1 die for each unit in its system that belongs to another player; if the result is equal to or greater than the galvanized unit's combat value, destroy that unit."
    }
  },
  "The Ral Nel Consortium": {
    home:"Ral Nel", commodities:5, source:"te", difficulty:"Low",
    abilities:[
      "SURVIVAL INSTINCT: After a player activates a system that contains your ships, you may move up to 2 of your ships into the active system from adjacent systems that do not contain your command tokens.",
      "MINIATURIZATION: Your structures can be transported by any ships; this does not require or count against capacity. While your structures are in the space area, they cannot use their unit abilities. At the end of your tactical action, you may place your structures that are in space areas onto planets you control in their respective systems."
    ],
    factionTechs:[
      {name:"Nanomachines",color:"cybernetic",text:"ACTION: Exhaust this card to place 1 PDS on a planet you control. ACTION: Exhaust this card to repair all of your damaged units. ACTION: Exhaust this card and discard 1 action card to draw 1 action card."}
    ],
    flagship:"Last Dispatch — Cost 8, Combat 8(×2), Move 2, Capacity 4, SUSTAIN DAMAGE. When this unit retreats, you may destroy 1 ship in the active system that does not have SUSTAIN DAMAGE.",
    units:[
      "Linkship I — Destroyer. Cost 1, Combat 9, Move 3. ANTI-FIGHTER BARRAGE 9(×2). This unit can use the SPACE CANNON ability of one of your structures in its space area; each structure can only be triggered once.",
      "Linkship II — Destroyer. Cost 1, Combat 8, Move 4. ANTI-FIGHTER BARRAGE 6(×2). This unit can use the SPACE CANNON ability of one of your structures in its space area; each linkship can trigger the same structure."
    ],
    breakthrough:"During the action phase, if you have not passed, when other players would discard action cards, they are placed on this card instead. When you pass, take 1 action card from this card and discard the rest.",
    mech:"Alarum — Cost 2, Combat 6, SUSTAIN DAMAGE. At the end of a round of combat on this planet, you may move up to 2 of your ground forces to this planet from planets in adjacent systems.",
    leaders:{
      agent:"Kan Kip Rel — ACTION: Exhaust this card to draw 2 action cards; give 1 of those cards to another player.",
      commander:"Watchful Ojz — UNLOCK: Be the last person to pass during the Action Phase. ABILITY: When you declare a retreat: Immediately retreat up to 2 of your ships from the active system to an adjacent system that does not contain another player's ships. Place a command token from your reinforcements into that system.",
      hero:"Director Nel — After the last player passes: You may choose to no longer be passed; if you do, gain 2 command tokens, draw 1 action card, and purge this card."
    }
  },
  "The Deepwrought Scholarate": {
    home:"Deepwrought", commodities:4, source:"te", difficulty:"Medium",
    abilities:[
      "RESEARCH TEAM: When ground forces are committed, if your units on the planet are not already coexisting, you may choose for your units to coexist.",
      "OCEANBOUND: When your units begin coexisting on a planet, gain an ocean card and ready it. Any time you have more ocean cards than there are planets that have your coexisting units, discard ocean cards until you do not."
    ],
    factionTechs:[
      {name:"Radical Advancement",color:"cybernetic",text:"At the start of the status phase, you may replace one of your non-unit upgrade technologies with a technology of the same color that has exactly 1 more prerequisite."},
      {name:"Hydrothermal Mining",color:"biotic",text:"At the start of the status phase, gain 1 trade good for each ocean card in play."}
    ],
    flagship:"D.W.S. Luminous — Cost 8, Combat 7(×2), Move 1, Capacity 6, SUSTAIN DAMAGE. This ship can move through systems that contain your units, even if other players' units are present: if it would, apply +1 to its move value for each of those systems.",
    units:[],
    breakthrough:"ACTION: Exhaust this card to allow each other player to spend 3 trade goods and give you 1 promissory note. Each player that does may research a non-faction, non-unit upgrade technology. You also gain each technology researched this way.",
    mech:"Eanautic — Cost 2, Combat 6, SUSTAIN DAMAGE. PRODUCTION 1. When another player activates this system, if this unit is coexisting, you may move it and any of your infantry on its planet to a planet you control in your home system.",
    leaders:{
      agent:"Doctor Carrina — When another player researches a technology: You may exhaust this card to allow that player to ignore 1 prerequisite; if they do, you may place 1 infantry from your reinforcements into coexistence on a non-home planet they control.",
      commander:"Aello — UNLOCK: Have an ocean card in play. ABILITY: When another player spends resources to research a technology: That player may reduce the cost by 1, if they do, gain 1 commodity or convert 1 of your commodities to a trade good.",
      hero:"Ta Zern — ACTION: Purge this card and a non-unit upgrade technology you own or from your deck; then, purge all cards with the same name owned by other players and in other players' decks. Then, each player that purged a technology they owned researches another technology."
    }
  },
  "The Crimson Rebellion": {
    home:"Crimson Gate", commodities:3, source:"te", difficulty:"High",
    abilities:[
      "SUNDERED: You cannot use wormholes other than epsilon wormholes. Other players' units that move or are placed into your home system are destroyed.",
      "INCURSION: When you activate a system that contains a breach, you may flip that breach; systems that contain active breaches are adjacent. At the end of the status phase, any player with ships in a system that contain an active breach may remove that breach.",
      "THE SORROW: When you create the game board, place the Sorrow (tile 94) where your home system would normally be placed, then place an inactive breach there. The Sorrow is not a home system. Then, place your home system (tile 118) in your play area."
    ],
    factionTechs:[
      {name:"Subatomic Splicer",color:"warfare",text:"When one of your ships is destroyed, you may produce a ship of the same type at a space dock in your home system."}
    ],
    flagship:"Quietus — Cost 8, Combat 5(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. While this unit is in a system that contains an active breach, other players' units in systems with active breaches lose all their unit abilities.",
    units:[
      "Exile I — Destroyer. Cost 1, Combat 8, Move 2, ANTI-FIGHTER BARRAGE 9(×2). At the end of any player's combat in this unit's system or an adjacent system, you may place 1 inactive breach in that system.",
      "Exile II — Destroyer. Cost 1, Combat 7, Move 2, ANTI-FIGHTER BARRAGE 6(×2). At the end of any player's combat in this unit's system or up to 2 systems away, you may place 1 active or inactive breach in that system."
    ],
    breakthrough:"During your tactical actions, apply +1 to the move value of each of your ships that start in your home system or in a system that contains an active breach. ACTION: Exhaust this card to flip any breach or place an active breach in a non-home system that contains your units.",
    mech:"Revenant — Cost 2, Combat 6, SUSTAIN DAMAGE. DEPLOY: During the \"Commit Ground Forces\" step of your tactical action in a system that contains an active breach, you may commit 1 mech, even if you have no units in the system.",
    leaders:{
      agent:"Ahk Ravin — ACTION: Exhaust this card to choose 1 player. That player may swap the position of 2 of their ships in any systems; they may transport units when they swap.",
      commander:"Ahk Siever — UNLOCK: Place a breach token in a system that contains another player's unit. ABILITY: At the end of a combat between any players: Gain 1 commodity or convert 1 of your commodities to a trade good.",
      hero:"Homesick Phantom — When you produce ships: You may place any of those ships on this card. At the start of a space combat, you may purge this card to place all ships from this card into the active system."
    }
  },
  "The Firmament": {
    home:"Firmament (shared with The Obsidian)", commodities:4, source:"te", difficulty:"Very High",
    abilities:[
      "PLOTS WITHIN PLOTS: You can score secret objectives already scored by other players, if you fulfill their requirements; this does not count against your secret objective limit or the number you can score in a round. When you score another player's secret objective do not score a victory point. Instead, place a face down plot card into your play area with that player's control token on it.",
      "PUPPETS OF THE BLADE: If you have at least one plot card in your play area, gain the following ability: ACTION: Purge the Firmament's faction sheet, leaders, planet card, and promissory note, then gain all of the faction components for The Obsidian."
    ],
    factionTechs:[
      {name:"Plane Splitter",color:"propulsion",text:"When you gain this card, put The Fracture into play. Flip this card if the Obsidian faction is in play."},
      {name:"Neural Parasite",color:"biotic",text:"At the start of the status phase, you may place 1 infantry from your reinforcements on a planet you control in your home system. Flip this card if the Obsidian faction is in play."}
    ],
    flagship:"Heaven's Eye — Cost 8, Combat 5(×2), Move 1, Capacity 3, SUSTAIN DAMAGE. If the active system contains units that belong to a player who has a control token on one of your plots, apply +1 to this ship's move value and repair it at the end of every combat round.",
    units:[],
    breakthrough:"When you gain this card and at the start of the status phase, you may place up to three of your trade goods on this card. Flip this card if you become The Obsidian faction.",
    mech:"Viper EX-23 — Cost 2, Combat 6, SUSTAIN DAMAGE. When ground forces are committed to this planet, you may choose for your units to coexist, if they were not already. Flip this card if your faction becomes the Obsidian.",
    leaders:{
      agent:"Myru Vos — When a player moves ships: You may exhaust this card; if you do, SPACE CANNON cannot be used against those ships. If they are not transporting units, they can also move through other players' ships.",
      commander:"Captain Aroz — UNLOCK: Have one plot card in play. ABILITY: You may treat planets in systems that contain your ships as if you controlled them for the purpose of scoring secret objectives.",
      hero:"Sharsiss — ACTION: Place 1 of your plot cards in play with any other player's control token on it. Then, you may place any player's control token on 1 of your in-play plot cards; one plot cannot have two of the same player's tokens. Then, purge this card."
    }
  },
  "The Obsidian": {
    home:"Firmament (shared with The Firmament)", commodities:4, source:"te", difficulty:"Very High",
    abilities:[
      "NOCTURNE: This faction cannot be chosen during setup.",
      "THE BLADE'S ORCHESTRA: When this faction comes into play, flip your home system, double sided faction components and all of your in-play plot cards. Then, ready Cronos Hollow and Tallin Hollow if you control them.",
      "MARIONETTES: The player or players whose control tokens are on each plot card are the puppeted players for that plot."
    ],
    factionTechs:[
      {name:"Plane Splitter",color:"propulsion",text:"At the start of your strategic actions, you may move an ingress token into a system that contains or is adjacent to your units. This technology cannot be researched."},
      {name:"Neural Parasite",color:"biotic",text:"At the start of your turn, destroy 1 of another player's infantry in or adjacent to a system that contains your infantry. This technology cannot be researched."}
    ],
    flagship:"Heaven's Hollow — Cost 8, Combat 5(×3), Move 1, Capacity 3, SUSTAIN DAMAGE.",
    units:[],
    breakthrough:"Place one trade good from the supply on this card each time you win a combat against a puppeted player. At the start of the status phase, gain all trade goods on this card, then gain an equal number of trade goods from the supply.",
    mech:"Viper Hollow — Cost 2, Combat 6, SUSTAIN DAMAGE. If this unit was coexisting when this card flipped to this side, gain control of its planet; the other player's units are now coexisting.",
    leaders:{
      agent:"Vos Hollow — When a player's ship is destroyed during any combat: You may exhaust this card; if you do, that player's opponent must destroy one of their ships of the same type in the active system.",
      commander:"Aroz Hollow — UNLOCK: Have units in The Fracture. ABILITY: Apply +1 to the result of each of your units' combat rolls in The Fracture.",
      hero:"Sharsiss Hollow — ACTION: Ready all of your planets. Then, purge this card."
    }
  }
};

const STRATEGY_CARDS = [
  {num:1,name:"Leadership"},{num:2,name:"Diplomacy"},{num:3,name:"Politics"},
  {num:4,name:"Construction"},{num:5,name:"Trade"},{num:6,name:"Warfare"},
  {num:7,name:"Technology"},{num:8,name:"Imperial"}
];

const SECRET_OBJECTIVES = [
  "Become a Martyr","Betray a Friend","Brave the Void","Control the Region","Cut Supply Lines",
  "Darken the Skies","Defy Space and Time","Deliver Supplies","Destroy Their Greatest Ship",
  "Eliminate a Rival","Establish a Perimeter","Fight with Precision","Forge an Alliance",
  "Fuel the War Machine","Ghost of Creuss","Hoard Raw Materials","Hold Vast Reserves",
  "Husband Your Fleet","Imperial Ambition","Intimidate Council","Lay Waste","Learn the Secrets",
  "Manipulate Galactic Law","Master the Laws of Physics","Mine Rare Metals",
  "Monopolize Production","Occupy the Seat of the Empire","Overthrow","Own the Battlefield",
  "Patrol Vast Territories","Plunder Vital Goods","Prove Endurance","Raise a Fleet",
  "Reclaim Ancient Monuments","Reveal Corruption","Seize an Icon","Spark a Rebellion",
  "Stake Your Claim","Steal Secrets","Strengthen Bonds","Turn Their Fleets to Dust",
  "Unveil Flagship","Unify the Colony","Populate the Outer Rim","Protect the Border"
];

const STAGE1 = [
  {name:"Corner the Market",desc:"Control 4+ planets each with the same planet trait.",vp:1},
  {name:"Develop Weaponry",desc:"Own 2+ unit upgrade technologies.",vp:1},
  {name:"Diversify Research",desc:"Own 2+ technologies in each of 2 different colors.",vp:1},
  {name:"Erect a Monument",desc:"Spend 8 resources.",vp:1},
  {name:"Establish a Perimeter",desc:"Have 4+ PDS on the board.",vp:1},
  {name:"Found a Golden Age",desc:"Spend 8 resources to place structures.",vp:1},
  {name:"Galvanize the People",desc:"Spend 3+ command tokens.",vp:1},
  {name:"Intimidate Council",desc:"Have 1+ ship in 2+ systems adjacent to Mecatol Rex.",vp:1},
  {name:"Lead from the Front",desc:"Spend 3+ tokens from strategy pool onto your strategy card.",vp:1},
  {name:"Negotiate a Trade Route",desc:"Spend a total of 5 trade goods.",vp:1},
  {name:"Sway the Council",desc:"Spend 8 influence.",vp:1},
  {name:"Unite the Colonies",desc:"Control 6+ non-home, non-Mecatol planets.",vp:1},
  {name:"Amass Wealth",desc:"Spend 3 influence, 3 resources, and 3 trade goods.",vp:1,source:"pok"},
  {name:"Build Defenses",desc:"Have 4+ structures on planets you control.",vp:1,source:"pok"},
  {name:"Catalyze Research",desc:"Own 8+ technologies.",vp:1,source:"pok"},
  {name:"Occupy the Seat of the Empire",desc:"Control Mecatol Rex and have 3+ ships in that system.",vp:1,source:"pok"},
];

const STAGE2 = [
  {name:"Centralize Galactic Trade",desc:"Spend 10 trade goods.",vp:2},
  {name:"Conquer the Weak",desc:"Control 1 planet in each of 3+ opponents' home systems.",vp:2},
  {name:"Form Galactic Brain Trust",desc:"Control 5 planets with tech specialties.",vp:2},
  {name:"Galactic Threat",desc:"Be in combat with all other players.",vp:2},
  {name:"Master the Laws of Physics",desc:"Own 4 technologies in the same color.",vp:2},
  {name:"Populate the Galaxy",desc:"Have 13+ non-fighter ships on the board.",vp:2},
  {name:"Protect the Border",desc:"Have 5+ structures in systems not adjacent to your home.",vp:2},
  {name:"Reclaim Ancient Monuments",desc:"Control 3 legendary planets.",vp:2},
  {name:"Rule Distant Lands",desc:"Control 2+ planets in the systems of 2+ other players.",vp:2},
  {name:"Achieve Supremacy",desc:"Have your flagship or warlord on the game board.",vp:2,source:"pok"},
  {name:"Become a Legend",desc:"Control 4 legendary planets.",vp:2,source:"pok"},
  {name:"Destroy Their Greatest Ship",desc:"Destroy a flagship or warlord.",vp:2,source:"pok"},
  {name:"Dictate Policy",desc:"Have 3+ laws in play.",vp:2,source:"pok"},
  {name:"Drive the Debate",desc:"You are elected the outcome of 3+ agendas.",vp:2,source:"pok"},
];

const TYPE_ORDER = ["biotic","propulsion","cybernetic","warfare","unit","faction"];

const SOURCE_LABEL   = {pok:"Prophecy of Kings",codex:"Codex",te:"Thunder's Edge"};

const DIFFICULTY_COL = {"Low":"#27ae60","Medium":"#f39c12","High":"#e74c3c","Very High":"#8e44ad"};

const COLOR_LABELS = {biotic:'Biotic',propulsion:'Propulsion',cybernetic:'Cybernetic',warfare:'Warfare',unit:'Unit Upgrade'};

const STATUS_CHECKLIST = [
  "Score up to 1 public objective",
  "Reveal a public objective",
  "Draw action cards",
  "Remove command tokens (keep 2 on strategy card)",
  "Gain and redistribute command tokens",
  "Ready cards","Repair units","Return strategy cards"
];

const LAWS = [
  {name:"Classified Document Leaks",desc:"Attach to a public objective. Players may look at it even if not revealed."},
  {name:"Committee Formation",desc:"Speaker draws 1 extra agenda card at start of agenda phase and discards one."},
  {name:"Conventions of War",desc:"Players cannot use BOMBARDMENT against planets containing structures."},
  {name:"Core Mining",desc:"Attach to a non-home planet you control; its resource value increases by 2."},
  {name:"Demilitarized Zone",desc:"Attach to Mecatol Rex system. Players cannot move ships into Mecatol Rex."},
  {name:"Enforced Travel Ban",desc:"Players cannot activate systems containing other players' ships in the action phase."},
  {name:"Executive Sanctions",desc:"Players can have a maximum of 3 action cards in hand."},
  {name:"Fleet Regulations",desc:"Max non-fighter ships per system reduced by 1 (minimum 1)."},
  {name:"Holy Planet of Ixth",desc:"Attach to a planet; it becomes a legendary planet."},
  {name:"Homeland Defense Act",desc:"Ships in your home system have +1 to all combat rolls."},
  {name:"Imperial Arbiter",desc:"Speaker may give to any player. That player may exhaust it to swap the speaker token."},
  {name:"Regulated Conscription",desc:"Players can deploy only 1 infantry to each planet during production."},
  {name:"Shard of the Throne",desc:"Holder has +1 VP. When you win combat against the holder, you may take this card."},
  {name:"Shared Research",desc:"All players can spend tech specialties of planets they do not control."},
  {name:"Artifact Transfer",desc:"Exchange 1 legendary planet or objective token with any agreeing player.",source:"pok"},
  {name:"Checks and Balances",desc:"Each player must control fewer planets than the player with the most planets.",source:"pok"},
  {name:"Cripple Defenses",desc:"The player with the most PDS loses all of them.",source:"pok"},
  {name:"Minister of Commerce",desc:"When you receive trade goods from Trade strategy, gain 1 extra trade good.",source:"pok"},
  {name:"Minister of Exploration",desc:"When you gain control of a planet, gain 1 trade good.",source:"pok"},
  {name:"Minister of Industry",desc:"When you produce units with a space dock, gain 1 of the produced units.",source:"pok"},
  {name:"Minister of Peace",desc:"After another player activates a system containing your units, both score 1 VP.",source:"pok"},
  {name:"Minister of Policy",desc:"When speaker draws agenda cards, draw 2 additional and discard 2.",source:"pok"},
  {name:"Minister of Sciences",desc:"When you research a technology, ignore 1 prerequisite.",source:"pok"},
  {name:"Minister of War",desc:"Once per round, remove 1 command token from the board to add 1 to your strategy card.",source:"pok"},
  {name:"Mutiny",desc:"At end of status phase: players who voted against lose 1 VP; voters for gain 1 VP.",source:"pok"},
  {name:"New Constitution",desc:"Remove all agenda cards. Discard all laws.",source:"pok"},
  {name:"Seed of an Empire",desc:"Player with most VP gains 1; player with fewest loses 1.",source:"pok"},
  {name:"Terragenesis",desc:"Attach to a non-home, non-legendary planet; change its trait.",source:"pok"},
  {name:"Galactic Event",desc:"(Thunder's Edge) A galactic event alters the rules for this round.",source:"te"},
];

export { FACTIONS, TECHNOLOGIES, STARTING_TECH, FACTION_DATA, STRATEGY_CARDS,
  STAGE1, STAGE2, SECRET_OBJECTIVES, TYPE_ORDER, SOURCE_LABEL,
  DIFFICULTY_COL, COLOR_LABELS, STATUS_CHECKLIST, LAWS };