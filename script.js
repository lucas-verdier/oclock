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


    // FONCTION MINUTEUR
    function timer() {
        var form        = document.querySelector('form:first-of-type')
        form.style.display = 'block'

        var fullTime    = document.querySelector('.countdown-container')
        fullTime.style.display = 'flex'

        var timeHour    = document.querySelector('.hours-c>p')
        var timeMin     = document.querySelector('.mins-c>p')
        var timeSeconds = document.querySelector('.seconds-c>p')

        var inHour      = document.querySelector('form input:first-of-type')
        var inMin       = document.querySelector('form input:nth-of-type(2)')
        var inSec       = document.querySelector('form input:last-of-type')

        var startTimer  = document.querySelector('form button:first-of-type')
        var timeId = 0;
        inHour.addEventListener('focusout', function() {
            timeHour.innerHTML = inHour.value
        })
        inMin.addEventListener('focusout', function() {
            timeMin.innerHTML = inMin.value
        })
        inSec.addEventListener('focusout', function() {
            timeSeconds.innerHTML = inSec.value
        })
        startTimer.addEventListener('click', function(event) {
            event.preventDefault()
            function countDown() {
                timeSeconds.innerHTML--

                if (timeSeconds.innerHTML < 0) {
                    timeMin.innerHTML--
                    timeSeconds.innerHTML = 59
                }
                if (timeMin.innerHTML < 0) {
                    timeHour.innerHTML--
                    timeMin.innerHTML =59
                }
                if (timeHour.innerHTML == 0 && timeMin.innerHTML == 0 && timeSeconds.innerHTML == 0) {
                    clearInterval(timeId)
                }

            }
            timeId =   setInterval(countDown, 1000)
        })
    }

    minuteur.addEventListener('click', function() {
        timer()
        // refresh(timer, 1000)
    })

    horloge.addEventListener('click', function() {
        setInterval(showDate, 300)
    })



})
