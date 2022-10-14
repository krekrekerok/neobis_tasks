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


// const API_KEY = "K6mHYBLy9eWUP6LQknm33B7hChpPzvVa"

// const requestURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=1&q=deadpool`

// const searchBTN = document.getElementById("search-btn")
// let img = document.getElementsById("img")

// searchBTN.addEventListener("click", getGiphy)


// async function getGiphy(){
//     let res = await fetch(requestURL)
//     if(!res.ok){
//         console.log("here's a problem");
//         return
//     }
//     const content = await res.json()
//     console.log(content.data[0].images.downsized.url);
//     // img.src = content.data[0].images.downsized.url
//     const markUp =
//     `<img src="${content.data[0].images.downsized.url}" alt= "${content.data[0].title}">`
//     document.querySelector('#img').insertAdjacentHTML("afterbegin", markUp)
// }