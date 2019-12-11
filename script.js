function go(){
    var month = document.getElementById("month").value;
    console.log(month);
    var day = document.getElementById("day").value;
    console.log(day);
    var sign = getSign(month, day);
    console.log(sign);
    var name = document.getElementById("usersname").value;
    if(sign != -1) {
        document.getElementById("sign").innerHTML = signs[sign];
        document.getElementById("message").innerHTML = "Hi " + name + ": " + messages[sign];
        document.getElementById("image").src = images[sign];
        document.getElementById("incorrectDate").innerHTML = "";
    }
}

var signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];
var messages = ["Stop fixating, Aquarius! Obsessing over your problems will only make them worse today, as the moon in your emotional eighth house aligns with serious Saturn in your subconscious twelfth house. By focusing solely on your frustrations, you leave no room for positivity to blossom in your life. Instead of spiraling out, channel this anxious energy into a proactive pursuit. Vent to a friend about your feelings, go for a cathartic run in the park, or work through your deepest thoughts in your journal. There, doesn’t that feel better?",
    "Get ready to multi-task, Pisces! It may seem like just about everyone in your life needs something from you today, as the moon in your relationship sector aligns with structured Saturn. Your to-do list could quickly expand, so do your best to stay organized amidst the chaos. If you start to feel overwhelmed, call for backup! An expert collaborator, assistant, or biz-savvy BFF could become your Coworker in Shining Armor. Many hands make light work!",
    "Struggling to catch up, Aries? Instead of powering through, power down. It’s possible that you simply need a more efficient strategy or an extra set of hands to help you juggle all this responsibility. Take the time to streamline your workflow for maximum productivity. A little extra effort now could save you serious headaches in the long run. The cosmos will boost your systematizing efforts, as an organized moon-Saturn trine supercharges your professional and economic sectors. Get to planning, Ram!",
    "Surround yourself with people who lift you up, Bull! When it comes to romance, friendship, and business, the best partners are the ones who love you for exactly who you are. Seek out genuine connections under today’s down-to-earth moon-Saturn trine. By rolling with a supportive crew, you’ll gain the confidence you need to pursue your wildest dreams. The sky’s the limit when you have passionate cheerleaders on your team!",
    "Flying solo can be exhausting, Gemini. Find someone else to be the wind beneath your wings today, as the moon in your friendship sector aligns with brilliant Saturn. Is your plate way too full? Bring on an expert collaborator or rockstar assistant to help lighten your load. Suppress any micromanaging impulses and trust that this person can handle the job. In fact, their unique perspective could even help you IMPROVE your passion project. Keep an open mind!",
    "Is a certain someone getting under your skin? You could question a close contact’s loyalty today, thanks to a skeptical moon-Saturn trine. If they’ve done something to upset you, resist the urge to simply brush it under the rug. This one offense could be emblematic of larger issues in your relationship. Instead of deflecting, confront the other party about their problematic behavior. No need to fly off the handle—a simple, diplomatic dialogue will do. It’s possible that this whole thing is just one big misunderstanding!",
    "What’s the rush, Leo? Resist the urge to power hastily through your task list today. The stars encourage slow and steady progress, as the moon lingers in Virgo and your down-to-earth second house. Feeling overwhelmed by a major goal? Divide it into smaller, manageable steps. Though you may be anxious to reach the finish line, sloppy work could come back to haunt you later. Best to do it right the first time…even if it takes a bit longer.",
    "In the mood to make a change? You can thank the cosmos for this motivational boost, as the moon in your sign forms a flowing trine with essential Saturn in your metamorphosis zone. Say “goodbye” to a bad habit and “hello” to a new (and healthy!) routine. Even little shifts can make a big difference, whether you’re starting a daily meditation practice or eating clean for lunch. While you’re in this transformative mood, take a look at your squad. Are you surrounding yourself with people who lift you up? If the answer is “no,” it may be time to edit your inner circle.",
    "Prioritize your loved ones, Libra! You’re a lively social butterfly, which means it can be easy to accidentally overbook yourself…and leave little time for those who matter most. Focus on your nearest and dearest today, as the moon in your wistful twelfth house aligns with faithful Saturn in your domestic zone. Reach out to anyone you’ve neglected recently and arrange a heart-to-heart. Some quality bonding time will be just the thing to put your relationship back on track!",
    "Consider a compromise, Scorpio! Your team could reach gridlock on a group decision today, with everyone fighting for wildly different ideas. Play peacekeeper instead of jumping into battle, as a powerful moon-Saturn trine creates harmonious vibes in your community sector. It might take some extra effort, but your diplomatic spirit could help this crew FINALLY arrive at a consensus. Focus on finding common ground, instead of getting mired in “my-way-or-the-highway” viewpoints. Collaboration is the key to success!",
    "Don’t be a martyr, Sag! Are you bending over backwards for a loved one…and forgetting about your own needs in the process? You could have difficulty drawing healthy boundaries today, as the moon forms a difficult trine with stern Saturn in your service sector. Prioritize yourself instead of instinctively rushing to everyone else’s rescue. Say “goodbye” to codependent dynamics and empower others to take care of their own issues!",
    "Don’t censor yourself, Cap! Suppressing your truth will only lead to resentment. If an ongoing issue has been plaguing a close relationship, it’s time to address this problem head on. Honesty is the only policy under today’s candid skies, as the moon in your forthright ninth house aligns with your ruler, undiluted Saturn. But resist the urge to play the blame game. It takes two to tango, Cap! Be prepared to own up to your mistakes as well. By seeking common ground, you’ll arrive at healing so much faster!"];
var images = ["img/aquarius1.png","img/pisces2.png","img/aries3.png","img/taurus4.png","img/gemini5.png",
    "img/cancer6.png","img/leo7.png","img/virgo8.png","img/libra9.png","img/scorpio10.png","img/sagittarius11.png",
    "img/capricorn12.png"];
function getSign(month, day){
    //Aquarius
    if(month==1 && day>=20 || month==2 && day<=18){
        return 0;
    }
    //Pisces
    if((month==2 && day>=19) && (month==2 && day<=28) || month==3 && day<=20){
        return 1;
    }
    //Aries
    if(month==3 && day>=21 || month==4 && day<=19){
        return 2;
    }
    //Taurus
    if((month==4 && day>=20) && (month==4 && day<=30) || month==5 && day<=20){
        return 3;
    }
    //Gemini
    if(month==5 && day>=21 || month==6 && day<=20){
        return 4;
    }
    //Cancer
    if((month==6 && day>=21) && (month==6 && day<=30) || month==7 && day<=22){
        return 5;
    }
    //Leo
    if(month==7 && day>=23 || month==8 && day<=22){
        return 6;
    }
    //Virgo
    if(month==8 && day>=23 || month==9 && day<=22){
        return 7;
    }
    //Libra
    if((month==9 && day>=23) && (month==9 && day<=30) || month==10 && day<=22){
        return 8;
    }
    //Scorpio
    if(month==10 && day>=23 || month==11 && day<=21){
        return 9;
    }
    //Sagittarius
    if((month==11 && day>=22) && (month==11 && day<=30) || month==12 && day<=21){
        return 10;
    }
    //Capricorn
    if(month==12 && day>=22 || month==1 && day<=19){
        return 11;
    }
    incorrectDate();
    return -1;
}

function incorrectDate(){
    document.getElementById("incorrectDate").innerHTML = "This is not a real date! Please choose a different date.";
    document.getElementById("sign").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("image").src = "";
}