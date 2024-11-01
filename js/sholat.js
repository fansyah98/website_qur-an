// Ganti dengan latitude dan longitude Anda
const latitude = '-6.200000';  
const longitude = '106.816666'; 

fetch(`http://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}`)
    .then(response => response.json())
    .then(data => {
        const timings = data.data.timings;
        const prayerTimesDiv = document.getElementById('prayer-times');
        prayerTimesDiv.innerHTML = `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sholat Fajat</h5>
                        <p class="time">${timings.Fajr}</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sholat Dhuzur</h5>
                        <p class="time">${timings.Dhuhr}</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sholat Ahzar</h5>
                        <p class="time">${timings.Asr}</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Shloat Magrib</h5>
                        <p class="time">${timings.Maghrib}</p>
                    </div>
                </div>
            </div>
            <div class="col">
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