'use strict'

document.addEventListener('DOMContentLoaded', function loaded() {
    var clock = document.querySelector('main>div')
    var minuteur = document.querySelector('main button:first-of-type')
    var chronometre = document.querySelector('main button:nth-of-type(2)')
    var horloge = document.querySelector('main button:nth-of-type(3)')
    var reveil = document.querySelector('main button:last-of-type')

    // AFFICHER L HEURE
    function showDate() {
        var date = new Date()

        var time
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();

        if (h < 10) {
            h = '0' + h
        }
        if (m < 10) {
            m = '0' + m
        }
        if (s < 10) {
            s = '0' + s

        }
        time = h + ':' + m + ':' + s
        clock.innerHTML = time
    }

    function refresh(action, time) {
        var t = time
        setInterval(action,t)
    }


    // FONCTION MINUTEUR
    function timer() {
        var form = document.querySelector('form:first-of-type')
        form.style.display = 'block'
        var time = '00:00:00'
        clock.append(time)
        var date = new Date()

        var inHour = document.querySelector('form input:first-of-type')
        var inMin = document.querySelector('form input:nth-of-type(2)')
        var inSec = document.querySelector('form input:last-of-type')
        var startTimer = document.querySelector('form button')

        startTimer.addEventListener('click', function(event) {
            event.preventDefault()
            time = inHour.value + ':' + inMin.value + ':' + inSec.value
            clock.innerHTML = time
            // var downSec = inSec.value--
            // refresh(inSec.value, 1000)
            // clock.innerHTML = downSec
        })
    }

    minuteur.addEventListener('click', function() {
        timer()
        // refresh(timer, 1000)
    })

    horloge.addEventListener('click', function() {
        refresh(showDate, 300)
    })



})
