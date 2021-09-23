function myFunction (){
    var myMusic={
        001:{
            artist:"Billy Joel",
            title:"Piano Man",
            release_year: 1973,
            formats:{
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold:true
        },
        002:{
            artist:"Boney M",
            title:"Rasputin",
            release_year: 1979,
            formats:{
                1: "DVD",
                2: "Vinyl",
                3: "MP3"
            },
            gold:true
        }
    }
}

myFunction()[2]
module.exports = myFunction