export function sayHello(name?: string | null) {
  if (name) {
    return `Hello ${name}`;
  } else {
    return "Hello";
  }
}
