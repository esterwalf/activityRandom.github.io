const iAmBored=[{
    
    urls:[
        "https://www.chanceandcounters.com/cardiff/",
        "https://www.firestormgames.co.uk/"
      ],
    title:"Board Games"
    
},
{
    urls:["https://www.nationaltrust.org.uk/dyffryn-gardens","https://www.sustrans.org.uk/find-a-route-on-the-national-cycle-network/cardiff-bay-trail/","https://www.valeofglamorgan.gov.uk/en/enjoying/Coast-and-Countryside/cosmeston-lakes-country-park/Cosmeston-Lakes-Country-Park.aspx"

    ],
    title:"Walks"
},
{
    urls:["https://www.myvue.com/cinema/cardiff/whats-on", "https://www.everymancinema.com/cardiff", "https://cardiff.premierecinemas.co.uk/PremiereCinemasCardiff.dll/Home","https://www.streetfoodcinema.co.uk/"],
    title:"Cinema"
},
{
    urls:["https://adventuregolf.com/","https://teerexgolfcardiff.com/"],
    title:"Golf"
}]

const specialEvent=[{
    urls:["https://bouldersuk.com/give-it-a-go"],
    title:"Rock Climbing/Bouldering"
},
{
    urls:["https://www.ciww.com/activities/air-trail/"],
    title:"High ropes"
},
{
    urls:["https://www.goodshedsbarry.co.uk/your-goodsheds-visit/","https://www.revoluciondecuba.com/bar/cardiff/","https://theclinkcharity.org/", "https://www.coyoteuglysaloon.com/cardiff/", "https://www.thecoconut-tree.com/cardiff"],
    title:"Eat in/out"
},
{
    urls:["https://infinitycardiff.co.uk/","https://www.buzztrampolineparks.co.uk/buzz-cardiff"],
    title:"Trampoline park"
},
{
    urls:["https://www.escaperoomscardiff.co.uk/","https://citymazes.com/location-cardiff","https://www.adventurerooms.wales/cardiff/"],
    title:"Escape room"
},
{
    urls:["https://www.wmc.org.uk/", "https://motorpointarenacardiff.co.uk/","https://www.newtheatrecardiff.co.uk/","https://www.stdavidshallcardiff.co.uk/"],
    title:"Theatre"
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

function createList(list){
    let htmlList= "";
    for(let i=0; i < list.urls.length; i++){
        htmlList += "<li>"+ "<a href=" + list.urls[i]+ ">" + list.urls[i]+ "</li>";
    }
    return htmlList
}