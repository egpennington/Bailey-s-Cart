/* items set up for firebase usage */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://bailey-s-cart-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)

/* Catagories of shopping items */
const produceListInDB = ref(database, "produce")
const dairyListInDb = ref(database, "dairy")
const dryListInDb = ref(database, "dry")
const frozenListInDb = ref(database, "frozen")
const miscListInDb = ref(database, "misc")
const medicineListInDb = ref(database, "medicine")

/* input and buttons */
const inputFieldEl = document.getElementById("input-field")
const addButtonProduceEl = document.getElementById("add-button-produce")
const addButtonDairyEl = document.getElementById("add-button-dairy")
const addButtonDryEl = document.getElementById("add-button-dry")
const addButtonFrozenEl = document.getElementById("add-button-frozen")
const addButtonMiscEl = document.getElementById("add-button-misc")
const addButtonMedicineEl = document.getElementById("add-button-medicine")

/* list display areas */
const produceListEl = document.getElementById("produce-list-el")
const dairyListEl = document.getElementById("dairy-list-el")
const dryListEl = document.getElementById("dry-list-el")
const frozenListEl = document.getElementById("frozen-list-el")
const miscListEl = document.getElementById("misc-list-el")
const medicineListEl = document.getElementById("medicine-list-el")


/* catagory button inputs to list areas*/
addButtonProduceEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value    
    push(produceListInDB, inputValue)    
    clearInputFieldEl()
})

addButtonDairyEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value    
    push(dairyListInDb, inputValue)    
    clearInputFieldEl()
})

addButtonDryEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(dryListInDb, inputValue)    
    clearInputFieldEl()
})

addButtonFrozenEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(frozenListInDb, inputValue)    
    clearInputFieldEl()
})

addButtonMiscEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(miscListInDb, inputValue)    
    clearInputFieldEl()
})

addButtonMedicineEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(medicineListInDb, inputValue)    
    clearInputFieldEl()
})

/* database snapshots for each catagory */
onValue(produceListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearProduceListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToProduceListEl(currentItem)
        }    
    } else {
        produceListEl.innerHTML = "No items here... yet"
    }    
})

onValue(dairyListInDb, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearDairyListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToDairyListEl(currentItem)
        }    
    } else {
        dairyListEl.innerHTML = "No items here... yet"
    }    
})

onValue(dryListInDb, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearDryListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToDryListEl(currentItem)
        }    
    } else {
        dryListEl.innerHTML = "No items here... yet"
    }    
})

onValue(frozenListInDb, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearFrozenListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToFrozenListEl(currentItem)
        }    
    } else {
        frozenListEl.innerHTML = "No items here... yet"
    }    
})

onValue(miscListInDb, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearMiscListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToMiscListEl(currentItem)
        }    
    } else {
        miscListEl.innerHTML = "No items here... yet"
    }    
})

onValue(medicineListInDb, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearMedicineListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToMedicineListEl(currentItem)
        }    
    } else {
        medicineListEl.innerHTML = "No items here... yet"
    }    
})

/* clear lists functions */
function clearProduceListEl() {
    produceListEl.innerHTML = ""
}
function clearDairyListEl() {
    dairyListEl.innerHTML = ""
}
function clearDryListEl() {
    dryListEl.innerHTML = ""
}
function clearFrozenListEl() {
    frozenListEl.innerHTML = ""
}
function clearMiscListEl() {
    miscListEl.innerHTML = ""
}
function clearMedicineListEl() {
    medicineListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

/* append items database */
function appendItemToProduceListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]    
    let newEl = document.createElement("li")    
    newEl.textContent = itemValue    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `produce/${itemID}`) 
        remove(exactLocationOfItemInDB)
    })    
    produceListEl.append(newEl)
}

function appendItemToDairyListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]    
    let newEl = document.createElement("li")    
    newEl.textContent = itemValue    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `dairy/${itemID}`)   
        remove(exactLocationOfItemInDB)
    })    
    dairyListEl.append(newEl)
}

function appendItemToDryListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]    
    let newEl = document.createElement("li")    
    newEl.textContent = itemValue    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `dry/${itemID}`) 
        remove(exactLocationOfItemInDB)
    })    
    dryListEl.append(newEl)
}

function appendItemToFrozenListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]    
    let newEl = document.createElement("li")    
    newEl.textContent = itemValue    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `frozen/${itemID}`) 
        remove(exactLocationOfItemInDB)
    })    
    frozenListEl.append(newEl)
}

function appendItemToMiscListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]    
    let newEl = document.createElement("li")    
    newEl.textContent = itemValue    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `misc/${itemID}`) 
        remove(exactLocationOfItemInDB)
    })    
    miscListEl.append(newEl)
}

function appendItemToMedicineListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]    
    let newEl = document.createElement("li")    
    newEl.textContent = itemValue    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `medicine/${itemID}`) 
        remove(exactLocationOfItemInDB)
    })    
    medicineListEl.append(newEl)
}
