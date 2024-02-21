let meubleData = []
await fetchMeuble = async () => {
    await fetch('http://localhost:3000/api/furniture').then(res => res.json())
    .then((promise) => console.log(promise))
    
}