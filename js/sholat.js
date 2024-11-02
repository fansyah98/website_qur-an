const latitude = '-6.200000'; // Ganti dengan latitude Anda
const longitude = '106.816666'; // Ganti dengan longitude Anda

fetch(`https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}`)
    .then(response => response.json())
    .then(data => {
        const timings = data.data.timings;
        const prayerTimesDiv = document.getElementById('prayer-times');
        prayerTimesDiv.innerHTML = `
            <div class="col-12 col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sholat Fajr</h5>
                        <p class="time">${timings.Fajr}</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sholat Dhuhur</h5>
                        <p class="time">${timings.Dhuhr}</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sholat Ashar</h5>
                        <p class="time">${timings.Asr}</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sholat Maghrib</h5>
                        <p class="time">${timings.Maghrib}</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sholat Isya</h5>
                        <p class="time">${timings.Isha}</p>
                    </div>
                </div>
            </div>
        `;
    })
    .catch(error => console.error('Error fetching prayer times:', error));