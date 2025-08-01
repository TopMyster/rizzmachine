async function generate(){
    const response = await fetch('https://rizzapi.vercel.app/random')
    const data = await response.json()
    const result = data.text
    document.getElementById('rizztext').textContent = result
}
