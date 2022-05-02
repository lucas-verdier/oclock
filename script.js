'use strict'

document.addEventListener('DOMContentLoaded', function loaded() {
    var clock       = document.querySelector('main>div')
    var minuteur    = document.querySelector('#controls button:first-of-type')
    var chronometre = document.querySelector('#controls button:nth-of-type(2)')
    var horloge     = document.querySelector('#controls button:nth-of-type(3)')
    var reveil      = document.querySelector('#controls button:last-of-type')

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
        var stopTimer   = document.querySelector('form button:last-of-type')
        var timeId = 0
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
                    timeMin.innerHTML = 59
                }
                if (timeHour.innerHTML == 0 && timeMin.innerHTML == 0 && timeSeconds.innerHTML == 0) {
                    alert('Temps écoulé')
                    clearInterval(timeId)
                }

            }
            timeId =   setInterval(countDown, 1000)
        })
        stopTimer.addEventListener('click', function(event) {
            event.preventDefault()
            clearInterval(timeId)
        })
    }

    // FONCTION CHRONOMETRE
    function stopWatch() {
        var chronoContainer = document.querySelector('#chrono-container')
        chronoContainer.style.display = 'block'

        var hour = document.querySelector('.hours-s>p')
        var min  = document.querySelector('.mins-s>p')
        var sec  = document.querySelector('.seconds-s>p')
        var mil  = document.querySelector('.mil-s>p')

        var interval

        var startChrono = document.querySelector('.chrono-controls button:first-of-type')
        var stopChrono  = document.querySelector('.chrono-controls button:nth-of-type(2)')
        var loopChrono  = document.querySelector('.chrono-controls button:nth-of-type(3)')
        var resetChrono = document.querySelector('.chrono-controls button:last-of-type')

        startChrono.addEventListener('click', function(event) {
            event.preventDefault()
            function countUp() {
                mil.innerHTML++
                if (mil.innerHTML > 99) {
                    sec.innerHTML++
                    mil.innerHTML = '00'
                }
                if (sec.innerHTML > 59) {
                    min.innerHTML++
                    sec.innerHTML = '0'
                }
                if (min.innerHTML > 59) {
                    hour.innerHTML++
                    min.innerHTML = '0'
                }
            }
           interval = setInterval(countUp, 10)
        })
        stopChrono.addEventListener('click', function(event) {
            event.preventDefault()
            clearInterval(interval)
        })
        loopChrono.addEventListener('click', function(event) {
            event.preventDefault()
            var li = document.createElement('li')
            li.innerHTML = min.innerHTML + ':' + sec.innerHTML + ':' +  mil.innerHTML
            document.getElementById('loop').appendChild(li)
        })
        resetChrono.addEventListener('click', function(event) {
            event.preventDefault()
            hour.innerHTML = '00'
            min.innerHTML  = '00'
            sec.innerHTML  = '00'
            mil.innerHTML  = '00'
            document.getElementById('loop').remove()
            clearInterval(interval)
        })
    }

    // FONCTION ALARME

    function alarm() {
        var alarmContainer = document.querySelector('#alarm-container')
        alarmContainer.style.display = 'block'
        var formAlarm      = document.querySelector('#alarm-container form')
        formAlarm.style.display = 'block'

        var hour = document.querySelector('.hours-a>p')
        var min  = document.querySelector('mins-a>p')
        var interval

        var inputHour = document.querySelector('#alarm-container form input:first-of-type')
        var inputMin  = document.querySelector('#alarm-container form input:last-of-type')
        console.log(inputMin.value)

        var setAlarm   = document.querySelector('.alarm-controls button:first-of-type')
        var unsetAlarm = document.querySelector('.alarm-controls button:last-of-type')
        inputHour.addEventListener('focusout', function() {
            hour  = inputHour.value
            // console.log(hour)

        })
        inputMin.addEventListener('focusout', function() {
            min =  inputMin.value
            // console.log(min)
        })

        var array = []
        setAlarm.addEventListener('click', function(event) {
            event.preventDefault()

            // var ul = document.querySelector('#alarms')
            var li = document.createElement('li')
            var deleteAlarm = document.createElement('button')
            var p = document.createElement('p')
            li.innerHTML = hour + ' : ' + min
            deleteAlarm.innerHTML = 'Supprimer'
            p.innerHTML = hour - DateHour
            document.getElementById('alarms').appendChild(li)
            document.getElementById('alarms').appendChild(deleteAlarm)
            document.getElementById('alarms').appendChild(p)
            array.push(li)

            function currentTime() {
                var date = new Date()
                var dateHour = date.getHours()
                // console.log(dateHour)
                var dateMin  = date.getMinutes()
                // console.log(dateMin)
                if (hour == dateHour && min == dateMin) {
                    alert('Wake up')
                    clearInterval(interval)
                }
            }
            console.log(array)
            interval = setInterval(currentTime, 1000)
        })


    }

    minuteur.addEventListener('click', function() {
        timer()
    })

    horloge.addEventListener('click', function() {
        setInterval(showDate, 300)
    })

    chronometre.addEventListener('click', function() {
        stopWatch()
    })

    reveil.addEventListener('click', function() {
        setInterval(showDate, 300)
        alarm()
    })



})
