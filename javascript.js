const iAmBored=[{
    
    urls:[
        "https://www.chanceandcounters.com/cardiff/",
        "https://www.firestormgames.co.uk/"
      ],
    title:"to a Board Games cafe"
    
},
{
    urls:["https://www.nationaltrust.org.uk/dyffryn-gardens","https://www.sustrans.org.uk/find-a-route-on-the-national-cycle-network/cardiff-bay-trail/","https://www.valeofglamorgan.gov.uk/en/enjoying/Coast-and-Countryside/cosmeston-lakes-country-park/Cosmeston-Lakes-Country-Park.aspx"

    ],
    title:"on Walks"
},
{
    urls:["https://www.myvue.com/cinema/cardiff/whats-on", "https://www.everymancinema.com/cardiff", "https://cardiff.premierecinemas.co.uk/PremiereCinemasCardiff.dll/Home","https://www.streetfoodcinema.co.uk/"],
    title:"to the Cinema"
},
{
    urls:["https://adventuregolf.com/","https://teerexgolfcardiff.com/"],
    title:"to Adventure Golf"
},
{
    urls:["https://www.pitchup.com/","https://www.campsites.co.uk/","https://coolcamping.com/"],
title:"Camping"
},
{
    urls:["https://www.leisurecentre.com/cardiff-international-pool-and-gym"],
    title:"Swimming"
},
{
    urls:["https://www.sport.wales/our-facilities/sport-wales-national-centre-cardiff/"],
    title:"to Badminton"
},
{
    urls:["https://www.violaarena.com/ice-skating/information/times-prices/"],
    title: "Ice-skating"
}]

const specialEvent=[{
    urls:["https://bouldersuk.com/give-it-a-go"],
    title:"Rock Climbing/Bouldering"
},
{
    urls:["https://www.ciww.com/activities/air-trail/"],
    title:"a High ropes course"
},
{
    urls:["https://www.goodshedsbarry.co.uk/your-goodsheds-visit/","https://www.revoluciondecuba.com/bar/cardiff/","https://theclinkcharity.org/", "https://www.coyoteuglysaloon.com/cardiff/", "https://www.thecoconut-tree.com/cardiff"],
    title:"a Restaurant"
},
{
    urls:["https://infinitycardiff.co.uk/","https://www.buzztrampolineparks.co.uk/buzz-cardiff"],
    title:"a Trampoline park"
},
{
    urls:["https://www.escaperoomscardiff.co.uk/","https://citymazes.com/location-cardiff","https://www.adventurerooms.wales/cardiff/"],
    title:"an Escape room"
},
{
    urls:["https://www.wmc.org.uk/", "https://motorpointarenacardiff.co.uk/","https://www.newtheatrecardiff.co.uk/","https://www.stdavidshallcardiff.co.uk/"],
    title:"a Theatre"
}]

const giveMeAHobby=[{
    urls:["https://origami.me/beginners-guide/"],
    title:"Origami"
},
{
    urls:["https://www.positivelysplendid.com/easy-sewing-projects-for-beginners/"],
    title:"Sewing"
},
{
    urls:["https://www.games-workshop.com/en-GB/Warhammer-40-000"],
    title:"Warhammer"
},
{
    urls:["https://www.zumba.com/ja-JP/party?day_friday=1&day_monday=1&day_saturday=1&day_sunday=1&day_thursday=1&day_tuesday=1&day_wednesday=1&end_date=2021-05-09&hide_unverified=1&masks_required=0&outdoor_only=0&search=CARDIFF%2C+WHITCHURCH%2C+GB&show_non_membership_only=0&social_distancing=0&start_date=2021-05-03&temperature_checks=0&lat=51.512697&lng=-3.218135"],
    title:"Zumba"
},
{
    urls:["https://www.lifehack.org/articles/communication/30-books-that-everyone-should-read-least-once-their-lives.html"],
    title:"Reading"
},
{
    urls:["https://www.purewow.com/food/fun-things-to-bake"],
    title:"Baking"
},
{
    urls:["https://gamerules.com/card-games-that-you-can-play-alone/"],
    title:"solo card games"
},
{
    urls:["https://www.insider.com/how-to-take-care-of-plants-2018-7"],
    title:"Buy and take care of a new plant"
},
{
    urls:["https://www.instructables.com/How-To-Play-The-Harmonica/"],
    title:"Learn a new instrument"
},
{
    urls:["https://www.codecademy.com/learn/paths/code-foundations?g_network=g&g_device=c&g_adid=435796417100&g_campaign=UK+Career+Path%3A+Pro+-+Exact&g_keyword=basic%20coding&g_acctid=243-039-7011&g_adtype=search&g_adgroupid=102650134473&g_keywordid=kwd-368104080477&g_campaignid=10074198917&utm_id=t_kwd-368104080477:ag_102650134473:cp_10074198917:n_g:d_c&utm_term=basic%20coding&utm_campaign=UK%20Career%20Path%3A%20Pro%20-%20Exact&utm_source=google&utm_medium=paid-search&utm_content=435796417100&hsa_acc=2430397011&hsa_cam=10074198917&hsa_grp=102650134473&hsa_ad=435796417100&hsa_src=g&hsa_tgt=kwd-368104080477&hsa_kw=basic%20coding&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwvr6EBhDOARIsAPpqUPFddw37PkE0C-TP7wdMzUydVAlFmuBxeFi_8rgSEk2KAmie5ILV_E4aAq8YEALw_wcB"],
    title:"Learn how to code and make a new project"
},
{
    urls:["https://drawpaintacademy.com/painting-for-beginners/"],
    title:"Painting/drawing"
}]

function openTab(e,tabName){
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}

function randomSpecialEvent(e){
    const numberOfSpecialEvents =specialEvent.length -1;
    const randomNumber =Math.floor(Math.random() * numberOfSpecialEvents) + 1 ;
    document.getElementById("eventTitle").innerText = specialEvent[randomNumber].title;
    const listText = createList(specialEvent[randomNumber]);
    document.getElementById("eventList").innerHTML = "<ul>" + listText + "</ul>";
}

function randomIAmBored(e){
    const numberOfIAmBored =iAmBored.length -1;
    const randomNumber =Math.floor(Math.random() * numberOfIAmBored) + 1 ;
    document.getElementById("boredTitle").innerText = iAmBored[randomNumber].title;
    const listText = createList(iAmBored[randomNumber]);
    document.getElementById("boredList").innerHTML = "<ul>" + listText + "</ul>";
}
function randomHobby(e){
    const numberOfHobbies = giveMeAHobby.length -1;
    const randomNumber = Math.floor(Math.random() * numberOfHobbies)+1;
    document.getElementById("hobbyTitle").innerText = giveMeAHobby[randomNumber].title;
    const listText= createList(giveMeAHobby[randomNumber]);
        document.getElementById("hobbyList").innerHTML = "<ul>" + listText + "</ul>";
}

function createList(list){
    let htmlList= "";
    for(let i=0; i < list.urls.length; i++){
        htmlList += "<li>"+ "<a href=" + list.urls[i]+ ">" + list.urls[i]+ "</li>";
    }
    return htmlList
}

