# Number Comma Formatter

## Description
number Comma Formatter is a JavaScript utility for formatting numbers by adding commas for better readability. It can handle both plain numbers and strings with various formats, providing a user-friendly and locale-aware formatting solution.

## Installation
```bash
 
npm install number-comma-formatter
 
```
## Usage
```bash
 
import numberCommaFormatter from 'number-comma-formatter';

const formattedNumber = numberCommaFormatter('1525.25$');
console.log(formattedNumber); // Output: 1,525.25
 
```
## How It Works
The utility takes a numeric input, whether a plain number or a string with various formats, and formats it by adding commas to the whole part. It uses toLocaleString() for locale-aware formatting.

## Note
The input can contain any string, not just currency symbols. The utility will extract the numeric value from the input and format it accordingly.

## Example
```bash

const formattedValue = numberCommaFormatter('9876543.21');
console.log(formattedValue); // Output: 9,876,543.21

```
## Running Tests
To run the test suite, use the following command:
```bash

npm test


```
This will execute the test cases and ensure that the Number Comma Formatter is working as expected.

## Special Thanks
A heartfelt expression of respect and gratitude to [Mary139](https://github.com/mary139) as a mentor. Your guidance and mentorship have been instrumental in the development of this project, and your wisdom has left a lasting impact. Thank you for being an inspiring mentor.

## License
This project is licensed under the ISC License.
