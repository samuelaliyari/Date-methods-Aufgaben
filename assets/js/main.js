// ========================================
//                    Level1_1
// ========================================


const sections = document.body.querySelectorAll("section");


const showDates = () => {
    const date1 = document.createElement('p');
    const date2 = document.createElement('p');
    const date3 = document.createElement('p');
    const date4 = document.createElement('p');
    date1.textContent = new Date("november 15, 2023, 12:58:00") + " = new Date('november 15, 2023, 12:58:00')"
    date2.textContent = new Date(0) + " = new Date(0)"
    date3.textContent = new Date(31556908800) + " = new Date(31556908800)"
    date4.textContent = new Date(86400000) + " = new Date(86400000)"



    sections[0].append(date1, date2, date3, date4)
}

showDates()

// ========================================
//                 Level1_2
// ========================================

const showDates2 = () => {
    let date = new Date()
    const date1 = document.createElement('p');
    const date2 = document.createElement('p');
    const date3 = document.createElement('p');
    const date4 = document.createElement('p');
    const date5 = document.createElement('p');
    console.log(date)
    date.setFullYear(2222);
    date1.textContent = date
    date.setMonth(1)
    date.setFullYear(2123)
    date.setDate(24)
    date2.textContent = date
    date.setMonth(2)
    date3.textContent = date
    date.setDate(3)
    date4.textContent = date
    date = new Date()
    date.setDate(30)
    date5.textContent = date



    sections[1].append(date1, date2, date3, date4, date5)
}

showDates2()

// ========================================
//                 Level1_5
// ========================================
console.log("%c  Level1_5", "color: lightblue; font-size: 16px;")

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const showMonth = (dateParam) => {
    let date = new Date(dateParam);
    console.log(list[date.getMonth()]);
}

showMonth("2001,3,4");
showMonth("2019,12,24");
showMonth("1410,07,15");


// ========================================
//                 Level1_6
// ========================================
console.log("%c  Level1_6", "color: lightblue; font-size: 16px;");

const date1 = new Date(1999, 10, 5, 15)
const date2 = new Date()
const date3 = new Date(2019, 12, 3, 12) 
const date4 = new Date(2000, 1, 1, 11) 

// const amPm = (date) => date.getHours() > 12 ? console.log(("PM")) : console.log("AM");

const amPm = (date) => {
    if (date.getHours() > 12) {
        console.log(date.getHours() - 12 + "PM")
    }else if (date.getHours() === 12){
        console.log(date.getHours() + "PM")
    } else {
        console.log(date.getHours() + "AM")
    }
}

amPm(date1);
amPm(date2);
amPm(date3);
amPm(date4);

// ========================================
//                 Level1_7
// ========================================
console.log("%c  Level1_7", "color: lightblue; font-size: 16px;");

const isWeekend = (date) => {
    const day = new Date(date);
    console.log(day)
    if (day.getDay() === 0 || day.getDay() === 6) {
        return "Weekend"
    } else {
        return "Workday"
    }
}

console.log(isWeekend("12, 15, 2019"));
console.log(isWeekend("2, 16, 2001"));
console.log(isWeekend("2, 1, 2020"));
console.log(isWeekend("2, 29, 2020"));

// ========================================
//                 Level1_7
// ========================================
console.log("%c  Level1_7", "color: lightblue; font-size: 16px;");

const formatDate = () => {
    const output = document.createElement("p");
    const date = new Date();
    output.innerHTML = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`
    sections[2].append(output)
}

formatDate()