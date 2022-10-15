const btnElement = document.querySelector(".btn")
const URL = "https://jsonplaceholder.typicode.com/posts"
btnElement.addEventListener("click", clickHandler)

async function clickHandler(){
    try {
        const res = await fetch(URL)
        if(!res.ok){
            console.log("here's a problem");
            return
        }
        const data = await res.json()
        data.forEach(post => {
            const markUp =
            `<li class="list-item">
                <b>Post title:</b> ${post.title}
                <ul>
                    <li>
                        <b>Content:</b> ${post.body}
                    </li>
                </ul>
            </li>`
            document.querySelector('ol').insertAdjacentHTML("beforeend", markUp)
        });
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

const API_KEY = "K6mHYBLy9eWUP6LQknm33B7hChpPzvVa"
const searchBTN = document.getElementById("search-btn")

searchBTN.addEventListener("click", getGiphy)

async function getGiphy(){
    let requestURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=12&q=`
    let input = document.getElementById("input_bar").value.trim()
    requestURL = requestURL.concat(input)
    let res = await fetch(requestURL)
    if(!res.ok){
        console.log("here's a problem");
        return
    }
    const content = await res.json();
    let imagesURL = content.data;
    imagesURL.forEach(data => {
            const markUp =
            `
            <img src="${data.images.downsized.url}">
            `
            document.querySelector('div').insertAdjacentHTML("beforeend", markUp)
        });
    console.log(imagesURL)
}