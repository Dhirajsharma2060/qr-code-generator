# QR Code Generator

A beautiful and customizable QR Code Generator built with React. This application allows users to create QR codes for URLs and email content, customize colors, and even add logos.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Customizations](#customizations)
- [Contributing](#contributing)
- [License](#license)

## Features

- Generate QR codes for:
  - Links
  - Email addresses with subject and message
- Customizable QR code colors (foreground and background)
- Upload and incorporate logos into QR codes
- Download QR codes in PNG or SVG formats
- User-friendly interface with tabbed navigation

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **QRCode.react**: Library for generating QR codes
- **html-to-image**: Converts HTML elements to images
- **file-saver**: Helps with saving files on the client-side

## Installation

To get started with the QR Code Generator, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/qr-code-generator.git
   ```
2. **Navigate into the project directory**:
  ```bash
   cd qr-code-generator
   ``` 
3. **Install the required dependencies**:
  ```bash
   npm install
   ``` 
4. **Start the development server**:
  ```bash
   npm run dev
   ```       
# Usage
## Generating a QR Code
### Select either the Link or Email tab.
#### For Link:
- Enter the URL in the provided input field.
#### For Email:
- Enter the recipient’s email address.
#### Fill in the subject and message fields.
- Customize the QR code colors and upload a logo if desired.
- Click the Generate Email QR Code button to create your QR code.
- Use the Download PNG or Download SVG buttons to save your QR code to your device.
#### Customizations
- You can customize the following aspects of the QR code:

- Foreground Color: Choose a color for the QR code using the color picker.
- Background Color: Select a background color for your QR code.
- Logo: Upload a logo image to be displayed in the center of the QR code.
#### Contributing
- Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch: git checkout -b feature/YourFeature
- Make your changes and commit them: git commit -m 'Add some feature'
- Push to the branch: git push origin feature/YourFeature
- Open a Pull Request.