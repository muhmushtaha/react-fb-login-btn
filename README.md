[![npm version](https://badge.fury.io/js/react-fb-login-btn.svg)](https://badge.fury.io/js/react-fb-login-btn)

# react-fb-login-btn Component Documentation

A customizable, reusable, and type-safe React component for integrating Facebook login functionality into your applications. The `react-fb-login-btn` component is built with TypeScript and Tailwind CSS, supports theming, different button shapes, left-to-right and right-to-left text directions, and handles Facebook login flow internally using the Facebook SDK.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Basic Usage](#basic-usage)
- [Props](#props)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

Install the package via npm:

```bash
npm install react-fb-login-btn
```

Or using yarn:

```bash
yarn add react-fb-login-btn
```

---

## Features

- **TypeScript Support**: Built with TypeScript for type safety and IntelliSense support.
- **Theming**: Supports predefined themes (`blue`, `dark`, `light`) and custom themes.
- **Shapes**: Offers `rectangular` and `circle` button shapes.
- **Directionality**: Handles both left-to-right (`ltr`) and right-to-left (`rtl`) text directions.
- **Customization**: Allows custom text, styles, themes, and permissions (`scope`).
- **Facebook SDK Integration**: Manages the Facebook login flow internally.
- **Event Handling**: Provides `onSuccess` and `onFail` callbacks to handle login outcomes.
- **Tailwind CSS**: Utilizes Tailwind CSS for styling.

---

## Basic Usage

First, import the `FacebookLoginButton` component into your project:

```tsx
import React from 'react';
import { FacebookLoginButton } from 'react-fb-login-btn';

const App = () => {
  const handleSuccess = (response: fb.StatusResponse) => {
    console.log('Login successful:', response);
    // Handle successful login here
  };

  const handleFailure = (error: any) => {
    console.error('Login failed:', error);
    // Handle login failure here
  };

  return (
    <div>
      <FacebookLoginButton
        appId="YOUR_FACEBOOK_APP_ID"
        onSuccess={handleSuccess}
        onFail={handleFailure}
      />
    </div>
  );
};

export default App;
```

**Note:** Replace `"YOUR_FACEBOOK_APP_ID"` with your actual Facebook App ID obtained from the [Facebook Developers](https://developers.facebook.com/) website.

---

## Props

The `FacebookLoginButton` component accepts the following props:

| Prop          | Type                                           | Default                    | Description                                                                                                                                            |
| ------------- | ---------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `appId`       | `string`                                       | **Required**               | Your Facebook App ID.                                                                                                                                  |
| `shape`       | `'rectangular'` \| `'circle'`                  | `'rectangular'`            | The shape of the button.                                                                                                                               |
| `direction`   | `'ltr'` \| `'rtl'`                             | `'ltr'`                    | The text direction of the button.                                                                                                                      |
| `text`        | `string`                                       | `'Login with Facebook'`    | Custom text to display on the button.                                                                                                                  |
| `style`       | `React.CSSProperties`                          | `{}`                       | Custom inline styles to apply to the button.                                                                                                           |
| `theme`       | `'blue'` \| `'dark'` \| `'light'` \| `'custom'` | `'blue'`                   | The theme of the button. Use `'custom'` to provide custom theme colors via `customTheme`.                                                              |
| `customTheme` | `Partial<Theme>`                               | `{}`                       | Custom theme colors used when `theme` is set to `'custom'`.                                                                                            |
| `onSuccess`   | `(response: fb.StatusResponse) => void`        | `undefined`                | Function to call on successful login.                                                                                                                  |
| `onFail`      | `(error: any) => void`                         | `undefined`                | Function to call on login failure.                                                                                                                     |
| `scope`       | `string`                                       | `'public_profile,email'`   | Permissions to request during login.                                                                                                                   |

#### `Theme` Type Definition

The `Theme` interface defines the shape of the `customTheme` prop:

```ts
interface Theme {
  backgroundColor: string;       // Tailwind CSS class for background color
  textColor: string;             // Tailwind CSS class for text color
  hoverBackgroundColor: string;  // Tailwind CSS class for hover background color
}
```

---

## Examples

For detailed and interactive examples, please visit our **[Storybook documentation](https://muhmushtaha.github.io/react-fb-login-btn/?path=/docs/components-facebookloginbutton--docs)**.

---

## Contributing

Contributions are welcome! If you have ideas for improvements or find bugs, please feel free to contribute.

### Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/react-fb-login-btn.git
   cd react-fb-login-btn
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run Storybook**:

   Start Storybook to develop and test components interactively.

   ```bash
   npm run storybook
   ```

4. **Run Tests**:

   Execute unit tests to ensure your changes do not break existing functionality.

   ```bash
   npm run test
   ```

5. **Run Linting**:

   Ensure code quality and consistency by running the linter.

   ```bash
   npm run lint
   ```

6. **Build the Package**:

   Build the package before publishing or testing in other projects.

   ```bash
   npm run build
   ```

### Guidelines

- **Branching**: Create a new branch for your feature or bugfix.

  ```bash
  git checkout -b feature/your-feature-name
  ```

- **Commit Messages**: Write clear and descriptive commit messages.

- **Pull Requests**: Submit a pull request with a detailed description of your changes.

### Code Quality

- **TypeScript**: Ensure all code is type-safe.
- **Linting**: Follow the coding style and conventions. Run linting before committing.

  ```bash
  npm run lint
  ```

- **Testing**: Write unit tests for new features or bug fixes.

### Reporting Issues

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/yourusername/react-fb-login-btn/issues).

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

**Note:** By providing a link to your Storybook documentation, users can explore interactive examples and see all the different configurations of your component. This approach keeps your README concise and focused while still offering users access to detailed usage examples.

---

**Would you like me to help update any specific parts of the README or assist with setting up the Storybook link?**