export declare function accentColors(a: number): {
    default: {
        light: {
            inverse: string;
            foreground: string;
            background: string;
        };
        dark: {
            inverse: string;
            foreground: string;
            background: string;
        };
    };
    magenta: {
        light: {
            inverse: string;
            foreground: string;
            background: string;
        };
        dark: {
            inverse: string;
            foreground: string;
            background: string;
        };
    };
    blue: {
        light: {
            inverse: string;
            foreground: string;
            background: string;
        };
        dark: {
            inverse: string;
            foreground: string;
            background: string;
        };
    };
    orange: {
        light: {
            inverse: string;
            foreground: string;
            background: string;
        };
        dark: {
            inverse: string;
            foreground: string;
            background: string;
        };
    };
    green: {
        light: {
            inverse: string;
            foreground: string;
            background: string;
        };
        dark: {
            inverse: string;
            foreground: string;
            background: string;
        };
    };
    purple: {
        light: {
            inverse: string;
            foreground: string;
            background: string;
        };
        dark: {
            inverse: string;
            foreground: string;
            background: string;
        };
    };
    teal: {
        light: {
            inverse: string;
            foreground: string;
            background: string;
        };
        dark: {
            inverse: string;
            foreground: string;
            background: string;
        };
    };
    blackWhite: {
        light: {
            inverse: string;
            foreground: string;
            background: string;
        };
        dark: {
            inverse: string;
            foreground: string;
            background: string;
        };
    };
};
export declare function themeColors(alpha: number): {
    light: {
        foreground: {
            1: string;
            2: string;
            3: string;
        };
        background: {
            1: string;
            2: string;
            3: string;
        };
        overlay: {
            thin: string;
            thick: string;
        };
    };
    dark: {
        foreground: {
            1: string;
            2: string;
            3: string;
        };
        background: {
            1: string;
            2: string;
            3: string;
        };
        overlay: {
            thin: string;
            thick: string;
        };
    };
};
export declare function color(alpha?: number): {
    foreground: {
        1: string;
        2: string;
        3: string;
        accent: string;
        inverse: string;
    } | {
        1: string;
        2: string;
        3: string;
        accent: string;
        inverse: string;
    };
    background: {
        1: string;
        2: string;
        3: string;
        accent: string;
    } | {
        1: string;
        2: string;
        3: string;
        accent: string;
    };
    overlay: {
        thin: string;
        thick: string;
    } | {
        thin: string;
        thick: string;
    };
    error: string;
};
export declare const global: import("lit").CSSResult;
