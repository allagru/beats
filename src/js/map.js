let myMap;
const init = () => {
 myMap = new ymaps.Map("map", {
  center: [59.938951, 30.315635],
   zoom: 11,
   controls: [],
 });
 
 let coords = [
     
     [60.007082,30.259321],
     [59.888601,30.475086]
   ],
   myCollection = new ymaps.GeoObjectCollection({}, {
     draggable: false,
     iconLayout: 'default#image',
     iconImageHref: '/beats/src/svg/marker.svg',
     iconImageSize: [58, 73],
     iconImageOffset: [-35, -52]
   });
 
 for (let i = 0; i < coords.length; i++) {
   myCollection.add(new ymaps.Placemark(coords[i]));
 }
 
 myMap.geoObjects.add(myCollection);
 
 myMap.behaviors.disable('scrollZoom');
};
 
ymaps.ready(init);