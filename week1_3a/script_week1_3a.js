function calculateVolume() {
    const Length = parseFloat(document.getElementById("length").value);

    if (!isNaN(Length)) {
        const calculateVolume = (5 * (3 + Math.sqrt(5)) * Math.pow(Length, 3)) / 12;

        document.getElementById("result").textContent = `обьем Икосаэдра ${calculateVolume.toFixed(2)}`;
    } else {
        alert("Попробуйте ввести другое число");
    }
}