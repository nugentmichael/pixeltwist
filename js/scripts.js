// JavaScript Document
var overlay;

// JSON Data
services = [{
        "id": "audio",
        "service": "Audio",
        "description": "Our seasoned audio pros can handle the most particular auditory demands thrown at them. We have a full sound studio stacked to the ceiling with equipment capable of perfecting each sound down to the decibel."
    },
    {
        "id": "video",
        "service": "Video",
        "description": "Our video experts can find a photogenic in anybody or anything they capture in front of the camera. Our decked out video room including our newest addition, a Canon EOS C100, means we can cast any ideas in its best light."
    },
    {
        "id": "design",
        "service": "Design",
        "description": "We have a stable of brilliant designers eager to be let loose to stretch their creative legs. Their expertise spans any project from print to web. Close consideration is paid to UI and UX design so each page functions intelligently for the user."
    },
    {
        "id": "development",
        "service": "Development",
        "description": "The development team are the experts that give our marvelous designs a beating heart. The creative goes from static pictures and images to functional, responsive websites, apps or anything else imaginable."
    },
    {
        "id": "marketing",
        "service": "Marketing",
        "description": "We begin with a one-on-one meeting between our strategic planners and the client to analyse the details of their project. They then work with you every step of the way starting at the marketing plan as it moves to a finished project that the client is delighted with."
    }
];

portfolio = [{
        "id": "backflipStudios",
        "name": "Backflip Studios",
        "description": "Backflip Studios is a production company headquartered in Ottawa with popular recent Canada-wide releases. They wanted to promote their most ambitious project yet, which is where we came in."
    },
    {
        "id": "theBluePepperGrill",
        "name": "The Blue Pepper Grill",
        "description": "With locations across Ontario and looking beyond, The Blue Pepper Grill needed a fresh face to lead it’s growth to western Canada."
    },
    {
        "id": "peacefulPlay",
        "name": "Peaceful Play",
        "description": "In order to spread their work on a global scale Peaceful Play had to work hard to break into the crowded not-for-profit sector. We were more than happy to accompany them in Africa to help shoot video for use on their website."
    },
    {
        "id": "mercuryInsurance",
        "name": "Mercury Insurance",
        "description": "Being the most popular insurance company among young drivers, Mercury Insurance decided to target its audience in a campaign to reduce distracted driving. We knew we just had to help out with this very worthwhile cause."
    },
    {
        "id": "composure",
        "name": "Composure",
        "description": "In one of our most ambitious projects yet, we worked with the creators of the upcoming release, Composure, helping them produce and edit teaser trailers. Along with this, we developed their web presence as well as their marketing plan for the release of Composure."
    }
];

staff = [{
        "id": "aisha",
        "name": "Aisha Biberdorf",
        "role": "Graphic Designer",
        "clear": "images/team/clear/aisha.jpg",
        "pixelated": "images/team/pixelated/aisha.jpg",
        "bio": "is a crafty designer who perpetually strives for pixel perfection. She believes that the first idea is never the best. Often she isn’t content until she has made upwards of 40 revisions. With the help of some Pixeltwist coworkers, she is peeled away from the computer screen long enough to enjoy a green tea frappuccino. That moment is fleeting though, as she quickly finds her way back to her computer to start on revision 41."
    },
    {
        "id": "keenan",
        "name": "Keenan Boutilier",
        "role": "Video Producer",
        "clear": "images/team/clear/keenan.jpg",
        "pixelated": "images/team/pixelated/keenan.jpg",
        "bio": "enjoys life through the view of a camera lens. Everywhere he goes he sees shot angles, backdrops and set pieces. It’s this half-man, half-camera cyborg that leads the video department at Pixeltwist. When he isn’t in the studio producing amazing video for clients, Keenan enjoys expanding his already expanded movie knowledge."
    },
    {
        "id": "kevin",
        "name": "Kevin Andrews",
        "role": "Web Developer",
        "clear": "images/team/clear/kevin.jpg",
        "pixelated": "images/team/pixelated/kevin.jpg",
        "bio": "refers to himself as the web wizard at Pixeltwist. While it may seem a touch immodest to refer to himself as a wizard, his talent for flawless code cannot be denied. Some say his ability comes from being a direct descendant of an ancient coding god. The reality is that nobody has seen Kevin leave the studio in a long while. It is believed that he naps in the ceiling at night and emerges in the wee hours of the morning to feed his coding compulsions."
    },
    {
        "id": "lulu",
        "name": "Lulu Davies",
        "role": "Project Lead",
        "clear": "images/team/clear/lulu.jpg",
        "pixelated": "images/team/pixelated/lulu.jpg",
        "bio": "is project-lead at Pixeltwist. She’s plugged in to everything going on through each day. When a client comes looking for our expertise, she’s spearheading the meeting to extract the perfect idea. Her attention to detail extends to the kitchen, where she often brings some of her masterfully-prepared home-cooked food to the office for everyone to enjoy."
    },
    {
        "id": "michael",
        "name": "Michael Nugent",
        "role": "Web Designer",
        "clear": "images/team/clear/michael.jpg",
        "pixelated": "images/team/pixelated/michael.jpg",
        "bio": "is the User Experience Designer in charge of keeping the peace between design and usability. His passion is in walking the fine line between a beautiful design and a smart design. His word is the law with keeping UX beautiful, but above all else, functional. So if any designer hopes to get their work approved, they have to get past Michael first."
    },
    {
        "id": "robb",
        "name": "Robb Over",
        "role": "Audio Producer",
        "clear": "images/team/clear/robb.jpg",
        "pixelated": "images/team/pixelated/robb.jpg",
        "bio": "is the lead audio guy at Pixeltwist. Much like a dog can pick up sounds that humans can’t, he can pick up minute imperfections in sound that the rest of us mere mortals cannot. During his job interview we had to take his word for it and hire him. Robb’s passion was forged through years of being a musician and music lover."
    },
    {
        "id": "vanessa",
        "name": "Vanessa Burguete",
        "role": "Graphic Designer",
        "clear": "images/team/clear/vanessa.jpg",
        "pixelated": "images/team/pixelated/vanessa.jpg",
        "bio": "is the savvy web designer at Pixeltwist. She’s the web developer embodiment of a swiss army knife. She can knock out fresh new ideas in photoshop, mock them up to work on the web, then present them to the client all in a days work. But aside from school and years of professional experience, where does she get such ability? The word is her sketchbook was imbued by ancient gypsies granting her mystical web development skill."
    },
    {
        "id": "zach",
        "name": "Zach Falsetto",
        "role": "Graphic Designer",
        "clear": "images/team/clear/zach.jpg",
        "pixelated": "images/team/pixelated/zach.jpg",
        "bio": "is the content manager at Pixeltwist. Wrangling words like a skillful literary cowboy is how he spends his day. But to put it in plain english, he is the lead copywriter and walking, talking dictionary at the studio. The creative part of Zach’s brain grows three sizes when he’s twisting words for clients at Pixeltwist."
    },
];

$(function() {
    var pull = $('#pull');
    menu = $('#navigation ul');
    menuHeight = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $('ul.content').snapscroll();

    // Button group toggling
    $('ul.btn-group.toggle li').on('click', function() {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
    })

    var details_closed = true;

    $('#navigation a').on('click', function() {
        if (details_closed) {
            $(this).siblings('div').fadeIn(200);
        } else {
            $(this).siblings('div').fadeOut(200);
        }

        details_closed = !details_closed;
    });

    $('.flexslider').flexslider({
        animation: 'slide',
        animationLoop: false,
    });

    $('.bubble').on('click', function() {
        switch (this.id) {
            case 'webBubble':
                $(this).eq(0).addClass('active').siblings().not($(this).eq(0)).removeClass('active');
                $('#examplesWrapper .web').show('slow').siblings().not('#examplesWrapper .web').hide('slow');
                break;
            case 'audioBubble':
                $(this).eq(0).addClass('active').siblings().not($(this).eq(0)).removeClass('active');
                $('#examplesWrapper .audio').show('slow').siblings().not('#examplesWrapper .audio').hide('slow');
                break;
            case 'videoBubble':
                $(this).eq(0).addClass('active').siblings().not($(this).eq(0)).removeClass('active');
                $('#examplesWrapper .video').show('slow').siblings().not('#examplesWrapper .video').hide('slow');
                break;
            default:
                break;
        }
    });

    $('.workExamples').on('click', function() {
        for (var i = 0; i < portfolio.length; i++) {
            if ($(this).attr('id') === portfolio[i].id) {
                overlay = $('<div id="overlay">\
				<div>\
					<h3>' + portfolio[i].name + '</h3>\
					<div class="details">\
						<img src="images/' + portfolio[i].id + '.png" alt="' + portfolio[i].name + '">\
							<p>' + portfolio[i].description + '</p>\
							</div>\
						</div>\
					</div>');
            }
        }

        $('body').append(overlay);

        if ($(this).length != 0) {
            $(overlay).on('click', function() {
                $(this).hide('slow', function() {
                    $(this).remove();
                });
            });
        }
    });

    $('.icons').on('click', function() {
        for (var k = 0; k < services.length; k++) {
            if (this.id === services[k].id) {
                $('#aboutCircle').html('<h2>' + services[k].service + '</h2><p>' + services[k].description + '</p>');
            }
        }
    });

    for (var j = 0; j < staff.length; j++) {
        (function(j) {
            $('#team #photos').append('\
			<div class="teammate">\
				<span>' + staff[j].name + '<br>' + staff[j].title + '</span>\
				<img src="' + staff[j].clear + '" id = "' + staff[j].id + '" alt = "' + staff[j].name + '" data-clear-src="' + staff[j].clear + '" data-pixel-src="' + staff[j].pixelated + '">\
			</div>');

            $('#photos img').on('mouseenter', function() {
                $(this).attr('src', $(this).data('pixelSrc'));
            });

            $('#photos img').on('mouseleave', function() {
                $(this).attr('src', $(this).data('clearSrc'));
            });

            $('#photos img').on('click', function() {
                if ($(this).attr('id') === staff[j].id) {
                    overlay = $('<div id="overlay">\
					<div>\
						<h3>' + staff[j].name + '</h3>\
						<div class="details">\
							<img src="' + staff[j].clear + '" alt="' + staff[j].name + '">\
								<p>' + staff[j].bio + '</p>\
								</div>\
							</div>\
						</div>');

                    $('body').append(overlay);

                    if ($(this).length != 0) {
                        $(overlay).on('click', function() {
                            $(this).hide('slow', function() {
                                $(this).remove();
                            });
                        });
                    }
                }
            });
        })(j);
    }
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