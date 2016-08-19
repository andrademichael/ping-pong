# Ping

#### Epicodus Week 3: Arrays and Looping, v.01, 2016-8-19

#### By _Michael Andrade_, with thanks to Epicodus

## Behaviors

0. Takes input from a text box and validates that it is a whole number.
  e.g. for input a, or nothing, output is a prompt asking for a whole number
1. Creates an array with all the whole numbers from 1 to the input number.
  e.g. for input 5, creates the array [1, 2, 3, 4, 5]
2. Replaces multiples of 15 with one string, multiples of 5 with another, and multiples of 3 with another.
  e.g. for input 15, changes the original array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] into [1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, ping-pong]
3. Displays the results in a list on the page, along with commentary.
  e.g. input 3 results in:  \*1
                            \*2
                            \*ping
4. The user can enter new numbers in the box and get fresh lists without refreshing the page.
  e.g. After inputting 3, inputting 2 results in:   \*1
                                                    \*2
## Description

This page will take a whole number input, and display a list of the numbers from one to the input. That list will have all multiples of three replaced by the string "ping.", multiples of five replaced by "pong!", and multiples of fifteen instead replaced with "ping...PONG!".

## Setup/Installation Requirements

* Use a browser.
* The page is hosted at https://andrademichael.github.io/ping-pong/

## Known Bugs

No known bugs... yet.

## Support and contact details

For questions, ideas, or concerns, email me at andrade.michael.e@gmail.com with the subject line "Github"!

## Technologies Used

Written in HTML5, calling on JQuery v3.1.0 and Bootstrap v3.3.7.

### License

This file is part of Ping.

    Ping is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Ping is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with the Ping.  If not, see <http://www.gnu.org/licenses/>.

Copyright (c) 2016 **_Michael Andrade_**
