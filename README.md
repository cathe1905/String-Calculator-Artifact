# 📊 String Calculator

This project implements a simple calculator that processes strings of numbers separated by delimiters, supporting both simple and complex delimiters. The goal of this project is to provide an efficient and scalable solution to the string calculator problem.

## ⚙️ Technical Justification

The implementation of the String Calculator was done with the goal of handling both simple and complex delimiters, while ensuring that previous functionality remains compatible. Each function was developed modularly, making it easy to integrate new features and adapt to future requirements.

### Key Considerations:
- **Delimiter Handling**: The `findCustomDelimiter` function was created to correctly extract the custom delimiter, whether simple or complex, allowing the calculator to work with a wide range of inputs.
- **Efficiency**: The use of helper functions like `iterateWithCustomDelimiter` ensures that the code handles delimiter splitting efficiently, reducing unnecessary computations.
- **Edge Cases**: Considerations for negative numbers and numbers above 1000 ensure the calculator meets the required functional specifications.
- **Error Handling**: The calculator ensures that if negative numbers are present, an exception is raised with a clear message listing the negative numbers.

## 📂 Project Structure

- **`calculateDelimiterCount`**: Calculates delimiters.
- **`evaluateWithCustomDelimiter`**: Extracts numbers when there is a custom delimiter.
- **`intAdd`**: Performs the final sum and handles the input.

## 📝 Code Comments

The code is organized into functions that handle custom delimiters and efficiently perform the summation, with filtering of numbers greater than 1000 and error handling for negative numbers. Each function is documented with comments to explain its functionality, making it easier for future developers to understand and contribute.

## 🚀 Next Steps

- Continue refining the implementation to add more features.
- Improve error handling.
- Optimize the performance of delimiter handling.
