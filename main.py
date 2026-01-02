def get_zodiac_sign(day, month):
    # Convert month to lowercase to handle different input styles
    month = month.lower()

    if month == 'december':
        astro_sign = 'Sagittarius' if (day < 22) else 'Capricorn'
    elif month == 'january':
        astro_sign = 'Capricorn' if (day < 20) else 'Aquarius'
    elif month == 'february':
        astro_sign = 'Aquarius' if (day < 19) else 'Pisces'
    elif month == 'march':
        astro_sign = 'Pisces' if (day < 21) else 'Aries'
    elif month == 'april':
        astro_sign = 'Aries' if (day < 20) else 'Taurus'
    elif month == 'may':
        astro_sign = 'Taurus' if (day < 21) else 'Gemini'
    elif month == 'june':
        astro_sign = 'Gemini' if (day < 21) else 'Cancer'
    elif month == 'july':
        astro_sign = 'Cancer' if (day < 23) else 'Leo'
    elif month == 'august':
        astro_sign = 'Leo' if (day < 23) else 'Virgo'
    elif month == 'september':
        astro_sign = 'Virgo' if (day < 23) else 'Libra'
    elif month == 'october':
        astro_sign = 'Libra' if (day < 23) else 'Scorpio'
    elif month == 'november':
        astro_sign = 'Scorpio' if (day < 22) else 'Sagittarius'
    else:
        return "Invalid month entered."
    
    return astro_sign

# --- Main Program ---
print("***** ZODIAC SIGN FINDER *****")
try:
    user_month = input("Enter your birth month (e.g., March): ").strip()
    user_day = int(input("Enter your birth day (e.g., 25): "))

    sign = get_zodiac_sign(user_day, user_month)
    print(f"\nYour Zodiac sign is: **{sign}**")
    
except ValueError:
    print("Please enter a valid number for the day.")