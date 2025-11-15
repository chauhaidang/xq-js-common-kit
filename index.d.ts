/**
 * Type definitions for @chauhaidang/xq-js-common-kit
 */

/**
 * Generates a random alphanumeric string of specified length
 * @param length - The desired length of the random string
 * @returns A random string containing letters (A-Z, a-z) and numbers (0-9)
 */
export function generateRandomString(length: number): string;

/**
 * Reads and parses the xq.json configuration file from the current working directory
 * @returns The parsed configuration object
 * @throws Error if xq.json file does not exist
 */
export function getConfig(): any;

/**
 * Reads and parses a YAML file
 * @param filePath - Path to the YAML file to read
 * @returns The parsed YAML content, or null if an error occurs
 */
export function readYAML(filePath: string): any | null;

/**
 * Log levels for the logger
 */
export interface LogLevels {
    DEBUG: 0;
    INFO: 1;
    WARN: 2;
    ERROR: 3;
}

/**
 * Logger instance for logging messages with different severity levels
 */
export interface Logger {
    /**
     * Sets the minimum log level
     * @param level - The log level (DEBUG, INFO, WARN, ERROR) as a string or number
     */
    setLevel(level: string | number): void;

    /**
     * Logs a debug message
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    debug(message: string, ...args: any[]): void;

    /**
     * Logs an info message
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    info(message: string, ...args: any[]): void;

    /**
     * Logs a warning message
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    warn(message: string, ...args: any[]): void;

    /**
     * Logs an error message
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    error(message: string, ...args: any[]): void;
}

/**
 * Singleton logger instance
 */
export const logger: Logger;

/**
 * Log level constants
 */
export const LOG_LEVELS: LogLevels;

/**
 * Converts JUnit XML test results to markdown format
 * @param xmlContent - The JUnit XML content as a string
 * @returns A promise that resolves to markdown formatted test results
 */
export function generateMarkdownFromJunit(xmlContent: string): Promise<string>;
