const brain = require('brain.js');
const fs = require('fs');

var net = new brain.NeuralNetwork({
    activation: 'sigmoid',
    hiddenLayers: [2],
    learningRate: 0.1
  });
net.fromJSON(
    JSON.parse(
      fs.readFileSync("trained-model.json").toString()
    )
)

const trainingData = [
    {
        input: `Up in the morning and out to school
        The teacher is teaching the golden rule
        American history and practical maths`,
        output: { ACDC: 1 }
    },{
        input: `I'm dirty, mean, and mighty unclean
        I'm a wanted man
        Public enemy number one
        Understand?
        So lock up your daughter
        Lock up your wife
        Lock up your back door
        And run for your life
        The man is back in town
        So don't you mess me 'round
        'Cause I'm T.N.T. I'm dynamite
        (T.N.T.) and I'll win the fight
        (T.N.T.) I'm a power load
        (T.N.T.) watch me explode`,
        output: { ACDC: 1 }
    },{
        input: `My Daddy was workin' nine to five
        When my Momma was havin' me
        By the time I was half alive
        They knew what I was gonna be
        But I left school and grew my hair
        They didn't understand
        They wanted me to be respected as
        A doctor or a lawyer man
        (But I had other plans)
        Gonna be a rock 'n' roll singer
        Gonna be a rock 'n' roll star
        Gonna be a rock 'n' roll singer
        I'm gonna be a rock 'n' roll,
        A rock 'n' roll star`,
        output: { ACDC: 1 }
    },{
        input: `Ridin' down the highway
        Goin' to a show
        Stop in all the byways
        Playin' rock 'n' roll
        Gettin' robbed
        Gettin' stoned
        Gettin' beat up
        Broken boned
        Gettin' had
        Gettin' took
        I tell you folks
        It's harder than it looks
        It's a long way to the top if you wanna rock 'n' roll
        It's a long way to the top if you wanna rock 'n' roll
        If you think it's easy doin' one night stands
        Try playin' in a rock roll band
        It's a long way to the top if you wanna rock 'n' roll`,
        output: { ACDC: 1 }
    },{
        input: `There was nothin? going on in this old town
        Just one street and the shop's shut down
        The sun has come the grass is dry
        You came kicking up dust as you rolled by
        With tangled hair and spirit free
        Something stirred inside of me
        You rock you rock a country world
        And you roll me in your loving ways
        And you shook you shook the stoney ground
        Go girl
        You rock my world`,
        output: { LeeKernaghan: 1 }
    },{
        input: `Billy was a drover
        He lived out on the three chain road
        Fell in love with Mary and they married
        She made his shack a home
        He drove them off to Queensland
        And it hurt to have to leave her on her own
        But she promised she'd be waiting
        When he brought the cattle home
        There's a lonesome wind blowing down
        The three chain road tonight
        It's sending out a warning as she moans
        Billy don't go riding down
        The three chain road tonight
        The wind is crying Billy please don't go`,
        output: { LeeKernaghan: 1 }
    },{
        input: `its a plume of dust down an old dirt road
        and hanging off the rails at the rodeo
        a back verandah with creaking boards
        and the dark range of a thunderstorm
        its the stockmans bar at an old bush pub
        and chasing mickey's though the scrub
        its planting seeds and praying for rain
        and the red dust runing through your veins
        its the way it is, its the way it goes
        when my wheels hit the gravel road it feels like home
        its the way of life, its the life i live
        and im right where i want to be
        thats the way it is
        `,
        output: { LeeKernaghan: 1 }
    },{
        input: `Works a 12 hour day from sun up til sun down
        he's doing what he can to make the wheels go round
        in a shed down the track he knows how to bend his back
        he's the soul of the earth he's got a heart of gold
        he's a member of the out back club
        he don't back down and he dont give up
        he's living in the land he loves
        born and raised he's a member of the outback club
        she rides the boundry fences with the blokes
        she's a match for any man alive when she works the mob
        before the job is done theres another just begun
        a kinda woman any man'd be proud of`,
        output: { LeeKernaghan: 1 }
    },{
        input:  `Well life in the scrub is kinda laid back
        aint much a young ringer like me cant hack
        got a four wheel drive and a red dust track
        thank god I'm a country boy
        Well working on the land never bothered me
        im a strong hard lad from a big country
        way out here is where I ever want to be
        thank god I'm a country boy
        Spend all week long working in the sun
        when i get a little time im going to have some fun
        im a laid back beer-drinking Australian
        thank god I'm a country boy`,
        output: {LeeKernaghan: 1 }
    },{
        input: `He'd Brycreamed his hair and straightened his tie
        When he walked out the dorr he'd kiss his mother goodbye
        He's got the keys to his father's FJ
        He's taking out Jenny it's their first date
        He knocks on her door and he can hear his heart pound
        Her father appears and looks him up and down
        He said 'Jen won't be long so you'd better come in'
        And he waits on the couch, flowers in his hand`,
        output: { LeeKernaghan: 1 }
    },{
        input: `The black soil plains
        The line scorched and grey
        The stock is lean and rough
        It's another long and breathless day
        And the rain wont come
        And you just keep
        Holding on to hope
        Your spirit's bent and broke
        And all that's left is pride
        To work this restless land
        Takes the kind of man
        Who'll give it one more try
        Backing your faith and trust
        In a handful of dust`,
        output: { LeeKernaghan: 1 }
    },{
        input: `Boys from the bush
        Been shearing sheep, we been mustering stock
        We been culling out roos, we been spraying the crops
        We've been droving cattle up an old stock route
        Now its Saturday night, we pile in the ute
        We're the boys from the bush and we're back in town
        Well the dogs in the back and the foot goes down
        We're life members of the outback club
        We're the boys from the bush come in from the scrub
        Been out in the heat, we been loading the trucks
        Been fixing fences, we been choking on dust
        We curse the raaaaaaain we curse the drought
        Now its Saturday night and we're all in the shout`,
        output: { LeeKernaghan: 1 }
    },{
        input: `These hands can turn timber
        Into good stockyard rails
        This back knows the burden of toil
        Between fixing up fences
        And falling behind
        Well I reckon
        I've been through it all
        Never knew I had feelings like this
        So much can change with a kiss
        And it's just me and you
        And the Goondiwindi Moon
        All at once the world is standing still
        With the moonlight in your hair
        And the softness of your skin
        Taking me somewhere I've never been
        Goondiwindi Moon
        `,
        output: { LeeKernaghan: 1 }
    },{
        input: `From the Gulf down to Rocky
        And Isa in the west
        It's an unforgiving country
        It brings out the best
        We'll all join together
        And then we'll sing the pride?
        When from out of Northern Queensland
        The cowboys ride...
        Com'on the Cowboys "Com' On"
        Com'on the cowboys "Com' On"
        Raising the banner "Com' On"
        Of the blue and the grey
        Com'on the cowboys, "Com' On"
        We'll give them hell boys "Com'On"
        Play for the glory "come On"
        Of the blue and the grey`,
        output: { LeeKernaghan: 1 }
    }
]

//credit - Daniel Simmons - https://itnext.io/you-can-build-a-neural-network-in-javascript-even-if-you-dont-really-understand-neural-networks-e63e12713a3
let trainedNet;

function encode(arg) {
    return arg.split('').map(x => (x.charCodeAt(0) / 256));
}

function processTrainingData(data) {
    return data.map(d => {
        return {
            input: encode(d.input),
            output: d.output
        }
    })
}

// net.train(processTrainingData(trainingData),{
//     logPeriod:1,
//     log:true,
//     errorThresh: 0.001
// });

let results = net.run(encode(`From the Gulf down to Rocky
And Isa in the west
It's an unforgiving country
It brings out the best
We'll all join together
And then we'll sing the pride?`));

console.log(results)

//Write trained model to disk

var json = net.toJSON()
fs.writeFileSync("trained-model.json", JSON.stringify(json));