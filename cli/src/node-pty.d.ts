// @lydell/node-pty package.json does not export its types so for nodenext target we need to add them (very minimal version)
declare module '@lydell/node-pty' {
  interface IPty {
    readonly pid: number
    readonly onData: (listener: (data: string) => void) => { dispose(): void }
    readonly onExit: (listener: (e: { exitCode: number; signal?: number }) => void) => {
      dispose(): void
    }
    write(data: string): void
    kill(signal?: string): void
  }

  export function spawn(
    file: string,
    args: string[],
    options: {
      name?: string
      cols?: number
      rows?: number
      env?: Record<string, string | undefined>
    },
  ): IPty
}
