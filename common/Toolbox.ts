import { escapeRegExp } from "lodash";

export interface KeyValueSet<T> {
  [key: string]: T;
}

export function toModifierString(number: number): string {
  if (number >= 0) {
    return `+${number}`;
  }
  return number.toString();
}

export function probablyUniqueString(): string {
  var Sentencer = require('sentencer');
  Sentencer.configure(
  {
    // the list of nouns to use. Sentencer provides its own if you don't have one!
    nounList: ["bard", "rogue", "cleric", "druid", "fighter", "monk", "warlock", "ranger", "palladin", "wizard", "sorcerer", "orc", "halfling", "elf", "drow", "dwarf", "gnome", "bugbear", "goblin", "spider", "rat", "cat", "bat", "demon", "devil"],

    // the list of adjectives to use. Again, Sentencer comes with one!
    adjectiveList: ["ace", "aft", "ain", "all", "alt", "anal", "ane", "ant", "apt", "arch", "arched", "auld", "awed", "backed", "baked", "barbed", "bare", "barred", "bats", "beaut", "beige", "bent", "bit", "blae", "blah", "blame", "blamed", "bland", "blate", "bleak", "blear", "blest", "blocked", "blond", "blonde", "bloomed", "blown", "blowzed", "bluff", "blunt", "bobs", "boiled", "bold", "boned", "boon", "both", "bought", "boulle", "bound", "brag", "brash", "brave", "braw", "brief", "brisk", "broch", "broke", "brood", "brushed", "brusque", "brute", "bucked", "buff", "bugs", "built", "bum", "bung", "burned", "burred", "burst", "bushed", "bust", "bye", "calced", "calm", "canned", "cauld", "chance", "charged", "chaste", "cheap", "checked", "cheek", "cheesed", "chic", "chill", "chirk", "choice", "clad", "clean", "clipped", "coarse", "cool", "corked", "corned", "couped", "coursed", "couth", "cowled", "crack", "cracked", "cramped", "crank", "crass", "crazed", "creole", "crined", "crisp", "crocked", "cronk", "crook", "crossed", "crowned", "crude", "crumb", "crutched", "cupped", "cur", "curst", "cusped", "cute", "daft", "damn", "damned", "damp", "dang", "danged", "dank", "darn", "darned", "dash", "dashed", "deaf", "deal", "deft", "dense", "dere", "dern", "dim", "dinge", "dink", "dire", "dished", "doiled", "domed", "done", "douce", "dour", "dowf", "drab", "dread", "drear", "dree", "dreich", "dried", "droll", "drunk", "dryer", "dud", "due", "dull", "dure", "dusk", "eared", "earned", "eath", "ebb", "echt", "edge", "eight", "eighth", "eild", "elect", "else", "eyed", "fab", "fain", "faint", "fake", "famed", "far", "farm", "fat", "feal", "feat", "feigned", "fell", "felt", "few", "fey", "fierce", "finned", "firm", "first", "fit", "flawed", "fledged", "flexed", "flip", "flown", "flush", "fogged", "foiled", "fold", "fond", "fool", "forced", "fore", "forte", "fou", "foul", "found", "frail", "fraught", "freer", "fremd", "fresh", "frigid", "frilled", "fringed", "frogged", "frore", "fumed", "fun", "funked", "furred", "gauche", "gauge", "ghast", "gibbed", "gilt", "ginned", "girt", "glare", "glazed", "gleg", "glib", "glum", "gnarled", "gone", "gorged", "grab", "grained", "grave", "greige", "grilled", "grim", "grooved", "grouse", "grown", "gruff", "grum", "gules", "gummed", "gunned", "guns", "halt", "harsh", "hask", "heeled", "heigh", "held", "helmed", "hep", "here", "het", "hewn", "hex", "hick", "hipped", "hit", "hoar", "hoarse", "hogged", "hoofed", "hooked", "hued", "huge", "hurt", "iced", "incog", "inter", "jade", "jimp", "kempt", "kept", "keyed", "kin", "kind", "kitsch", "knurled", "kraal", "laigh", "laith", "lame", "langued", "lank", "lashed", "lax", "leafed", "leal", "lean", "leaved", "left", "less", "lewd", "licht", "lief", "liege", "like", "limbed", "limp", "linked", "lipped", "lit", "lithe", "litho", "lived", "loath", "lobed", "lodged", "log", "lone", "looped", "lorn", "loth", "louche", "loud", "lown", "lowse", "lush", "luxe", "mad", "made", "mailed", "mair", "maned", "manned", "marked", "marled", "masked", "mat", "matte", "mauve", "meek", "meet", "mere", "mesne", "metal", "miffed", "milch", "mild", "milled", "mim", "mob", "mod", "moire", "moist", "moldy", "mooned", "moot", "mown", "much", "mum", "murk", "must", "mute", "mzee", "nae", "naught", "neap", "neaped", "near", "neat", "nesh", "nett", "next", "nigh", "ninth", "nowed", "nude", "numb", "nuts", "oared", "oke", "once", "ope", "over", "own", "paced", "paid", "pained", "pale", "paned", "passed", "peaked", "peart", "peeved", "pent", "perk", "picked", "piled", "pique", "pissed", "pitched", "plumb", "plump", "plus", "plush", "pocked", "poised", "pops", "posh", "pouched", "prest", "prim", "print", "prompt", "prone", "proud", "pseud", "puir", "punk", "pushed", "quack", "quaint", "quare", "queer", "quit", "quits", "raised", "raked", "ranged", "rapt", "rare", "rash", "rathe", "rent", "rid", "rife", "ripe", "roan", "roast", "ruffed", "runed", "rush", "sad", "said", "same", "sane", "sap", "scald", "scaled", "scalled", "scant", "scarce", "schlock", "scorched", "score", "scrap", "screwed", "scrimp", "sear", "sec", "sedged", "seen", "self", "sent", "sere", "sewn", "sexed", "sham", "shaped", "sheared", "shed", "sheer", "shelled", "shill", "shoal", "shod", "shorn", "shrewd", "shrill", "shrunk", "shut", "shy", "sixth", "size", "sized", "skeigh", "skew", "ski", "skilled", "skim", "skinned", "skint", "slain", "slant", "slate", "sleek", "slick", "slier", "sliest", "slight", "sloshed", "slub", "slum", "slung", "sly", "smashed", "smoked", "smug", "snecked", "snide", "snod", "snub", "snuff", "snug", "sold", "sole", "some", "sooth", "sore", "sought", "sown", "spare", "sparse", "spec", "spent", "spick", "spired", "splay", "spoilt", "sport", "spruce", "spry", "spurred", "squab", "squat", "squint", "stacked", "staged", "staid", "stale", "stalked", "starred", "staunch", "steep", "stemmed", "stewed", "stey", "stiff", "stoned", "stopped", "store", "strait", "straw", "stray", "stretch", "strewn", "strict", "stringed", "striped", "strung", "stuck", "stuffed", "stung", "suave", "such", "sunk", "super", "surd", "sure", "svelte", "swank", "swart", "swarth", "sweer", "swell", "swept", "swish", "switch", "sworn", "tai", "talc", "tame", "tan", "tanked", "tart", "taught", "taunt", "taut", "teen", "teind", "tenth", "terse", "thae", "then", "thick", "thin", "thraw", "thrawn", "through", "thrown", "thru", "thwart", "tied", "tierced", "tight", "tiled", "tinct", "tinned", "tired", "toe", "toed", "told", "tongued", "toom", "toothed", "tops", "torn", "touched", "tough", "trad", "treed", "tref", "tressed", "tried", "trig", "trim", "trine", "triste", "trite", "trussed", "tum", "twee", "twelfth", "twill", "twin", "twinned", "twp", "ult", "used", "vague", "vain", "vast", "veiled", "versed", "vexed", "vile", "vogue", "voiced", "void", "vulned", "wale", "waste", "waur", "waved", "webbed", "wed", "wedged", "wee", "well", "wersh", "wheeled", "whelked", "whist", "whorled", "wide", "willed", "winged", "wired", "won", "worked", "worn", "worse", "worst", "wound", "wrapped", "wroth", "wud", "yare", "yauld", "yeld", "yon", "zonked"]
  });

  return Sentencer.make("{{ adjective }}-{{ noun}}");
}

export function concatenatedStringRegex(strings: string[]) {
  const allStrings = strings
    .map(s => escapeRegExp(s))
    .sort((a, b) => b.localeCompare(a));
  if (allStrings.length === 0) {
    return new RegExp("a^");
  }
  return new RegExp(`\\b(${allStrings.join("|")})\\b`, "gim");
}

export function ParseJSONOrDefault<T>(json, defaultValue: T) {
  try {
    return JSON.parse(json);
  } catch {
    return defaultValue;
  }
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
