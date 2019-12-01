$(document).ready(function() {  
    var weapons = [
        {"name": "44_pistol",
        "damage": 48,
        "fire_rate": 6,
        "range": 119,
        "accuracy": 66,
        "weight": 4.2,
        "value": 99,
        "img": "../weapons/44_pistol.webp"
        },
        {"name": "10mm_pistol",
        "damage": 18,
        "fire_rate": 46,
        "range": 119,
        "accuracy": 61,
        "weight": 4.2,
        "value": 53,
        "img": "../weapons/10mm_pistol.webp"
        },
        {"name": "assault_rifle",
        "damage": 30,
        "fire_rate": 40,
        "range": 119,
        "accuracy": 72,
        "weight": 13.1,
        "value": 144,
        "img": "../weapons/assault_rifle.webp"
        },
        {"name": "handmade_rifle",
        "damage": 32,
        "fire_rate": 40,
        "range": 119,
        "accuracy": 72,
        "weight": 12.8,
        "value": 136,
        "img": "../weapons/handmade_rifle.webp"
        },
        {"name": "the_problem_solver",
        "damage": 57,
        "fire_rate": 59,
        "range": 185,
        "accuracy": 92,
        "weight": 13.1,
        "value": 149,
        "img": "../weapons/the_problem_solver.webp"
        },
        {"name": "combat_shotgun",
        "damage": 50,
        "fire_rate": 20,
        "range": 47,
        "accuracy": 23,
        "weight": 11.1,
        "value": 87,
        "img": "../weapons/combat_shotgun.webp"
        },
        {"name": "big_boy",
        "damage": 486,
        "fire_rate": 1,
        "range": 117,
        "accuracy": 39,
        "weight": 30.7,
        "value": 512,
        "img": "../weapons/big_boy.webp"
        },
        {"name": "missile_launcher",
        "damage": 150,
        "fire_rate": 2,
        "range": 203,
        "accuracy": 65,
        "weight": 21,
        "value": 314,
        "img": "../weapons/missile_launcher.webp"
        },
        {"name": "overseers_guardian",
        "damage": 55,
        "fire_rate": 90,
        "range": 109,
        "accuracy": 76,
        "weight": 11.1,
        "value": 117,
        "img": "../weapons/overseers_guardian.webp"
        }
    ];

    $('.item-list a').on('click', function(e) {
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    $('.item-list a').on('mouseenter', function(e) {
        var current_item = $(e.currentTarget).attr('class');
        console.log(current_item);

        for(item in weapons) {
            if(weapons[item].name == current_item) {
                console.log(weapons[item]);

                var container = $('.item-stats');
                container.find('.damage').html(weapons[item].damage)
                container.find('.ammo').html(weapons[item].ammo)
                container.find('.fire_rate').html(weapons[item].fire_rate)
                container.find('.range').html(weapons[item].range)
                container.find('.accuracy').html(weapons[item].accuracy)
                container.find('.weight').html(weapons[item].weight)
                container.find('.value').html(weapons[item].value)
                var images = $('.weapons')
                images.find('.weapon-img').attr("src", weapons[item].img)
            }
        };
    });

    var interval = setInterval(function() {
        var momentNow = moment();
        $('#time').html(momentNow.format('hh:mm:ss A'));
    }, 100);

});