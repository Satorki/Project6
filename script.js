let name = ["Sebastian", "Joanna", "Kamil", "Marysia"];

const randomName = () => {
    let newName = Math.floor(Math.random()* 4);
    return name[newName];
}

// No random date just this day date.
// const allDate = new Date();
// let day = allDate.getDate();
// let month = allDate.getMonth() + 1;
// let year = allDate.getFullYear();
// let date = `${day}.${month}.${year}`;

// It is precised to only 30 days in month and with year to 2030 also with no zeros before with one number day or month.
const randomDate = () => {
    let newDay = Math.floor(Math.random()* 31);
    let newMonth = Math.floor(Math.random()* 12);
    let newYear = Math.floor(Math.random()* 2030);

    let newDate = `${newDay}.${newMonth}.${newYear}`;
    
    return newDate;
};

let weather = ["sunny", "cloudy", "rainy", "foggy", "stormy", "snowy", "windy"];

const randomWeather = () => {
    let newWeather = Math.floor(Math.random()* 7);
    return weather[newWeather];
}

let finalQuote = `Hello ${randomName()} today is ${randomDate()} the weather outside is ${randomWeather()}. Have a nice day!`;


function Quote(){
    return document.getElementById("Qtext").innerHTML = finalQuote;
}