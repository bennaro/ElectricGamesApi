const serverOfflineOrOnline = {
    game: "https://localhost:7226/game",
    console: "https://localhost:7226/consoles",
    gameCharacter: "https://localhost:7226/gameCharacter"

}


const getStatusCheckForGame = async () => {



    const result = await axios.get(serverOfflineOrOnline.game);
    if (result.status == 200) {
        document.getElementById("div-showme-status").innerHTML = `server is online <img class="picture" src="../images/greendot.png" alt="green filled circle to indicate server is online">`
    } else {
        return document.getElementById("div-showme-status").innerHTML = `server is offline <img class="picture" src="../images/reddot.png" alt="red filled circle to indicate server is offline">`
    }
    console.log(result.data);

    return result.data;


}

const getStatusCheckForConsole = async () => {



    const result = await axios.get(serverOfflineOrOnline.console);
    if (result.status == 200) {
        document.getElementById("div-showme-status").innerHTML = `server is online <img class="picture" src="../images/greendot.png" alt="green filled circle to indicate server is online">`
    } else {
        return document.getElementById("div-showme-status").innerHTML = `server is offline <img class="picture" src="../images/reddot.png" alt="red filled circle to indicate server is offline">`
    }
    console.log(result.data);

    return result.data;

}

const getStatusCheckForGameCharacter = async () => {



    const result = await axios.get(serverOfflineOrOnline.gameCharacter);
    if (result.status == 200) {
        document.getElementById("div-showme-status").innerHTML = ` server is online <img class="picture" src="../images/greendot.png" alt="green filled circle to indicate server is online">`
    } else {
        return document.getElementById("div-showme-status").innerHTML = `server is offline <img class="picture" src="../images/reddot.png" alt="red filled circle to indicate server is offline">`
    }
    console.log(result.data);

    return result.data;

}



getStatusCheckForConsole()
getStatusCheckForGameCharacter()

getStatusCheck();
