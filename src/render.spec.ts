import { renderString, renderStringInContext } from "./render";
import { MyCanvas } from "./util";

describe("renderString", () => {
  it("renders a string", () => {
    const result = renderString("Mom");
    expect(result).toEqual("Hello, Mom!");
  });
});

describe("renderStringInContext", () => {
  it("renders a string (Existing jest style)", () => {
    const canvas = new MyCanvas(200, 200);
    renderStringInContext("Awesome", canvas.context2d);
    expect(canvas.base64png).toEqual(
      "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABmJLR0QA/wD/AP+gvaeTAAADmklEQVR42u3aX8iedR3H8fdcJLo/JkxRJ2F6IBsVBGYdiGBhyQ6S0R8EEY86UeeBmdCJHkSK2okVLiVPFUGG2uqgqINoMaOVKGKBS0lbhCLpszXSph3sO7p92qoj2Z69XjCu7/Xjvu/req7n9+H7+z33CgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP/L6hPsfq+o3qne8KuD97qwOlB936OA//SD6uvVHzwKeK8LqudmSfhitXHGv119eaG+ZOrPVGdOfW51mkfISt6D3F09XT1Tbar+WT1bnV9dVL1UPVC9XO2pnqgerHZUn6u2Vf+Y959S3VRdX51a/X7hOmvns981NThRAvLh6lvVX6trq4/OfT85k33LdImnZp+yunqz2ly9Vt1YPVI9Vn2vuq66bOqbJhB/qX5cba2+Nl1q73ze5RPKj83ybk31weot04fjwfbq5mWb9RemPq36RfXzan31s+rx6iMTiF3VjyZMS9Mhtsxy7SvVhuqc6t7pMs35H6f+0nSlG6qd1U+rH871r5rXXF09VN0yHQne1w53V3X6svF901mapdd9U++ZCdxM2i9MfWp1ZbVqgrSp+u4EZXO1e+Hzqv48XWJb9c0Zu756eOqtc80vzvUurm6ba7KCnHKc39+h6hvV35eNb65enfq2hYDsrL4z9X3V7bNk2lF9fPYWO+e4bTrLpbM/ObKR31AdnCXUedXzC+N7pl4/7/lq9Ur1qQnq502pleUDx/n9fbr67CyP9s9xadn57/r3F4d3LLz3mVlOXTbjv5nxW6v7p6u8Vt05gdje4T8lXztLriYgP5n63Oq3C+P75t4enOe4Kd/RCMj7bPdM7HXzb+1CffbC+RnTDY8WpL1zPGuC9OsO/xl40aOzr/jkBGbXjO9d2I+cM6E4EpBfzus2znLtmlmWsYKsWmFhP1qQFs8/ND/zf+tIS9XfqrePsSc6VH1iwrK/uqfD37+8MMu2100rAVlJQTrzKGE6Y/YgS/8jTG90+P+GISAnnTUTlvULHWjxfP285uAE5s2F44E5vjI1AnLSWnuMAK2rflX9ySMCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBk8y/y9rBcCfTfYQAAAABJRU5ErkJggg=="
    );
  });

  it("renders to a file (Proposal of workflow for inner loop)", async () => {
    const canvas = new MyCanvas(200, 200);
    renderStringInContext("Awesome", canvas.context2d);
    await canvas.writeFile("testoutput.png");
    expect(true).toEqual(true);
  });

  it("renders for a snapshot (Proposal of jest style going forward)", async () => {
    const canvas = new MyCanvas(200, 200);
    renderStringInContext("Awesome", canvas.mockContext2d);
    expect(canvas.events).toMatchSnapshot();
  });
});
