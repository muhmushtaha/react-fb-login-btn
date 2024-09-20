import React, { useEffect, useState } from "react";

interface Theme {
  backgroundColor: string;
  textColor: string;
  hoverBackgroundColor: string;
}

export interface FacebookLoginButtonProps {
  /**
   * The shape of the button. Can be 'rectangular' or 'circle'.
   * @default 'rectangular'
   */
  shape?: "rectangular" | "circle";

  /**
   * The text direction. Can be 'ltr' or 'rtl'.
   * @default 'ltr'
   */
  direction?: "ltr" | "rtl";

  /**
   * Custom text to display on the button.
   * @default 'Login with Facebook'
   */
  text?: string;

  /**
   * Custom inline styles to apply to the button.
   * @default {}
   */
  style?: React.CSSProperties;

  /**
   * Theme of the button. Choose from predefined themes or 'custom' to provide custom colors.
   * @default 'blue'
   */
  theme?: "blue" | "dark" | "light" | "custom";

  /**
   * Custom theme colors. Used only when theme is set to 'custom'.
   */
  customTheme?: Partial<Theme>;

  /**
   * Function to call on successful login.
   */
  onSuccess?: (response: StatusResponse) => void;

  /**
   * Function to call on login failure.
   */
  onFail?: (error: any) => void;

  /**
   * Facebook App ID.
   */
  appId: string;

  /**
   * Permissions to request during login.
   * @default 'public_profile,email'
   */
  scope?: string;
}

export interface AuthResponse {
  accessToken: string;
  expiresIn: number;
  data_access_expiration_time: number;
  signedRequest: string;
  userID: string;
}

export interface StatusResponse {
  status: "connected" | "not_authorized" | "unknown";
  authResponse?: AuthResponse;
}

export type LoginStatusCallback = (response: StatusResponse) => void;

export interface FB {
  init: (params: {
    appId: string;
    cookie?: boolean;
    xfbml?: boolean;
    version: string;
  }) => void;
  login: (callback: LoginStatusCallback, options?: { scope: string }) => void;
  getLoginStatus: (callback: LoginStatusCallback) => void;
}

declare global {
  interface Window {
    fbAsyncInit?: () => void;
    FB?: FB;
  }
}

const FacebookLoginButton: React.FC<FacebookLoginButtonProps> = ({
  shape = "rectangular",
  direction = "ltr",
  text = "Login with Facebook",
  style = {},
  theme = "blue",
  customTheme = {},
  onSuccess,
  onFail,
  appId,
  scope = "public_profile,email",
}) => {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    // Load the Facebook SDK if it's not already loaded
    if (!window.FB) {
      window.fbAsyncInit = () => {
        window.FB?.init({
          appId: appId,
          cookie: true,
          xfbml: false,
          version: "v20.0",
        });
        setSdkLoaded(true);
      };

      // Load the SDK script
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    } else {
      setSdkLoaded(true);
    }
  }, [appId]);

  const handleClick = () => {
    if (!sdkLoaded || !window.FB) {
      if (onFail) {
        onFail(new Error("Facebook SDK not loaded."));
      }
      return;
    }

    window.FB.login(
      (response: StatusResponse) => {
        if (response.status === "connected") {
          if (onSuccess) {
            onSuccess(response);
          }
        } else {
          if (onFail) {
            onFail(response);
          }
        }
      },
      { scope },
    );
  };

  const shapeClasses: Record<string, string> = {
    rectangular: "rounded-md",
    circle: "rounded-full !p-2",
  };

  const defaultThemes: Record<string, Theme> = {
    blue: {
      backgroundColor: "bg-blue-600",
      textColor: "text-white",
      hoverBackgroundColor: "hover:bg-blue-700",
    },
    dark: {
      backgroundColor: "bg-gray-800",
      textColor: "text-white",
      hoverBackgroundColor: "hover:bg-gray-900",
    },
    light: {
      backgroundColor: "bg-white",
      textColor: "text-gray-800",
      hoverBackgroundColor: "hover:bg-gray-100",
    },
  };

  const currentTheme: Theme =
    theme === "custom"
      ? {
        backgroundColor: customTheme.backgroundColor || "",
        textColor: customTheme.textColor || "",
        hoverBackgroundColor: customTheme.hoverBackgroundColor || "",
      }
      : defaultThemes[theme];

  const buttonClasses = `
    flex items-center justify-center
    ${direction === "rtl" ? "flex-row-reverse" : ""}
    ${shapeClasses[shape]}
    ${currentTheme.backgroundColor}
    ${currentTheme.textColor}
    font-bold py-2 px-4
    ${currentTheme.hoverBackgroundColor}
  `;

  const icon = (
    <svg
      width="36"
      height="36"
      viewBox="0 0 48 48"
      version="1.1"
      id="Shopicons"
      fill="currentColor"
    >
      <g id="SVGRepo_iconCarrier">
        <g id="facebook">
          <path d="M0 0h48v48H0V0z" fill="none" />
          <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm2 35.861V28h5v-4h-5v-3c0-1.103.897-2 2-2h3v-4h-3c-3.309 0-6 2.691-6 6v3h-5v4h5v11.861C14.12 38.872 8 32.144 8 24c0-8.823 7.178-16 16-16s16 7.177 16 16c0 8.144-6.12 14.872-14 15.861z" />
        </g>
      </g>
    </svg>
  );

  return (
    <button onClick={handleClick} className={buttonClasses} style={style}>
      {icon}
      {shape !== "circle" && <span className="mx-2">{text}</span>}
    </button>
  );
};

export default FacebookLoginButton;
