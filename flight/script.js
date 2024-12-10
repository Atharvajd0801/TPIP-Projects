function searchDestination() {
    const destination = document.getElementById('destination').value.trim();
    if (destination === "") {
        alert("Please enter a destination!");
        return;
    }

    const mockData = {
        "Bangalore": {
            name: "Bangalore",
            country: "India",
            attractions: [
                "🏢 Electronic City",
                "🌳 Cubbon Park",
                "🖥️ Manyata Tech Park",
                "⛲ Lalbagh Botanical Garden"
            ],
            hotels: [
                "🏨 The Leela Palace",
                "🏨 ITC Gardenia",
                "🏨 Taj West End"
            ]
        },
        "Hyderabad": {
            name: "Hyderabad",
            country: "India",
            attractions: [
                "🏢 HITEC City",
                "🏰 Charminar",
                "🏞️ Hussain Sagar Lake",
                "🕌 Golconda Fort"
            ],
            hotels: [
                "🏨 Trident Hyderabad",
                "🏨 Taj Krishna",
                "🏨 ITC Kakatiya"
            ]
        },
        "Pune": {
            name: "Pune",
            country: "India",
            attractions: [
                "🏢 Magarpatta City",
                "🏰 Shaniwar Wada",
                "🖥️ EON IT Park",
                "⛰️ Sinhagad Fort"
            ],
            hotels: [
                "🏨 JW Marriott Hotel Pune",
                "🏨 The Westin Pune",
                "🏨 Hyatt Pune"
            ]
        },
        "Mumbai": {
            name: "Mumbai",
            country: "India",
            attractions: [
                "🌅 Gateway of India",
                "🌊 Marine Drive",
                "🏢 Bandra Kurla Complex (BKC)",
                "🚂 Chhatrapati Shivaji Maharaj Terminus"
            ],
            hotels: [
                "🏨 Taj Mahal Palace",
                "🏨 The Oberoi",
                "🏨 Trident Nariman Point"
            ]
        },
        "Delhi": {
            name: "Delhi",
            country: "India",
            attractions: [
                "🏢 DLF Cyber City (Gurgaon)",
                "🕍 Lotus Temple",
                "🕊️ India Gate",
                "🕌 Qutub Minar"
            ],
            hotels: [
                "🏨 The Oberoi New Delhi",
                "🏨 Le Meridien",
                "🏨 ITC Maurya"
            ]
        },
        "Kolkata": {
            name: "Kolkata",
            country: "India",
            attractions: [
                "🏢 Salt Lake Sector V",
                "🌉 Howrah Bridge",
                "🏛️ Victoria Memorial",
                "🕍 Dakshineswar Kali Temple"
            ],
            hotels: [
                "🏨 The Oberoi Grand",
                "🏨 Taj Bengal",
                "🏨 Hyatt Regency Kolkata"
            ]
        },
        "Noida": {
            name: "Noida",
            country: "India",
            attractions: [
                "🏢 Noida IT Park",
                "🏞️ Okhla Bird Sanctuary",
                "🖥️ Advant IT Park",
                "🎡 Worlds of Wonder"
            ],
            hotels: [
                "🏨 Radisson Blu Noida",
                "🏨 Fortune Inn Grazia",
                "🏨 Park Ascent"
            ]
        },
        "Ahmedabad": {
            name: "Ahmedabad",
            country: "India",
            attractions: [
                "🏢 GIFT City",
                "🏞️ Sabarmati Riverfront",
                "🕍 Akshardham Temple",
                "🏛️ Sidi Saiyyed Mosque"
            ],
            hotels: [
                "🏨 Hyatt Regency Ahmedabad",
                "🏨 Taj Skyline",
                "🏨 Radisson Blu Ahmedabad"
            ]
        }
    };

    const postData = {
        destination: destination
    };

    setTimeout(() => {
        const destinationData = mockData[postData.destination];

        console.log('Searching for destination:', destination);
        console.log('Destination Data:', destinationData);

        const destinationInfoDiv = document.getElementById('destination-info');
        destinationInfoDiv.innerHTML = '';

        if (destinationData) {
            const { name, country, attractions, hotels } = destinationData;

            destinationInfoDiv.innerHTML = `
                <div class="card p-4">
                    <h2>Welcome to ${name}, ${country}!</h2>
                    <p class="mb-3">Discover the beauty and culture of ${name}. Here are some highlights:</p>
                    <h3>Top Attractions:</h3>
                    <ul>
                        ${attractions.map(attraction => `<li>${attraction}</li>`).join('')}
                    </ul>
                    <h3>Best Hotels:</h3>
                    <ul>
                        ${hotels.map(hotel => `<li>${hotel}</li>`).join('')}
                    </ul>
                    <p class="mt-3">✨ Pack your bags and get ready for an unforgettable journey! ✈️</p>
                </div>
            `;
        } else {
            destinationInfoDiv.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Sorry, no information is available for "${destination}". Try exploring another destination!
                </div>
            `;
        }
    }, 1000);
}
