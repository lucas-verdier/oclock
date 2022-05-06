'use strict'

document.addEventListener('DOMContentLoaded', function loaded() {
    var clock       = document.querySelector('#dateTime')
    var minuteur    = document.querySelector('#controls button:first-of-type')
    var chronometre = document.querySelector('#controls button:nth-of-type(2)')
    var horloge     = document.querySelector('#controls button:nth-of-type(3)')
    var reveil      = document.querySelector('#controls button:last-of-type')

    var body            = document.querySelector('body')
    var form            = document.querySelector('form:first-of-type')
    var fullTime        = document.querySelector('.countdown-container')
    var chronoContainer = document.querySelector('#chrono-container')
    var alarmContainer  = document.querySelector('#alarm-container')
    var formAlarm       = document.querySelector('#alarm-container form')


    // AFFICHER L HEURE
    function displayDate() {
        setInterval(showDate, 300)
    }
    function showDate() {
        // form.style.display = 'none'
        // fullTime.style.display = 'none'
        // chronoContainer.style.display = 'none'

        var date = new Date()

        var time
        var h = date.getHours()
        h = h.toString()
        h = h.padStart(2, '0')

        var m = date.getMinutes()
        m = m.toString()
        m = m.padStart(2, '0')

        var s = date.getSeconds()
        s = s.toString()
        s = s.padStart(2, '0')

        time = h + ':' + m + ':' + s
        clock.innerHTML = time
        clock.style.display = 'block'
    }

    // FONCTION MINUTEUR
    function timer() {
        form.style.display = 'flex'
        fullTime.style.display = 'flex'
        // clock.style.display = 'none'
        chronoContainer.style.display = 'none'
        alarmContainer.style.display = 'none'
        formAlarm.style.display = 'none'

        var timeHour      = document.querySelector('.hours-c>p')
        var timeMin       = document.querySelector('.mins-c>p')
        timeMin.innerHTML = timeMin.innerHTML.toString()
        timeMin.innerHTML = timeMin.innerHTML.padStart(2, '0')

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
        chronoContainer.style.display = 'flex'
        // clock.style.display = 'none'
        form.style.display = 'none'
        fullTime.style.display = 'none'
        alarmContainer.style.display = 'none'
        formAlarm.style.display = 'none'

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

        setInterval(showDate, 300)

        alarmContainer.style.display = 'flex'
        formAlarm.style.display = 'block'
        chronoContainer.style.display = 'none'
        form.style.display = 'none'
        fullTime.style.display = 'none'

        var hour = document.querySelector('.hours-a>p')
        var min  = document.querySelector('mins-a>p')
        var sec  = document.querySelector('secs-a>p')
        var interval

        var inputHour = document.querySelector('#alarm-container form input:first-of-type')
        // inputHour = inputHour.toString()
        // inputHour = inputHour.padStart(2,'0')

        var inputMin  = document.querySelector('#alarm-container form input:nth-of-type(2)')
        // inputMin = inputMin.toString()
        // inputMin = inputMin.padStart(2,'0')

        var inputSec  = document.querySelector('#alarm-container form input:nth-of-type(3)')
        // inputSec = inputSec.toString()
        // inputSec = inputSec.padStart(2,'0')

        var setAlarm   = document.querySelector('.alarm-controls button:first-of-type')
        var unsetAlarm = document.querySelector('.alarm-controls button:last-of-type')
        inputHour.addEventListener('focusout', function() {
            hour  = inputHour.value
        })
        inputMin.addEventListener('focusout', function() {
            min =  inputMin.value
        })
        inputSec.addEventListener('focusout', function() {
            sec = inputSec.value
        })
        sec = inputSec.value
        min =  inputMin.value
        hour  = inputHour.value
        var array = []
        setAlarm.addEventListener('click', function(event) {
            event.preventDefault()

            var li = document.createElement('li')
            li.innerHTML = hour + ':' + min + ':' + sec
            document.getElementById('alarms').appendChild(li)
            array.push(li)

            function currentTime() {
                var date = new Date()

                var dateHour = date.getHours()
                dateHour = dateHour.toString()
                dateHour = dateHour.padStart(2, '0')

                var dateMin  = date.getMinutes()
                dateMin = dateMin.toString()
                dateMin = dateMin.padStart(2, '0')

                var dateSec = date.getSeconds()
                dateSec = dateSec.toString()
                dateSec = dateSec.padStart(2, '0')

                var time = dateHour + ':' + dateMin + ':' + dateSec

                var audio = new Audio('dong.mp3')
                array.forEach((element) => {
                    console.log(element.innerHTML)
                    if (element.innerHTML == time) {
                        audio.play()
                        alert('time out')
                        element.remove()
                        clearInterval(interval)
                        audio.pause()
                    }
                })
            }
            interval = setInterval(currentTime, 1000)
        })

        unsetAlarm.addEventListener('click', function() {
            document.querySelector('#alarms').remove()
            array = []
            clearInterval(interval)
        })
    }

    minuteur.addEventListener('click', timer)

    horloge.addEventListener('click', displayDate)

    chronometre.addEventListener('click', stopWatch)

    reveil.addEventListener('click', alarm)
})
