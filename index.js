let meubleData = []

const fetchMeuble = async () => {
    await fetch("http://localhost:3000/api/furniture").then((res)=> 
    console.log( res.json()))
    
}

fetchMeuble()