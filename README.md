# 📊 String Calculator

This project implements a simple calculator that processes strings of numbers separated by delimiters, supporting both simple and complex delimiters. The goal of this project is to provide an efficient and scalable solution to the string calculator problem.

## ⚙️ Technical Justification

The implementation of the String Calculator was done with the goal of handling both simple and complex delimiters, while ensuring that previous functionality remains compatible. Each function was developed modularly, making it easy to integrate new features and adapt to future requirements.

### Key Considerations:
- **Delimiter Handling**: This functions was created to correctly extract the custom delimiter, whether simple or complex, allowing the calculator to work with a wide range of inputs.
- **Efficiency**: The use of helper functions ensures that the code handles delimiter splitting efficiently, reducing unnecessary computations.
- **Edge Cases**: Considerations for negative numbers and numbers above 1000 ensure the calculator meets the required functional specifications.
- **Error Handling**: The calculator ensures that if negative numbers are present, an exception is raised with a clear message listing the negative numbers.


## 📝 Code Comments

The code is organized into functions that handle custom delimiters and efficiently perform the summation, with filtering of numbers greater than 1000 and error handling for negative numbers. Each function is documented with comments to explain its functionality, making it easier for future developers to understand and contribute.

## 🧪 How to Test the Code

### JavaScript 💻
You can test the code interactively through the [Vercel Interface](https://string-calculator-artifact.vercel.app/). This provides an easy-to-use environment to try out the code live.

Additionally, you can run the code and the tests directly in the console by following these steps:
1. Clone the repository: `git clone https://github.com/cathe1905/String-Calculator-Artifact.git`
2. Navigate to the project folder: `cd String-Calculator-Artifact`
3. Run the code: `node index.js`


### F# 🖥️
For testing with F#, you can run the code in the console by following these steps:
1. Clone the repository: `git clone https://github.com/cathe1905/String-Calculator-Artifact.git`
2. Navigate to the F# project folder: `cd String-Calculator-Artifact/FSharp`
3. Run the code: `dotnet run`


Additionally, here is a [link to a video](https://www.loom.com/share/c07123bbbeab41bfa6c56c454b4fda29) explaining the work behind the F# code and how to run it.

> 🎥 **Video Explanation**: A summary of the work in the F# code.



## 🌟 Highlights

- Demonstrates proficiency in both functional (F#) and imperative (JavaScript) programming styles.
- Ensures clean, maintainable code with robust input validation and error handling.
- Highlights versatility in adapting to different programming paradigms.

## 📝 Analysis and Notes During Development

This section showcases handwritten notes and whiteboard sketches created during the problem-solving process. These images represent my thought process, analysis, and brainstorming sessions while working on the challenge. They serve as proof of my effort and highlight the steps I took to solve the exercises effectively.

<div style="text-align: center;">
  <div>
    <img src="https://github.com/cathe1905/String-Calculator-Artifact/blob/main/Imagen%20de%20WhatsApp%202025-01-15%20a%20las%2018.55.22_a8611aad.jpg" width="300" height="400" />
    <img src="https://github.com/cathe1905/String-Calculator-Artifact/blob/main/Imagen%20de%20WhatsApp%202025-01-15%20a%20las%2018.40.33_dce63f2f.jpg" width="300" height="400" />
  </div>
  <div>
     <img src="https://github.com/cathe1905/String-Calculator-Artifact/blob/main/cuaderno2.jpg" width="600" height="400" />
    
  </div>
   <div>
     <img src="https://github.com/cathe1905/String-Calculator-Artifact/blob/main/Imagen%20de%20WhatsApp%202025-01-15%20a%20las%2018.46.13_4de5803a.jpg" width="300" height="400" />
     <img src="https://github.com/cathe1905/String-Calculator-Artifact/blob/main/Imagen%20de%20WhatsApp%202025-01-15%20a%20las%2018.40.34_659e4e99.jpg" width="300" height="400" />
  </div>
</div>




