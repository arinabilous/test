   $('.carousel').carousel({
       interval: false
   });

   $(document).on('mouseleave', '.carousel', function() {

       $(this).carousel('pause');
   });



   function magnify(imgID, zoom) {
       var img, glass, w, h, bw;
       img = document.getElementById(imgID);
       /*create magnifier glass:*/
       glass = document.createElement("DIV");
       glass.setAttribute("class", "img-magnifier-glass");
       /*insert magnifier glass:*/
       img.parentElement.insertBefore(glass, img);
       /*set background properties for the magnifier glass:*/
       glass.style.backgroundImage = "url('" + img.src + "')";
       glass.style.backgroundRepeat = "no-repeat";
       glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
       bw = 3;
       w = glass.offsetWidth / 2;
       h = glass.offsetHeight / 2;
       /*execute a function when someone moves the magnifier glass over the image:*/
       glass.addEventListener("mousemove", moveMagnifier);
       img.addEventListener("mousemove", moveMagnifier);
       /*and also for touch screens:*/
       glass.addEventListener("touchmove", moveMagnifier);
       img.addEventListener("touchmove", moveMagnifier);

       function moveMagnifier(e) {
           var pos, x, y;
           /*prevent any other actions that may occur when moving over the image*/
           e.preventDefault();
           /*get the cursor's x and y positions:*/
           pos = getCursorPos(e);
           x = pos.x;
           y = pos.y;
           /*prevent the magnifier glass from being positioned outside the image:*/
           if (x > img.width - (w / zoom)) {
               x = img.width - (w / zoom);
           }
           if (x < w / zoom) {
               x = w / zoom;
           }
           if (y > img.height - (h / zoom)) {
               y = img.height - (h / zoom);
           }
           if (y < h / zoom) {
               y = h / zoom;
           }
           /*set the position of the magnifier glass:*/
           glass.style.left = (x - w) + "px";
           glass.style.top = (y - h) + "px";
           /*display what the magnifier glass "sees":*/
           glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
       }

       function getCursorPos(e) {
           var a, x = 0,
               y = 0;
           e = e || window.event;
           /*get the x and y positions of the image:*/
           a = img.getBoundingClientRect();
           /*calculate the cursor's x and y coordinates, relative to the image:*/
           x = e.pageX - a.left;
           y = e.pageY - a.top;
           /*consider any page scrolling:*/
           x = x - window.pageXOffset;
           y = y - window.pageYOffset;
           return {
               x: x,
               y: y
           };
       }
   }
   /* Initiate Magnify Function
                                                                                                                                                                                                                                                                                                     with the id of the image, and the strength of the magnifier glass:*/
   magnify("myimage", 3);

   // Get the modal
   var modal = document.getElementById('myModal');

   // Get the button that opens the modal
   var btn = document.getElementById("myBtn");

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];

   // When the user clicks the button, open the modal 
   btn.onclick = function() {
       modal.style.display = "block";
   }

   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
       modal.style.display = "none";
   }

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
           if (event.target == modal) {
               modal.style.display = "none";
           }
       }
       // Get the modal
   var modal = document.getElementById('myModal');

   // Get the button that opens the modal
   var btn = document.getElementById("myBtn");

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("closemd")[0];

   // When the user clicks the button, open the modal 
   btn.onclick = function() {
       modal.style.display = "block";
   }

   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
       modal.style.display = "none";
   }

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }
   $("#phone").mask("+38 (999) 999-9999");

   $("#phonef").mask("+38 (999) 999-9999");
   document.getElementById('clear-button').addEventListener('click', function() {
       ["radio"].forEach(function(id) {
           document.getElementById(id).checked = false;
       });
       return false;
   })

   function initMap() {
       var myLatLng = {
           lat: 48.921249,
           lng: 24.711795
       };

       var map = new google.maps.Map(document.getElementById('map2'), {
           zoom: 15,
           center: myLatLng,
           disableDefaultUI: true
       });

       var image = {
           url: "img/marker.png", // url
           scaledSize: new google.maps.Size(35, 50), // size
       };

       var marker = new google.maps.Marker({
           map: map,
           icon: image,
           title: 'Наш адрес',
           position: {
               lat: 48.920216,
               lng: 24.716628
           }
       });
   }
   window.onscroll = function() {
       scrollFunction()
   };

   function scrollFunction() {
       if (document.body.scrollTop > 2600 || document.documentElement.scrollTop > 2600) {
           document.getElementById("TOP").style.display = "block";
       } else {
           document.getElementById("TOP").style.display = "none";
       }
   }

   function topFunction() {
       document.body.scrollTop = 0;
       document.documentElement.scrollTop = 0;
   }