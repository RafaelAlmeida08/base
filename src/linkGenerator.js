
function gerarLink(data) {

    let url = window.location.href.toString()
    let verify = url.match(/https/);
    let base_url = '';

    console.log(verify)
    console.log(url)
    if(verify != null) {
        base_url = `${url.replace('https://', 'www.')}pagecli/`
    } else {
        base_url = `${url.replace('http://', 'www.')}pagecli/`
    }

    console.log(base_url)

    const hash = btoa(JSON.stringify(data))

    return  base_url + hash
}

async function linkGenerator (data) {
    
    let link = gerarLink(data)
    console.log(link)

    const r = await fetch(`https://is.gd/create.php?format=json&url=${link.replace('https://', 'www.')}`)
    const l = await r.json()
    return l.shorturl

}

export default linkGenerator