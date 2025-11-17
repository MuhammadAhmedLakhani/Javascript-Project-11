
let fileInput = document.getElementById("csvFileInput")
let thead = document.getElementById("thead")
let tbody = document.getElementById("tbody")


fileInput.addEventListener("change", readFile)

function readFile() {
    console.log("function running")

    var file = fileInput.files[0]

    console.log(file)

    var reader = new FileReader()

    reader.readAsText(file)

    reader.addEventListener("load", function () {
        let data = reader.result
        let structureData = dataFormation(data)        
        console.log(structureData)
        tableUIFormation(structureData)

    })

}

function dataFormation(data) {



    let resultArray = data.split("\n")
    
    let cleanLines = resultArray.map((line) => line.trim())


    let headings = cleanLines[0].split(",")


    let dataLines = cleanLines.slice(1)

    let results = dataLines.map((line, i) => {
        const values = line.split(",")


        let obj = {}

        headings.map((heading, index) => {
            obj[heading] = values[index]
        })
        return obj

    })
    return results

    

}


function tableUIFormation(data) {


    let tableRow = document.createElement("tr")

    let headers = Object.keys(data[0])

    console.log(headers)
    tableRow.innerHTML= headers.map((head) =>{
        return `<th>${head}</th>`
    }).join("")  

    thead.appendChild(tableRow)

    data.forEach((student,ind) => {
        let row = document.createElement("tr")
        console.log(student)   
        let cellsData = Object.values(student).map((value)=>{
            return `<td>${value}</td>`
        }).join("")

        row.innerHTML =  cellsData

        tbody.appendChild(row)


    });


    console.log(tbody)

    var header =  document.getElementById("input")
    header.setAttribute("class","hide")

    fileInput.value = ""
    var backbtn = document.getElementById("back")
    backbtn.setAttribute("class","back")
    var heading = document.getElementById("heading")
    console.log(heading)
    heading.setAttribute("class","heading")

}


function back() {

    var attendanceTable = document.getElementById("attendanceTable")
    attendanceTable.setAttribute("class","hide")
    var header =  document.getElementById("input")
    header.setAttribute("class","input")
     var backbtn = document.getElementById("back")
    backbtn.setAttribute("class","hide")
    
    
}



