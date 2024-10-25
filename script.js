// Funkcja do symulacji statusu serwera
function checkServerStatus() {
    // Symulujemy opóźnienie w odpowiedzi
    setTimeout(() => {
        const isOnline = Math.random() > 0.5; // Losowy status serwera
        const maxPlayers = Math.floor(Math.random() * 20) + 1; // Losowa liczba slotów
        document.getElementById('serwer-status-text').textContent = isOnline ? "Online" : "Offline";
        document.getElementById('sloty-status').textContent = `${maxPlayers}/20`;
    }, 1000);
}

// Funkcja do aktualizacji konfiguracji serwera
document.getElementById('configForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Zapobiegamy przeładowaniu strony
    const maxPlayers = document.getElementById('maxPlayers').value;
    alert(`Maksymalna liczba graczy została zaktualizowana na: ${maxPlayers}`);
});

// Sprawdzamy status serwera przy załadowaniu strony
document.addEventListener("DOMContentLoaded", checkServerStatus);
