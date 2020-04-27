import { createCanvas, Canvas, PngConfig } from "canvas";
import { writeFile as writeFileOriginal } from "fs";
import { promisify } from "util";
import { CanvasRenderingContext2DEvent } from "jest-canvas-mock";

const writeFile = promisify(writeFileOriginal);

export class MyCanvas {
  canvas: Canvas;
  mockCanvas: HTMLCanvasElement;

  constructor(width: number, height: number) {
    this.canvas = createCanvas(width, height);
    this.mockCanvas = document.createElement("canvas");
  }

  get context2d(): CanvasRenderingContext2D {
    return this.canvas.getContext("2d");
  }

  get mockContext2d(): CanvasRenderingContext2D {
    return this.mockCanvas.getContext("2d")!;
  }

  get events(): CanvasRenderingContext2DEvent[] {
    return (this.mockContext2d as any).__getEvents();
  }

  get buffer(): Buffer {
    const config: PngConfig = { compressionLevel: 9 };
    return this.canvas.toBuffer("image/png", config);
  }

  get base64png(): string {
    return this.buffer.toString("base64");
  }

  async writeFile(filename: string): Promise<void> {
    await writeFile(filename, this.buffer);
  }
}
