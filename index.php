<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Snooze</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <main>
        <div>
        </div>
        <div class="countdown-container">
            <div class="hours-c">
                <p>00</p>
            </div>
            <div class="mins-c">
                <p>00</p>
            </div>
            <div class="seconds-c">
                <p>00</p>
            </div>
        </div>
        <button>Minuteur</button>

        <form method="POST">
            <input type="text" name="hours" value="00" placeholder="hour">
            <input type="text" name="minutes" value="00" placeholder="min">
            <input type="text" name="seconds" value="00" placeholder="sec">
            <button>Start</button>
        </form>
        <button>Chronomètre</button>
        <button>Heure</button>
        <button>Réveil</button>
    </main>
</body>
</html>