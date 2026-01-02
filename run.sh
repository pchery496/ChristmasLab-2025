#!/bin/bash

echo "***** ZODIAC SIGN FINDER *****"

# Ask for the birth month
read -p "Enter your birth month (e.g., March): " month
# Ask for the birth day
read -p "Enter your birth day (e.g., 25): " day

# Convert month to lowercase to make it case-insensitive
month=$(echo "$month" | tr '[:upper:]' '[:lower:]')

case $month in
    january)   [[ $day -lt 20 ]] && sign="Capricorn"   || sign="Aquarius" ;;
    february)  [[ $day -lt 19 ]] && sign="Aquarius"    || sign="Pisces" ;;
    march)     [[ $day -lt 21 ]] && sign="Pisces"      || sign="Aries" ;;
    april)     [[ $day -lt 20 ]] && sign="Aries"       || sign="Taurus" ;;
    may)       [[ $day -lt 21 ]] && sign="Taurus"      || sign="Gemini" ;;
    june)      [[ $day -lt 21 ]] && sign="Gemini"      || sign="Cancer" ;;
    july)      [[ $day -lt 23 ]] && sign="Cancer"      || sign="Leo" ;;
    august)    [[ $day -lt 23 ]] && sign="Leo"         || sign="Virgo" ;;
    september) [[ $day -lt 23 ]] && sign="Virgo"       || sign="Libra" ;;
    october)   [[ $day -lt 23 ]] && sign="Libra"       || sign="Scorpio" ;;
    november)  [[ $day -lt 22 ]] && sign="Scorpio"     || sign="Sagittarius" ;;
    december)  [[ $day -lt 22 ]] && sign="Sagittarius" || sign="Capricorn" ;;
    *)         sign="Invalid month" ;;
esac

echo "--------------------------"
echo "Your Zodiac sign is: $sign"
