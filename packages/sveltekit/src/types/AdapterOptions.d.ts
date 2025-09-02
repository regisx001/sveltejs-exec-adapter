type Target =
  | "linux-x64"
  | "macos-arm64"
  | "windows-x64"
  | "darwin-x64"
  | "darwin-arm64"
  | "linux-x64-musl"
  | "linux-arm64-musl";

export declare type AdapterOptions = {
  /** Output directory for the built binary (/dist by default) */
  out?: string;
  /** Name of the executable binary (default: "app") */
  binaryName?: string;
  /** Whether to embed static assets in the binary (default: true) */
  embedStatic?: boolean;
  /** Target platform for the binary. By default, the binary is built for the current platform. */
  target?: Target;
  /** Volume mount point for the binary (default no volume mount). Can be used for persistent storage, usually /data. */
  volume?: string;
  /** Custom port for the server (default: 3000) */
  port?: number;
};
