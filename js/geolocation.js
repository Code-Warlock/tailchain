const findUserLocation = ()=>{
  const success = position=>{
  let latitude = position.coords.latitude
  let longitude = position.coords.longitude
  // console.log(latitude + "\n" + longitude)
  const FOREXNAV = document.querySelector("a[href='#forex']");
  const BTCNAV = document.querySelector("a[href='#btc']");
  const DESCTEXT = document.querySelector("#desc");
  const DESCTEXT2 = document.querySelector("#desc2");
  const items = document.querySelectorAll("#item");
  const itemswrapper1 = document.querySelector("#items1");
  const itemswrapper2 = document.querySelector("#items2");
  const forexOffers = []
  const btcOffers = []
  for (let index = 0; index < Math.floor(items.length / 2); index++) {
    forexOffers.push(items[index]);
    
  }
  for (let index = Math.floor(items.length / 2) ; index < Math.floor(items.length ); index++) {
    btcOffers.push(items[index]);
    
  }
  
  let DESCTEXTVALUE =   DESCTEXT.innerHTML
  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`).then(response=>response.json())
  .then(data=>{
    DESCTEXT.innerHTML += `<br> <i>These are the offers available for your country ${data.countryName}</i>`;
    DESCTEXTVALUE = DESCTEXT.innerHTML;
    items.forEach(item => {
      if(item.querySelector("div .countries").textContent.includes(`${data.countryName}`)){
          // console.log(item)
      }
      else{
        item.style.cssText = "display:none"
      }
    });
    let forexCount = 0
    forexOffers.forEach(item => {
      if (item.style.display == "none") {
        forexCount += 1
      }
    });
    if (forexCount == 3) {
      document.querySelector("#items1-wrapper").innerHTML = `<p class="leading-relaxed text-base text-center lg:mb-4 mb-10 lg:mt-0 mt-12" id="desc">There's no offer on this category available for your country!</p>`
    }
    let btcCount = 0;
    btcOffers.forEach(item => {
      if (item.style.display == "none") {
        btcCount += 1
      }
    });
    if (btcCount == 3) {
      document.querySelector("#items2-wrapper").innerHTML = `<p class="leading-relaxed text-base text-center lg:mb-4 mb-10 lg:mt-0 mt-12" id="desc">There's no offer on this category available for your country!</p>`
    }

    // console.log(data.countryName + " " + DESCTEXTVALUE)
  })

  }
  const error = err=>{
    const DESCTEXT = document.querySelector("#desc");
    const DESCTEXT2 = document.querySelector("#desc2");
    DESCTEXT.innerHTML += `<br> <b>${err.message}</b> <br> <i>You are seeing this because you have prevented Trade Knights from accessing your locations</i>`;
    DESCTEXT2.innerHTML += `<br> <b>${err.message}</b> <br> <i>You are seeing this because you have prevented Trade Knights from accessing your locations</i>`;
  }

  return navigator.geolocation.getCurrentPosition(success , error);
}
findUserLocation()

