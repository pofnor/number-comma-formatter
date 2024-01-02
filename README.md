# Numeral Comma Formatter

## Description
Numeral Comma Formatter is a JavaScript utility for formatting numbers by adding commas for better readability. It can handle both plain numbers and strings with various formats, providing a user-friendly and locale-aware formatting solution.

## Installation
```bash
 
npm install numeral-comma-formatter
 
```
## Usage
```bash
 
import numeralCommaFormatter from 'numeral-comma-formatter';

const formattedNumber = numeralCommaFormatter('1525.25$');
console.log(formattedNumber); // Output: 1,525.25
 
```
## How It Works
The utility takes a numeric input, whether a plain number or a string with various formats, and formats it by adding commas to the whole part. It uses toLocaleString() for locale-aware formatting.

## Note
The input can contain any string, not just currency symbols. The utility will extract the numeric value from the input and format it accordingly.

## Example
```bash

const formattedValue = numeralCommaFormatter('9876543.21');
console.log(formattedValue); // Output: 9,876,543.21

```
## License
This project is licensed under the ISC License.
