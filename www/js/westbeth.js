var figCaptions = ["(9 evenings)", "(war on terror)", "(service dining room)", "(1971)", "(1966)", "(1895)", "(1936-1938)", "(A Mathematical Theory of Communication)", "(E.A.T.)", "(2G lunchroom)", "(quantum mechanics study groups w/ tea and cookies)", "(rules for teachers and students)", "(underground chinese kitchen)", "(halal atm)","(halal atm bomb)","(divining rod)", "(rice *gyro* lamb gyro *falafel gyro* hot dog)", "(2500 meals per day)", "(150 gallons ice cream per week, 1000 lb. mashed potatoes per week)", "(commons)", "(corporate research powerhouse)", "(waistline watchers)", "(Can machines think?)"];
var imgSelections = ["http://cdn2.dropmark.com/108792/ee6e4eac2cab41749499812ef9e68b0825e2eebb/IMG_6883.jpg","http://cdn2.dropmark.com/108792/7d6a1b37bd8397df0083cd28bf8613a93f7cdd20/P4.Westbeth-1-1024x759.jpg","http://cdn2.dropmark.com/108792/ee6e4eac2cab41749499812ef9e68b0825e2eebb/IMG_6883.jpg", "http://cdn2.dropmark.com/108792/082daa32c4659c0f1dfcb8445a8851df75eb53ed/Screen%20Shot%202016-07-30%20at%2010.23.05%20AM.png", "http://cdn2.dropmark.com/108792/89a15516e728967d2e9f0948daf45aa45f36a1b7/!st%20West%20Street%20cafeteria%201926-nocaption.jpg", "http://cdn2.dropmark.com/108792/da53aef69707e2e3a11a21d9e15aee4c5e8754b3/IMG_6482.jpg", "http://cdn2.dropmark.com/108792/0ff89a5871fa55c09da770ea5aab04804486461d/object-IMG_6595.jpg",
"http://cdn2.dropmark.com/108792/a3c9543904f5ac66d9783547165d263d4e67f87b/Screen%20Shot%202016-07-26%20at%209.54.27%20PM.png",
"http://cdn2.dropmark.com/108792/6b592a91e2b901dd556a22c88b813f410036c138/Alan_Turing.jpg",
"http://cdn2.dropmark.com/108792/865c3d32f91bb215c9d24090b1ac7e407d0fa905/flavin.jpg",
"http://cdn2.dropmark.com/108792/08f269c0301fd2e7f71fd08b9d4025119d7170cf/Roberts-Claude-Shannon-782.jpg",
"http://cdn2.dropmark.com/108792/9faa2bc21b78558984524dcd5e12542b55a28913/IMG_6757.jpg",
"http://cdn2.dropmark.com/108792/f4d3ba6c5efaaab5beb037cfdb8b5a9dbc060a00/IMG_5907.JPG",
"http://cdn2.dropmark.com/108792/b162e7198105ded7458e40f3342a6196b09331d4/IMG_7157_1.jpg",
"http://cdn2.dropmark.com/108792/ffe0a72deaafa197c6bdf959be41d6abf24c3e0c/1874-watermap.jpg",
"http://cdn2.dropmark.com/108792/685d3d95d9c7deb10107fb416763e21dcff622bd/IMG_6220%20copy.jpg",
"http://cdn2.dropmark.com/108792/686c7f5e59b50a7d08c0fffc76804790c031734a/1904-block.png",
"http://cdn2.dropmark.com/108792/8792d7eb888f059a1040c639430597b643def495/2391%2046.jpg",
"http://cdn2.dropmark.com/108792/865c3d32f91bb215c9d24090b1ac7e407d0fa905/flavin.jpg",
"http://cdn2.dropmark.com/108792/6b592a91e2b901dd556a22c88b813f410036c138/Alan_Turing.jpg",
"http://cdn2.dropmark.com/108792/1a2b2d93e54267a5a057e8099b7d9b0a534fff81/image_crop1.jpeg",
"http://cdn2.dropmark.com/108792/a02bdd04f5198ac591b07b8e89c88c5d1f3168b5/9_eve-eat-artforum-februar-1967.jpg",
"http://cdn2.dropmark.com/108792/0d4d4ab8b39d7c8b7da08ce50f1036008a0da1f2/File_004.jpg",
"http://cdn2.dropmark.com/108792/a626419f1b4ad26f6ac870bfd5f0b74a7ef423cc/IMG_5846.JPG",
"http://cdn2.dropmark.com/108792/258568c485c6a71392034a113d8484edce2323a8/1024px-Manhttan_Project_Organization_Chart.gif",
"http://cdn2.dropmark.com/108792/7c76a98703e2205257e52a290d0d5420470dcee2/1024px-Y12_Calutron_Operators.jpg", "http://cdn2.dropmark.com/108792/7bbd89450b695d4a4a212505596630fcd7d246af/IMG_7406.jpg"];
var nextLinks ={
  "geology":"infrastructure",
  "bathroom":"labs",
  "cafeteria":"foodcart",
  "bombs":"cafeteria",
  "infrastructure":"sculpture",
  "foodcart":"futures",
  "westbeth":"labs",
  "labs":"bombs",
  "futures":"geology",
  "sculpture":"scripts",
  "scripts":"pipes",
  "pipes":"geology"
};
var stories = [
  "12:57 in the library. or is it a monument, a memorial, a puddle, a foodcart. the smells are a network organism, growing and rotting in the heat. filling my lungs with magenta and spores. The dancers eat apple pie and mashed potatoes in lunchroom 2-G, open 24/7 to feed the information. Algorithmic personhoods are in the kitchen training the coffee makers. The food cart is serving negronis in the courtyard.",
  "8:50 pm in a bathroom, in a sauna behind the kitchen on the 3rd floor. We’re debugging 2060. they’re debugging the surface morphologies, writing style sheets for the kitchens and halal sculptures. compressive sensing reconstructs 1971. a woman is on the bed with a child. they’re floating over a terrain of sculptures and motion amplified paintings that appear to breathe.",
  "12:13 noEscape. Turing is digging for openings. we make a drawing of the algorithm which becomes a movie, which becomes a dance, which becomes a zoning diagram. It forms into a seed from which a plant grows into bookshelves, with neon frames. The women are training the sculptures. they’re training the courtyard to ebb and flow when the birds arrive. They lose the backups of themselves and travel by the feel of the waters. The ancestors are having cocktails in exile. while magic carpets are dropping falafel meat ball over rice soda gato mon.-fri.",
  "12:32 COLD BEER halal SODA JUICE HOT atm bomb apple pie a la mode. homework. folders. infinite downloads. the walls the webs the spot elevations and how fast the waters travel. we dance to the wharf vomiting 1000 lbs of mashed potatoes per week, into the sculptor’s loft, whose ceiling topography is an infinite sin curve. in the cafeteria the sirens are howling, the basement is howling, the toilet is speaking, the pipes are sobbing, the columns are compressing, the walls are encrusted. the floors are melting. they calibrate the Hudson to build and erase the courtyard in real time.",
  "11:32 cold civil wars on terror in summers of heat and conventions. schwarma falafel phone cards. land art sensors bend the field and are gobbled by the market algorithm. the photo is no longer a photo. the object is no longer an object. objs are no longer objs. the food cart is a prop for a script in a present future experience that already happened. the sculptures are sensors they track the emotions and train the sky to predict its own movements. they tell the Hudson to build and erase the trading posts in real time.",
  "12:42 pm est, Turing and Shannon practice tai chi movements in a graveled side garden under a tree. the pigeons and aggressive sparrows are eating the crumbs that a wanderer with bags has thrown. a show is starting. there’s a puddle in the cafeteria, that shows, that glows a blue hue with the words , everywhere there are openings. I come into the cafeteria for a chicken rice and Gatorade. the phone cards are good for calling the subterranean strata where the Hudson flowed. I hear the lou reed bass. I hear the clapping piece setting off an explosion. of color. I see future synthetic terrains laid over the stepped pedestals and the sculptures signaling the network. I go to the bathroom to be alone with my light, transmitting warmth and filling my energy. it tells me to breathe. it tells me a joke. it sings to me. I tell it a secret.",
  "12:50 pm est of a segment Sunday, the ancient sculpture is connected, advertising objects for sale in the velvet underground. I meet Turing in the bathroom, and he shows me the way to the color. Or he shows me the way to the dance studio, where they’re making lists, soft rules, written by a nun, illustrated through colorful cleaning products. we go to the cafeteria in the courtyard to memorialize what we’ve forgotten. we project puddles in the courtyard which show us the layers of the art market, while we enjoy fish tacos and beer.",
  "12:56 welcome. open 24/7 , through the bathroom past the water fountain into the loft, the row of windows in front of the row of windows. one made of glass and brick and cast iron, the internal one of blue and red neon. or is it fluorescent that looks like neon. frames of ballasts, a breeze, breaking the heat, broken by a storm, which flooded the past with bass and reverb from 1971, serving chicken rice fish rice beef rice water Snapple Gatorade, 24/7. we’re moving the energy with shannon and turing on the gravel part under the tree. soon it will be hot. soon it will be wet. soon it will be forgotten. or scrambled. speaking into the sculpture to get instructions that will open the wall, that will open the door in the street, that will carry the water, that comes from a well from another time. from which we’ll drink and have a falafel in the cafeteria with an engineer that just moved to nyc from Indiana with his wife, after which they’ll move to the suburbs in new jersey and raise three children whose grandchildren will communicate in color and code. all the folders, all the homework, flushed down the toilet traveling through pipes to the tobacco plantation. a girl with rainbow sunglasses and a green dress sits inside of the sculpture . it tells her a joke. it tells her to pay attention.",
  "12:06 a can of soda on a hot day, pour it into a crack that makes the sound of clapping. the tai chi moves the energy into the magenta which lights up the corner in the bathroom, singing to me, listening to my secrets. the radio broadcast records the bomb calculations and buries them in the tubes of the city, miles under the street. where they flow into the water supply and contaminate the fluid modeling table. the compressor chills the color in the light in the bathroom, while we comfort each other with jokes and chicken tacos in the courtyard. we drink from the puddle which formed when 1971 compressed a portion of the courtyard terrain and showed us a glowing food cart.",
  "4:06 pm est, walking on the flattened terraces towards the cafeteria, the magenta is blowing a song of chicken rice tacos and cigarettes. turing and shannon meet in the bathroom to walk through the corner to the cafeteria, to pick up a session of tai chi with the sculptor. the sky is turning a pale shade of (255, 255, 255) and filling with clouds. the wind is coming from the northwest 9mph, gusts of 19 mph, humidity 46%, pressure 30”. the creatures in blue jump along the pedestals towards the ramp and roll down . the corridor pipes talk about how they’re feeling, they’re telling the fountain that it’s okay, that something will happen."
];
function randomFrom(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var app = angular.module("myApp", ["ngRoute","ngAudio"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "partials/main.html",
    controller: "mainCtrl"
  })
  .when("/stories", {
    templateUrl : "partials/main.html",
    controller: "mainCtrl"
  })
  .when("/story/:identifier", {
    templateUrl : "partials/details.html",
    controller: "storyCtrl"
  })
  .when("/:identifier", {
    templateUrl : "partials/details.html",
    controller: "detailsCtrl"
  });
});
app.controller("detailsCtrl", function ($scope,  $routeParams) {
  $scope.identifier = $routeParams.identifier;
  $scope.next = nextLinks[$routeParams.identifier];
  $scope.imgSrc = randomFrom(imgSelections);
  $scope.caption  = randomFrom(figCaptions);
});
app.controller("mainCtrl", function ($scope,  $routeParams) {
  $scope.showStories = (window.location.hash.indexOf("stories") != -1);
});
app.controller("storyCtrl", function ($scope,  $routeParams, ngAudio) {
  $scope.identifier = "Story";
  $scope.next = "stories";
  $scope.isStory = (window.location.hash.indexOf("story") != -1);
  if($scope.isStory){
    $scope.sectionClass = "regular";
  }
  $scope.story = stories[$routeParams.identifier - 1];
  $scope.audio = ngAudio.load('audio/story'+$routeParams.identifier+'.mp3');
  $scope.audioLabel = "Play";
  var interval ;
  $scope.toggleAudio = function(){
    if($scope.audio.paused){
      $scope.audioLabel = "Pause";
      $scope.audio.play();
    interval = setInterval(function() {
         if($scope.audio.progress == 1){
           $scope.audio.stop();
           clearInterval(interval);
           $scope.audioLabel = "Play";
         }
       }, 1000);
    }else{
      $scope.audioLabel = "Play";
      $scope.audio.pause();
      clearInterval(interval);
    }
  }
  $scope.$on("$destroy", function(){
      console.log("Destroy Called");
      $scope.audio.stop();
      clearInterval(interval);
   });
});





