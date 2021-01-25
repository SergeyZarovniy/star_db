
const getResponse = async (url) => {
    const res = await fetch (url);
    const body = await res.json();
    return body;
}

getResponse ('https://swapi.dev/api/people/1/')
.then((body)=>{
    console.log(body)
})




