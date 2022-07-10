document.addEventListener("DOMContentLoaded", function(event) {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    const translateButton = document.getElementById("translate-button");
    let finalPhrase = "";

    const dictionary = {   // If the property name uses symbols also used in RegExp syntax (like question mark), then they need to be escaped, eg. "\\?"
        "stupid": "dim",
        "how are you\\?": "alright?",
        "fancy": "posh",
        "hello": "oi guvna",
        "fucking": "bloody",
        "steal": "nick",
        "thank you": "cheers",
        "thanks": "cheers",
        "cool": "hunky-dory",
        "bullshit": "bollocks",
        "shit": "bollocks",
        "beautiful": "smashing",
        "great": "brilliant",
        "strange": "dodgy",
        "fuck up": "cock up",
        "sad": "gutted",
        "disappointed": "gutted",
        "friend": "mate",
        "friends": "mates",
        "buddy": "bruv",
        "annoyed": "miffed",
        "very": "proper",
        "guy": "bloke",
        "dollar": "quid",
        "bye": "ta-ta!",
        "nonsense": "poppycock",
        "apartment": "flat",
        "tired": "knackered",
        "you what mate": "u w0t m8",
        "girl": "bird",
        "attractive": "fit",
        "toilet": "loo",
        "bathroom": "bog",
        "kiss": "snog",
        "drunk": "pissed",
        "naughty": "cheeky",
        "mad": "bonkers",
        "crazy": "bonkers",
        "beverage": "bevvy",
        "kidding": "taking the piss",
        "cup of tea": "cuppa",
        "can't be bothered": "can't be arsed",
        "happy": "chuffed",
        "idiot": "git",
        "food": "nosh",
        "ass": "arse"
    };

    function translate() {
        finalPhrase = input.value;
        for (let i in dictionary) {
            let regex = new RegExp(i, "gi");    // Puts "/" and "/gi" around the string to make the replacement global and ignore capitalization
            finalPhrase = finalPhrase.replace(regex, dictionary[i]);
        }
        finalPhrase = finalPhrase.concat(" Innit?");
        output.value = finalPhrase;
    }

    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            translateButton.click();
        }
    });

    translateButton.addEventListener("click", translate);
});