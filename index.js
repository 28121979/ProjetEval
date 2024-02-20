let meubleData = [];

const fetchMeuble = async () => {
   await fetch("http://localhost:3000/api/furniture") 
    .then((response) => 
    console.log(response.json()) 
    );
}
fetchMeuble()

