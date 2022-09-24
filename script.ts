console.log("Hello World");

const buttons = document.querySelectorAll("a");

const test = async () => {
  console.log("test");
  const file = await fetch("/projects/example/example.json").then((res) =>
    res.body.getReader().read()
  );
  console.log(file);
};

test();

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Button clickeddddddddddd");
    console.log("monk");
    console.log("monk");
  });
});
