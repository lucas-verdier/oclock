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

        var fullTime = document.querySelector('.countdown-container')
        fullTime.style.display = 'flex'

        var timeHour = document.querySelector('.hours-c>p')
        var timeMin = document.querySelector('.mins-c>p')
        var timeSeconds = document.querySelector('.seconds-c>p')

        var inHour = document.querySelector('form input:first-of-type')
        var inMin = document.querySelector('form input:nth-of-type(2)')
        var inSec = document.querySelector('form input:last-of-type')

        var startTimer = document.querySelector('form button')

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
            var s = timeSeconds.innerHTML
            // console.log(timeSeconds.innerHTML - 1)
            function countDown() {
                // timeHour.innerHTML = timeHour.innerHTML - 1
                // timeMin.innerHTML = timeMin.innerHTML - 1
                //
                if (timeSeconds.innerHTML > 0) {
                    timeSeconds.innerHTML = timeSeconds.innerHTML - 1
                    //
                    if (timeSeconds.innerHTML < 0) {
                        timeMin.innerHTML = timeMin.innerHTML -1
                        timeSeconds.innerHTML = 59

                        // if (timeHour.innerHTML == 0 && timeMin.innerHTML == 0 && timeSeconds.innerHTML == 0) {
                        //     timeHour.innerHTML = '00'
                        //     timeMin.innerHTML = '00'
                        //     timeSeconds.innerHTML = 'OO'
                        //     console.log('hello')
                        //     alert('OVER')
                        // }
                    }
                } else {
                    console.log('over')
                }





            }
            // refresh(console.log(timeSeconds) - 1, 1000)
            refresh(countDown, 1000)

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
