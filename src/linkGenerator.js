

    function gerarLink(data) {

    let url = window.location.href.toString()

    let base_url = `${url}?`;


    const hash = btoa(JSON.stringify(data))

    return  base_url + hash
}

async function linkGenerator (data) {
    console.log(data);
    let link = gerarLink(data);
    var link_encode = encodeURIComponent(link.replace("http://", "www."));

    const r = await fetch('https://is.gd/create.php?format=json&url='+ link_encode)
    const l = await r.json()

    return l.shorturl

}

export default linkGenerator