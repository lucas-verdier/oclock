<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Snooze</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200&display=swap" rel="stylesheet">
</head>
<body>
    <main>
        <div id="dateTime">
        </div>

        <!--    MINUTEUR    -->
        <div class="countdown-container">
            <div class="hours-c">
                <p>00</p>
                <p>Heures</p>
            </div>
            <div class="mins-c">
                <p>00</p>
                <p>Minutes</p>
            </div>
            <div class="seconds-c">
                <p>00</p>
                <p>Secondes</p>
            </div>
        </div>
        <form method="POST">
            <input type="text" name="hours" value="00" placeholder="hour">
            <input type="text" name="minutes" value="00" placeholder="min">
            <input type="text" name="seconds" value="00" placeholder="sec">
            <button>Start</button>
            <button>Stop</button>
        </form>

        <!--    CHRONOMETRE    -->
        <section id="chrono-container">
            <div class="chrono-value">
                <div class="hours-s">
                    <p>00</p>
                </div>
                <div class="mins-s">
                    <p>00</p>
                </div>
                <div class="seconds-s">
                    <p>00</p>
                </div>
                <div class="mil-s">
                    <p>00</p>
                </div>
            </div>
            <div class="chrono-controls">
                <button>Start</button>
                <button>Stop</button>
                <button>Tour</button>
                <button>Reset</button>
            </div>
        </section>
        <ul id="loop"></ul>

        <!--   REVEIL    -->
        <section id="alarm-container">
            <div class="alarm-time">
                <div class="hours-a">
                    <p></p>
                </div>
                <div class="mins-a">
                    <p></p>
                </div>
                <div class="secs-a">
                    <p></p>
                </div>
            </div>
            <form method="POST">
                <input type="number" name="alarmHours" value="00">
                <input type="number" name="alarmMins" value="00">
                <input type="number" name="alarmSecs" value="00">
            </form>
            <div class="alarm-controls">
                <button>Enregistrer</button>
                <button>Annuler</button>
            </div>
            <ul id="alarms"></ul>
        </section>

        <!--    BUTTONS CONTROL    -->
        <div id="controls">
            <button>Minuteur</button>
            <button>Chronomètre</button>
            <button>Heure</button>
            <button>Réveil</button>
        </div>
    </main>
</body>
</html>
