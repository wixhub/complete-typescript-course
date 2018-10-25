// Define shapes using a discriminated union pattern with a 'kind' property
interface Circle {
  kind: "circle"
  radius: number
}

interface Square {
  kind: "square"
  sideLength: number
}

type Shape = Circle | Square

// Custom type guard function to check if a shape is a Circle
function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle"
}

// Function to calculate area using type narrowing
function getArea(shape: Shape): number {
  if (isCircle(shape)) {
    // TypeScript knows 'shape' is a Circle here
    return Math.PI * shape.radius ** 2
  } else {
    // TypeScript knows 'shape' is a Square here
    return shape.sideLength ** 2
  }
}

const myCircle: Circle = { kind: "circle", radius: 10 }
console.log(getArea(myCircle))
