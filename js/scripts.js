// JavaScript Document

// JSON Data
portfolio = [
    {
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

var staff = [{
    "aisha": [{
        "clear": "images/team/clear/aisha.jpg",
        "pixelated": "images/team/pixelated/aisha.jpg",
        "bio": "is a crafty designer who perpetually strives for pixel perfection. She believes that the first idea is never the best. Often she isn’t content until she has made upwards of 40 revisions. With the help of some Pixeltwist coworkers, she is peeled away from the computer screen long enough to enjoy a green tea frappuccino. That moment is fleeting though, as she quickly finds her way back to her computer to start on revision 41."
    }],
    "keenan": [{
        "clear": "images/team/clear/keenan.jpg",
        "pixelated": "images/team/pixelated/keenan.jpg",
        "bio": "enjoys life through the view of a camera lens. Everywhere he goes he sees shot angles, backdrops and set pieces. It’s this half-man, half-camera cyborg that leads the video department at Pixeltwist. When he isn’t in the studio producing amazing video for clients, Keenan enjoys expanding his already expanded movie knowledge."
    }],
    "kevin": [{
        "clear": "images/team/clear/kevin.jpg",
        "pixelated": "images/team/pixelated/kevin.jpg",
        "bio": "refers to himself as the web wizard at Pixeltwist. While it may seem a touch immodest to refer to himself as a wizard, his talent for flawless code cannot be denied. Some say his ability comes from being a direct descendant of an ancient coding god. The reality is that nobody has seen Kevin leave the studio in a long while. It is believed that he naps in the ceiling at night and emerges in the wee hours of the morning to feed his coding compulsions."
    }],
    "lulu": [{
        "clear": "images/team/clear/lulu.jpg",
        "pixelated": "images/team/pixelated/lulu.jpg",
        "bio": "is project-lead at Pixeltwist. She’s plugged in to everything going on through each day. When a client comes looking for our expertise, she’s spearheading the meeting to extract the perfect idea. Her attention to detail extends to the kitchen, where she often brings some of her masterfully-prepared home-cooked food to the office for everyone to enjoy."
    }],
    "michael": [{
        "clear": "images/team/clear/michael.jpg",
        "pixelated": "images/team/pixelated/michael.jpg",
        "bio": "is the User Experience Designer in charge of keeping the peace between design and usability. His passion is in walking the fine line between a beautiful design and a smart design. His word is the law with keeping UX beautiful, but above all else, functional. So if any designer hopes to get their work approved, they have to get past Michael first."
    }],
    "robb": [{
        "clear": "images/team/clear/robb.jpg",
        "pixelated": "images/team/pixelated/robb.jpg",
        "bio": "is the lead audio guy at Pixeltwist. Much like a dog can pick up sounds that humans can’t, he can pick up minute imperfections in sound that the rest of us mere mortals cannot. During his job interview we had to take his word for it and hire him. Robb’s passion was forged through years of being a musician and music lover."
    }],
    "vanessa": [{
        "clear": "images/team/clear/vanessa.jpg",
        "pixelated": "images/team/pixelated/vanessa.jpg",
        "bio": "is the savvy web designer at Pixeltwist. She’s the web developer embodiment of a swiss army knife. She can knock out fresh new ideas in photoshop, mock them up to work on the web, then present them to the client all in a days work. But aside from school and years of professional experience, where does she get such ability? The word is her sketchbook was imbued by ancient gypsies granting her mystical web development skill."
    }],
    "zach": [{
        "clear": "images/team/clear/vanessa.jpg",
        "pixelated": "images/team/pixelated/vanessa.jpg",
        "bio": "is the content manager at Pixeltwist. Wrangling words like a skillful literary cowboy is how he spends his day. But to put it in plain english, he is the lead copywriter and walking, talking dictionary at the studio. The creative part of Zach’s brain grows three sizes when he’s twisting words for clients at Pixeltwist."
    }]
}];

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

    // #backflipStudios, #theBluePepperGrill, #peacefulPlay, #mercuryInsurance, #composure

    $('.bubble').on('click', function() {
        switch (this.id) {
            case 'webBubble':
                $('#backflipStudios').hide('slow');
                $('#theBluePepperGrill, #peacefulPlay, #mercuryInsurance, #composure').show('slow');
                break;
            case 'audioBubble':
                $('#theBluePepperGrill, #peacefulPlay, #mercuryInsurance').hide('slow');
                $('#backflipStudios, #composure').show('slow');
                break;
            case 'videoBubble':
                $('#theBluePepperGrill').hide('slow');
                $('#backflipStudios, #peacefulPlay, #mercuryInsurance, #composure').show('slow');
                break;
            default:
                break;
        }
    });

    $('.exampleBubble').on('mouseenter', function() {
        $(this).css({
            'cursor': 'pointer',
            'opacity': '0.5',
            'transition': '0.3s ease-in-out',
            '-webkit-transition': '0.3s ease-in-out'
        }).fadeIn('slow');
    });

    $('.exampleBubble').on('mouseout', function() {
        $(this).css({
            'cursor': 'pointer',
            'opacity': '1.0',
            'transition': '0.3s ease-in-out',
            '-webkit-transition': '0.3s ease-in-out'
        }).fadeIn('slow');
    });

    $('.workExamples').on('click', function() {
        var description = $(this).text;

        switch ($(this).attr('id')) {
            case 'backflipStudios':
                description = 'Backflip Studios is a production company headquartered in Ottawa with popular recent Canada-wide releases. They wanted to promote their most ambitious project yet, which is where we came in.';
                break;
            case 'theBluePepperGrill':
                description = 'With locations across Ontario and looking beyond, The Blue Pepper Grill needed a fresh face to lead it’s growth to western Canada.';
                break;
            case 'peacefulPlay':
                description = 'In order to spread their work on a global scale Peaceful Play had to work hard to break into the crowded not-for-profit sector. We were more than happy to accompany them in Africa to help shoot video for use on their website.';
                break;
            case 'mercuryInsurance':
                description = 'Being the most popular insurance company among young drivers, Mercury Insurance decided to target its audience in a campaign to reduce distracted driving. We knew we just had to help out with this very worthwhile cause.';
                break;
            case 'composure':
                description = 'In one of our most ambitious projects yet, we worked with the creators of the upcoming release, Composure, helping them produce and edit teaser trailers. Along with this, we developed their web presence as well as their marketing plan for the release of Composure.';
                break;
            default:
                break;
        }

        var overlay = $('<div id="overlay"><div><h3>' + $(this).attr('id') + '</h3>' + '<div class="details"><img src="images/' + $(this).attr('id') + '.png" alt="' + $(this).attr('id') + '"><p>' + description + '</p></div></div></div>');

        overlay.appendTo(document.body).show('slow');

        if ($(this).length != 0) {
            $(overlay).on('click', function() {
                $(this).hide('slow', function() {
                    $(this).remove();
                });
            });
        }
    });

    $('.icons').on('click', function() {
        switch (this.id) {
            case 'audio':
                $('#aboutCircle').html('<h2>Audio</h2><p>Our seasoned audio pros can handle the most particular auditory demands thrown at them. We have a full sound studio stacked to the ceiling with equipment capable of perfecting each sound down to the decibel.</p>');
                break;
            case 'video':
                $('#aboutCircle').html('<h2>Video</h2><p>Our video experts can find a photogenic in anybody or anything they capture in front of the camera. Our decked out video room including our newest addition, a Canon EOS C100, means we can cast any ideas in its best light.</p>');
                break;
            case 'design':
                $('#aboutCircle').html('<h2>Design</h2><p>We have a stable of brilliant designers eager to be let loose to stretch their creative legs. Their expertise spans any project from print to web. Close consideration is paid to UI and UX design so each page functions intelligently for the user.</p>');
                break;
            case 'development':
                $('#aboutCircle').html('<h2>Development</h2><p>The development team are the experts that give our marvelous designs a beating heart. The creative goes from static pictures and images to functional, responsive websites, apps or anything else imaginable.</p>');
                break;
            case 'marketing':
                $('#aboutCircle').html('<h2>Marketing</h2><p>We begin with a one-on-one meeting between our strategic planners and the client to analyse the details of their project. They then work with you every step of the way starting at the marketing plan as it moves to a finished project that the client is delighted with.</p>');
                break;
            default:
                break;
        }
    });

    $('#photos img').on('mouseenter', function() {
        $(this).css({
            'cursor': 'pointer',
            'opacity': '0.5',
            'transition': '0.3s ease-in-out',
            '-webkit-transition': '0.3s ease-in-out'
        }).fadeIn('slow', function() {
            switch (this.id) {
                case 'aisha':
                    $(this).attr('src', 'images/team/pixelated/aisha.jpg');
                    $('#biberdorf').css('opacity', '1.0');
                    break;
                case 'keenan':
                    $(this).attr('src', 'images/team/pixelated/keenan.jpg');
                    $('#boutilier').css('opacity', '1.0');
                    break;
                case 'kevin':
                    $(this).attr('src', 'images/team/pixelated/kevin.jpg');
                    $('#andrews').css('opacity', '1.0');
                    break;
                case 'lulu':
                    $(this).attr('src', 'images/team/pixelated/lulu.jpg');
                    $('#davies').css('opacity', '1.0');
                    break;
                case 'michael':
                    $(this).attr('src', 'images/team/pixelated/michael.jpg');
                    $('#nugent').css('opacity', '1.0');
                    break;
                case 'robb':
                    $(this).attr('src', 'images/team/pixelated/robb.jpg');
                    $('#over').css('opacity', '1.0');
                    break;
                case 'vanessa':
                    $(this).attr('src', 'images/team/pixelated/vanessa.jpg');
                    $('#burguete').css('opacity', '1.0');
                    break;
                case 'zach':
                    $(this).attr('src', 'images/team/pixelated/zach.jpg');
                    $('#falsetto').css('opacity', '1.0');
                    break;
                default:
                    break;
            }
        });
    });

    $('#photos img').on('mouseout', function() {
        $(this).css({
            'cursor': 'pointer',
            'opacity': '1.0',
            'transition': '0.3s ease-in-out',
            '-webkit-transition': '0.3s ease-in-out'
        }).fadeIn('slow', function() {
            switch (this.id) {
                case 'aisha':
                    $(this).attr('src', 'images/team/clear/aisha.jpg');
                    $('#biberdorf').css('opacity', '0');
                    break;
                case 'keenan':
                    $(this).attr('src', 'images/team/clear/keenan.jpg');
                    $('#boutilier').css('opacity', '0');
                    break;
                case 'kevin':
                    $(this).attr('src', 'images/team/clear/kevin.jpg');
                    $('#andrews').css('opacity', '0');
                    break;
                case 'lulu':
                    $(this).attr('src', 'images/team/clear/lulu.jpg');
                    $('#davies').css('opacity', '0');
                    break;
                case 'michael':
                    $(this).attr('src', 'images/team/clear/michael.jpg');
                    $('#nugent').css('opacity', '0');
                    break;
                case 'robb':
                    $(this).attr('src', 'images/team/clear/robb.jpg');
                    $('#over').css('opacity', '0');
                    break;
                case 'vanessa':
                    $(this).attr('src', 'images/team/clear/vanessa.jpg');
                    $('#burguete').css('opacity', '0');
                    break;
                case 'zach':
                    $(this).attr('src', 'images/team/clear/zach.jpg');
                    $('#falsetto').css('opacity', '0');
                    break;
                default:
                    break;
            }
        });
    });

    $('#photos img').on('click', function() {
        var profile = $(this).text;

        switch ($(this).attr('id')) {
            case 'aisha':
                profile = 'is a crafty designer who perpetually strives for pixel perfection. She believes that the first idea is never the best. Often she isn’t content until she has made upwards of 40 revisions. With the help of some Pixeltwist coworkers, she is peeled away from the computer screen long enough to enjoy a green tea frappuccino. That moment is fleeting though, as she quickly finds her way back to her computer to start on revision 41.';
                break;
            case 'keenan':
                profile = 'enjoys life through the view of a camera lens. Everywhere he goes he sees shot angles, backdrops and set pieces. It’s this half-man, half-camera cyborg that leads the video department at Pixeltwist. When he isn’t in the studio producing amazing video for clients, Keenan enjoys expanding his already expanded movie knowledge.';
                break;
            case 'kevin':
                profile = 'refers to himself as the web wizard at Pixeltwist. While it may seem a touch immodest to refer to himself as a wizard, his talent for flawless code cannot be denied. Some say his ability comes from being a direct descendant of an ancient coding god. The reality is that nobody has seen Kevin leave the studio in a long while. It is believed that he naps in the ceiling at night and emerges in the wee hours of the morning to feed his coding compulsions.';
                break;
            case 'lulu':
                profile = 'is project-lead at Pixeltwist. She’s plugged in to everything going on through each day. When a client comes looking for our expertise, she’s spearheading the meeting to extract the perfect idea. Her attention to detail extends to the kitchen, where she often brings some of her masterfully-prepared home-cooked food to the office for everyone to enjoy.';
                break;
            case 'michael':
                profile = 'is the User Experience Designer in charge of keeping the peace between design and usability. His passion is in walking the fine line between a beautiful design and a smart design. His word is the law with keeping UX beautiful, but above all else, functional. So if any designer hopes to get their work approved, they have to get past Michael first.';
                break;
            case 'robb':
                profile = 'is the lead audio guy at Pixeltwist. Much like a dog can pick up sounds that humans can’t, he can pick up minute imperfections in sound that the rest of us mere mortals cannot. During his job interview we had to take his word for it and hire him. Robb’s passion was forged through years of being a musician and music lover.';
                break;
            case 'vanessa':
                profile = 'is the savvy web designer at Pixeltwist. She’s the web developer embodiment of a swiss army knife. She can knock out fresh new ideas in photoshop, mock them up to work on the web, then present them to the client all in a days work. But aside from school and years of professional experience, where does she get such ability? The word is her sketchbook was imbued by ancient gypsies granting her mystical web development skill.';
            case 'zach':
                profile = 'is the content manager at Pixeltwist. Wrangling words like a skillful literary cowboy is how he spends his day. But to put it in plain english, he is the lead copywriter and walking, talking dictionary at the studio. The creative part of Zach’s brain grows three sizes when he’s twisting words for clients at Pixeltwist.';
                break;
            default:
                break;
        }

        var overlay = $('<div id="overlay"><div class="profile"><img src="images/team/clear/' + $(this).attr('id') + '.jpg" alt="' + $(this).attr('value') + '"><div><h3>' + $(this).attr('value') + '</h3><p>' + profile + '</p></div></div></div>');

        overlay.appendTo(document.body).show('slow');

        if ($(this).length != 0) {
            $(overlay).on('click', function() {
                $(this).hide('slow', function() {
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