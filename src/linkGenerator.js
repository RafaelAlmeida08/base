
function gerarLink(data) {
    const base_url = 'www.localhost:3000/pagecli/'

    const hash = btoa(JSON.stringify(data))

    return  base_url + hash
}

async function linkGenerator (data) {
    
    let link = gerarLink(data)

    const r = await fetch(`https://is.gd/create.php?format=json&url=${link}`)
    const l = await r.json()
    return l.shorturl

}

export default linkGenerator