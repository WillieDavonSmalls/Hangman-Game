var billBoardTop = [
    'Gotye & Kimbra:Somebody That I Used to Know',	'Ellie Goulding:Lights',
    'Carly Rae Jepsen:Call Me Maybe',	'Kelly Clarkson:Stronger (What Doesnt Kill You)',
    'PSY:Gangnam Style',	'Jessie J:Domino',
    'fun.:We Are Young',	'Alex Clare:Too Close',
    'Rihanna:Diamonds',	'David Guetta & Sia:Titanium',
    'Flo-Rida:Whistle',	'Pink:Try',
    'Adele:Skyfall',	'Michel Telo:Ai se eu te pego!',
    'Flo-Rida:Good Feeling',	'Calvin Harris & Florence Welch:Sweet Nothing',
    'Bruno Mars:Locked Out Of Heaven',	'Ed Sheeran:The A Team',
    'Maroon 5 & Wiz Khalifa:Payphone',	'Train:Drive By',
    'One Direction:What Makes You Beautiful',	'Of Monsters And Men:Little Talks',
    'Katy Perry:Wide Awake',	'David Guetta & Nicki Minaj:Turn Me On',
    'Taylor Swift:We Are Never Ever Getting Back Together',	'Loreen:Euphoria',
    'Maroon 5:One More Night',	'Flo-Rida:I Cry',
    'Katy Perry:Part of Me',	'Nicki Minaj:Starships',
    'Owl City & Carly Rae Jepsen:Good Time',	'Justin Bieber:Boyfriend',
    'Flo-Rida & Sia:The Wild Ones',	'Pink:Blow Me (One Last Kiss)',
    'The Script & will.i.am:Hall Of Fame',	'Rihanna:Where Have You Been?',
    'The Wanted:Glad You Came',	'Snoop Dogg & Wiz Khalifa & Bruno Mars:Young Wild Free',
    'fun.:Some Nights',	'Drake & Rihanna:Take Care',
];

var randomSelection = Math.floor(Math.random() * 20);; 
var artist = billBoardTop[0].split(":")[0];
var song = billBoardTop[0].split(":")[1];

console.log(artist, song);