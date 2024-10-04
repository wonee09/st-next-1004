"use server";

export async function getServerAction() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store",
  });
  const data = await response.json();
  console.log(data);
  return { data };
}
