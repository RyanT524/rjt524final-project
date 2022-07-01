const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

//Functionality for the Tabs in the header
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })

        tab.classList.add('active')
        target.classList.add('active')
    })
})
//Functionality for the buttons used to display the APOD information
function done(){
    document.getElementById("AJAXButton")
        .addEventListener("click", makeRequest)


}
function getDate(){
    return document.getElementById('dateInput').value
}
function genRequest(){
    const apiKey = "api_key=cr2LhfIvaQVrpOwI2Fpqj4DtMzzc67SSxb5GLB9g"
    let date = getDate()
    date = (date !== "")?`date=${date}`:""

    return "https://api.nasa.gov/planetary/apod?" + apiKey + "&" + date.toString()
}

function makeRequest(){
    const reqUrl = genRequest()
    const httpRequest = new XMLHttpRequest()
    httpRequest.onreadystatechange = handleRequest
    httpRequest.open("GET", reqUrl)
    httpRequest.send()

        function handleRequest(){
        console.log(httpRequest.readyState)
        if (httpRequest.readyState === XMLHttpRequest.DONE &&
            httpRequest.status === 200){
            let data = JSON.parse(httpRequest.responseText)
            console.log(data)
            const {url, copyright, date, explanation, hdurl, media_type, service_version,
                title} = data
            console.log(url)
            document.getElementById("imgHolder").src = url
            document.getElementById("desc").textContent = explanation
        }
        }

}