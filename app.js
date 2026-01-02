function getZodiacSign(day, month) {
    // Normalize month input to lowercase
    const m = month.toLowerCase();

    const signs = [
        { name: "Capricorn", month: "january", day: 20 },
        { name: "Aquarius", month: "february", day: 19 },
        { name: "Pisces", month: "march", day: 21 },
        { name: "Aries", month: "april", day: 20 },
        { name: "Taurus", month: "may", day: 21 },
        { name: "Gemini", month: "june", day: 21 },
        { name: "Cancer", month: "july", day: 23 },
        { name: "Leo", month: "august", day: 23 },
        { name: "Virgo", month: "september", day: 23 },
        { name: "Libra", month: "october", day: 23 },
        { name: "Scorpio", month: "november", day: 22 },
        { name: "Sagittarius", month: "december", day: 22 }
    ];

    // Find the matching sign
    if (m === "december") return day >= 22 ? "Capricorn" : "Sagittarius";
    if (m === "january") return day >= 20 ? "Aquarius" : "Capricorn";
    if (m === "february") return day >= 19 ? "Pisces" : "Aquarius";
    if (m === "march") return day >= 21 ? "Aries" : "Pisces";
    if (m === "april") return day >= 20 ? "Taurus" : "Aries";
    if (m === "may") return day >= 21 ? "Gemini" : "Taurus";
    if (m === "june") return day >= 21 ? "Cancer" : "Gemini";
    if (m === "july") return day >= 23 ? "Leo" : "Cancer";
    if (m === "august") return day >= 23 ? "Virgo" : "Leo";
    if (m === "september") return day >= 23 ? "Libra" : "Virgo";
    if (m === "october") return day >= 23 ? "Scorpio" : "Libra";
    if (m === "november") return day >= 22 ? "Sagittarius" : "Scorpio";

    return "Invalid month entered.";
}

// --- Main Program Execution ---
const birthMonth = prompt("Enter your birth month (e.g., March): ");
const birthDay = parseInt(prompt("Enter your birth day (e.g., 25): "));

if (!isNaN(birthDay)) {
    const result = getZodiacSign(birthDay, birthMonth);
    console.log(`Your Zodiac sign is: ${result}`);
    alert(`Your Zodiac sign is: ${result}`);
} else {
    alert("Please enter a valid number for the day.");
}