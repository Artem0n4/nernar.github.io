/**
 * Class to work with values, synchronized between server and all clients
 */
declare class SyncedNetworkData {
    /**
     * @returns Requested value by key or fallback if key not found.
     */
    getInt(key: any, fallback?: number): number;
    /**
     * @returns Requested value by key or fallback if key not found.
     */
    getLong(key: any, fallback?: number): number;
    /**
     * @returns Requested value by key or fallback if key not found.
     */
    getFloat(key: any, fallback?: number): number;
    /**
     * @returns Requested value by key or fallback if key not found.
     */
    getDouble(key: any, fallback?: number): number;
    /**
     * @returns Requested value by key or fallback if key not found.
     */
    getString(key: any, fallback?: string): string;
    /**
     * @returns Requested value by key or fallback if key not found.
     */
    getBoolean(key: any, fallback?: boolean): boolean;
    /**
     * Sets value by key
     */
    putInt(key: any, value: number): void;
    /**
     * Sets value by key
     */
    putLong(key: any, value: number): void;
    /**
     * Sets value by key
     */
    putFloat(key: any, value: number): void;
    /**
     * Sets value by key
     */
    putDouble(key: any, value: number): void;
    /**
     * Sets value by key
     */
    putString(key: any, value: string): void;
    /**
     * Sets value by key
     */
    putBoolean(key: any, value: boolean): void;

    /**
     * Sends changed data values
     */
    sendChanges(): void;

    /**
     * Event that catches changes of any data values.
     * @param networkData - SyncedNetworkData object where the changes had happened;
     * @param isExternalStorage - 
     * false, if change had happened by calling put from this object, 
     * true, if it came by network from other connected data object.
     */
    addOnDataChangedListener(func: (networkData: SyncedNetworkData, isExternalChange: boolean) => void): void;

    /**
     * Adds data validator to the object
     */
    addVerifier(key: any, func: (key: any, newValue: any) => void): void;
}
