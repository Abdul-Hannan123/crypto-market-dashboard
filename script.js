let update = document.querySelector(".update");
const apiUrl = "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin&x_cg_demo_api_key=CG-G5hKdBSLyBD8FzaU5vGSTFsn";
async function callApi() {
    let response = await fetch(apiUrl);
    let result = await response.json();
    update.innerHTML = result.bitcoin.usd;
}
callApi();