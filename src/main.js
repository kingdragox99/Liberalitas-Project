  const bruxelles = { lat: 50.833962, lng: 4.437884 };
  const liege = { lat: 50.632992, lng: 5.567669 };
  var villeArray = [liege,bruxelles];

  const marker = () =>{

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: liege,
    });

    for(let i = 0; i < villeArray.length;i++){
      new google.maps.Marker({
      position: villeArray[i],
      map: map,

      });
    }
  }
  
  window.initMap = marker;