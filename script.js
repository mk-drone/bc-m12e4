window.addEventListener('load', ()=>{

    let getJokeButton = document.getElementById('get-joke');
    let apiUri = 'http://api.icndb.com/jokes/random';
    let jokeParagraph = document.getElementById('joke');

    getJokeButton.addEventListener('click', ()=>{
        getJoke();
    });

    function getJoke(){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', apiUri);
        // console.log(xhr)
        xhr.addEventListener('load', function (){
            let response = JSON.parse(xhr.response);
            jokeParagraph.innerHTML = response.value.joke;
        });
        xhr.send();
    }

    getJoke(); //load joke on page load
});