export const renderString = (str: string): string => {
  const hello = `Hello, ${str}!`;
  return hello;
};

export const renderStringInContext = (str: string, ctx: any): void => {
  ctx.rotate(0.1);
  ctx.fillText(str, 50, 100);
  const text = ctx.measureText("Awesome!");
  ctx.strokeStyle = "rgba(0,0,0,0.5)";
  ctx.beginPath();
  ctx.lineTo(50, 102);
  ctx.lineTo(50 + text.width, 102);
  ctx.stroke();
};
