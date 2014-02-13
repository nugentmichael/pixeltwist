// JavaScript Document

/*----- JavaScript Scroll Snap -----*/
$(function(){
	var pull = $('#pull');
		menu= $('#navigation ul');
		menuHeight = menu.height();
		
		$(pull).on('click',function(e){
			e.preventDefault();
			menu.slideToggle();
		});
});

$(function() {	
    $("ul.content").snapscroll();

    // Button group toggling
    $("ul.btn-group.toggle li").on("click", function() {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
    })

    var details_closed = true;
    $("#navigation a").on("click", function() {
      if(details_closed) {     
        $(this).siblings("div").fadeIn(200);
      } else {
        $(this).siblings("div").fadeOut(200);
      }
      details_closed = !details_closed;
    })

  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
  });

  // #backflipStudios, #theBluePepperGrill, #peacefulPlay, #mercuryInsurance, #composure

  $(".bubble").click(function() {
    if (this.id == "webBubble") {
      $("#backflipStudios").hide("slow");
      $("#theBluePepperGrill, #peacefulPlay, #mercuryInsurance, #composure").show("slow");
    } else if (this.id == "audioBubble") {
      $("#theBluePepperGrill, #peacefulPlay, #mercuryInsurance").hide("slow");
      $("#backflipStudios, #composure").show("slow");
    } else if (this.id == "videoBubble") {
      $("#theBluePepperGrill").hide("slow");
      $("#backflipStudios, #peacefulPlay, #mercuryInsurance, #composure").show("slow");
    }
  });

  $(".exampleBubble").mouseenter(function() {
    $(this).css({'cursor': 'pointer', 'opacity': '0.5', 'transition': '0.3s ease-in-out', '-webkit-transition': '0.3s ease-in-out'}).fadeIn("slow");
  });

  $(".exampleBubble").mouseout(function() {
    $(this).css({'cursor': 'pointer', 'opacity': '1.0', 'transition': '0.3s ease-in-out', '-webkit-transition': '0.3s ease-in-out'}).fadeIn("slow");
  });

  $(".workExamples").click(function() {
      var profile = $(this).text == "";
        
      if ($(this).attr("id") == "backflipStudios") {
        profile = "<p>Backflip Studios is a production company headquartered in Ottawa with popular recent Canada-wide releases. They wanted to promote their most ambitious project yet, which is where we came in.</p>";
      } else if ($(this).attr("id") == "theBluePepperGrill") {
        profile = "<p>With locations across Ontario and looking beyond, The Blue Pepper Grill needed a fresh face to lead it’s growth to western Canada.</p>";
      } else if ($(this).attr("id") == "peacefulPlay") {
        profile = "<p>In order to spread their work on a global scale Peaceful Play had to work hard to break into the crowded not-for-profit sector. We were more than happy to accompany them in Africa to help shoot video for use on their website.</p>";
      } else if ($(this).attr("id") == "mercuryInsurance") {
        profile = "<p>Being the most popular insurance company among young drivers, Mercury Insurance decided to target its audience in a campaign to reduce distracted driving. We knew we just had to help out with this very worthwhile cause.</p>";
      } else if ($(this).attr("id") == "composure") {
        profile = "<p>In one of our most ambitious projects yet, we worked with the creators of the upcoming release, Composure, helping them produce and edit teaser trailers. Along with this, we developed their web presence as well as their marketing plan for the release of Composure.</p>";
      }

      var overlay = jQuery('<div id="overlay">' +  '<img src="images/' + $(this).attr('id') + '.png" alt="' + $(this).attr('id') +'"><h3>' + $(this).attr('id') + '</h3><br><p>' + profile + '</p></div>');
      overlay.appendTo(document.body).show("slow");

      if ($(this).length != 0) {
        $(overlay).click(function() {
          $(this).hide("slow", function() {
            $(this).remove();
          });
        });
      }
    });

  $(".icons").click(function() {
    if (this.id == "audio") {
      $("#aboutCircle").html("<h2>Audio</h2><p>Our seasoned audio pros can handle the most particular auditory demands thrown at them. We have a full sound studio stacked to the ceiling with equipment capable of perfecting each sound down to the decibel.</p>");
    } else if (this.id == "video") {
      $("#aboutCircle").html("<h2>Video</h2><p>Our video experts can find a photogenic in anybody or anything they capture in front of the camera. Our decked out video room including our newest addition, a Canon EOS C100, means we can cast any ideas in its best light.</p>");
    } else if (this.id == "design") {
      $("#aboutCircle").html("<h2>Design</h2><p>We have a stable of brilliant designers eager to be let loose to stretch their creative legs. Their expertise spans any project from print to web. Close consideration is paid to UI and UX design so each page functions intelligently for the user.</p>");
    } else if (this.id == "development") {
      $("#aboutCircle").html("<h2>Development</h2><p>The development team are the experts that give our marvelous designs a beating heart. The creative goes from static pictures and images to functional, responsive websites, apps or anything else imaginable.</p>");
    } else if (this.id == "marketing") {
      $("#aboutCircle").html("<h2>Marketing</h2><p>We begin with a one-on-one meeting between our strategic planners and the client to analyse the details of their project. They then work with you every step of the way starting at the marketing plan as it moves to a finished project that the client is delighted with.</p>");
    }
  });

    $("#photos img").mouseenter(function() {
        $(this).css({'cursor': 'pointer','opacity': '0.5', 'transition': '0.3s ease-in-out', '-webkit-transition': '0.3s ease-in-out'}).fadeIn("slow", function() {
          if (this.id == "aisha") {
            $(this).attr("src", "images/team/pixelated/aisha.jpg");
            $("#biberdorf").css({'opacity': '1.0'});
          } else if (this.id == "keenan") {
            $(this).attr("src", "images/team/pixelated/keenan.jpg");
            $("#boutilier").css({'opacity': '1.0'});
          } else if (this.id == "kevin") {
            $(this).attr("src", "images/team/pixelated/kevin.jpg");
            $("#andrews").css({'opacity': '1.0'});
          } else if (this.id == "lulu") {
            $(this).attr("src", "images/team/pixelated/lulu.jpg");
            $("#davies").css({'opacity': '1.0'});
          } else if (this.id == "michael") {
            $(this).attr("src", "images/team/pixelated/michael.jpg");
            $("#nugent").css({'opacity': '1.0'});
          } else if (this.id == "robb") {
            $(this).attr("src", "images/team/pixelated/robb.jpg");
            $("#over").css({'opacity': '1.0'});
          } else if (this.id == "vanessa") {
            $(this).attr("src", "images/team/pixelated/vanessa.jpg");
            $("#burguete").css({'opacity': '1.0'});
          } else if (this.id == "zach") {
            $(this).attr("src", "images/team/pixelated/zach.jpg");
            $("#falsetto").css({'opacity': '1.0'});
          }
        });
      });

    $("#photos img").mouseout(function() {
        $(this).css({'cursor': 'pointer', 'opacity': '1.0', 'transition': '0.3s ease-in-out', '-webkit-transition': '0.3s ease-in-out'}).fadeIn("slow", function() {
          if (this.id == "aisha") {
            $(this).attr("src", "images/team/clear/aisha.jpg");
            $("#biberdorf").css({'opacity': '0'});
          } else if (this.id == "keenan") {
            $(this).attr("src", "images/team/clear/keenan.jpg");
            $("#boutilier").css({'opacity': '0'});
          } else if (this.id == "kevin") {
            $(this).attr("src", "images/team/clear/kevin.jpg");
            $("#andrews").css({'opacity': '0'});
          } else if (this.id == "lulu") {
            $(this).attr("src", "images/team/clear/lulu.jpg");
            $("#davies").css({'opacity': '0'});
          } else if (this.id == "michael") {
            $(this).attr("src", "images/team/clear/michael.jpg");
            $("#nugent").css({'opacity': '0'});
          } else if (this.id == "robb") {
            $(this).attr("src", "images/team/clear/robb.jpg");
            $("#over").css({'opacity': '0'});
          } else if (this.id == "vanessa") {
            $(this).attr("src", "images/team/clear/vanessa.jpg");
            $("#burguete").css({'opacity': '0'});
          } else if (this.id == "zach") {
            $(this).attr("src", "images/team/clear/zach.jpg");
            $("#falsetto").css({'opacity': '0'});
          }
        });
      });

    $("#photos img").click(function() {
      var profile = $(this).text == "";
        
      if ($(this).attr("id") == "aisha") {
        profile = "<p>is a crafty designer who perpetually strives for pixel perfection. She believes that the first idea is never the best. Often she isn’t content until she has made upwards of 40 revisions. With the help of some Pixeltwist coworkers, she is peeled away from the computer screen long enough to enjoy a green tea frappuccino. That moment is fleeting though, as she quickly finds her way back to her computer to start on revision 41.</p>";
      } else if ($(this).attr("id") == "keenan") {
        profile = "<p>enjoys life through the view of a camera lens. Everywhere he goes he sees shot angles, backdrops and set pieces. It’s this half-man, half-camera cyborg that leads the video department at Pixeltwist. When he isn’t in the studio producing amazing video for clients, Keenan enjoys expanding his already expanded movie knowledge.</p>";
      } else if ($(this).attr("id") == "kevin") {
        profile = "<p>refers to himself as the web wizard at Pixeltwist. While it may seem a touch immodest to refer to himself as a wizard, his talent for flawless code cannot be denied. Some say his ability comes from being a direct descendant of an ancient coding god. The reality is that nobody has seen Kevin leave the studio in a long while. It is believed that he naps in the ceiling at night and emerges in the wee hours of the morning to feed his coding compulsions.</p>";
      } else if ($(this).attr("id") == "lulu") {
        profile = "<p>is project-lead at Pixeltwist. She’s plugged in to everything going on through each day. When a client comes looking for our expertise, she’s spearheading the meeting to extract the perfect idea. Her attention to detail extends to the kitchen, where she often brings some of her masterfully-prepared home-cooked food to the office for everyone to enjoy.</p>";
      } else if ($(this).attr("id") == "michael") {
        profile = "<p>is the User Experience Designer in charge of keeping the peace between design and usability. His passion is in walking the fine line between a beautiful design and a smart design. His word is the law with keeping UX beautiful, but above all else, functional. So if any designer hopes to get their work approved, they have to get past Michael first.</p>";
      } else if ($(this).attr("id") == "robb") {
        profile = "<p>is the lead audio guy at Pixeltwist. Much like a dog can pick up sounds that humans can’t, he can pick up minute imperfections in sound that the rest of us mere mortals cannot. During his job interview we had to take his word for it and hire him. Robb’s passion was forged through years of being a musician and music lover.</p>";
      } else if ($(this).attr("id") == "vanessa") {
        profile = "<p>is the savvy web designer at Pixeltwist. She’s the web developer embodiment of a swiss army knife. She can knock out fresh new ideas in photoshop, mock them up to work on the web, then present them to the client all in a days work. But aside from school and years of professional experience, where does she get such ability? The word is her sketchbook was imbued by ancient gypsies granting her mystical web development skill.</p>";
      } else if ($(this).attr("id") == "zach") {
        profile = "<p>is the content manager at Pixeltwist. Wrangling words like a skillful literary cowboy is how he spends his day. But to put it in plain english, he is the lead copywriter and walking, talking dictionary at the studio. The creative part of Zach’s brain grows three sizes when he’s twisting words for clients at Pixeltwist.</p>";
      }

      var overlay = jQuery('<div id="overlay">' +  '<img src="images/team/clear/' + $(this).attr('id') + '.jpg" alt="' + $(this).attr('id') +'"><h3>' + $(this).attr('value') + '</h3><br><p>' + profile + '</p></div>');
      overlay.appendTo(document.body).show("slow");

      if ($(this).length != 0) {
        $(overlay).click(function() {
          $(this).hide("slow", function() {
            $(this).remove();
          });
        });
      }
  });
});

/*----- Google Maps API -----*/

function initialize() {
    var map_canvas = document.getElementById('map_canvas');
    var map_options = {
      center: new google.maps.LatLng(45.42153, -75.69719),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(map_canvas, map_options)
    
    }
    
    google.maps.event.addDomListener(window, 'load', initialize);