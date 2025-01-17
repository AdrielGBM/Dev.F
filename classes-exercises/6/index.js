import axios from "axios";

const URL = "https://example-unicorns-api.vercel.app/unicornios";

// fetch(URL).then((res) => {
//   res.json().then((res) => {
//     console.log(res);
//   });
// });

// fetch(URL, {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ name: "SKY10", power: "FLY", img: "z" }),
// }).then((res) => {
//   console.log(res);
// });

async function postUnicorn() {
  const res = await axios.post(URL, { name: "HOLA", power: "CHAO", img: "NO" });
  console.log(res.data);
}

postUnicorn();

async function getUnicorns() {
  const res = await axios.get(URL);
  console.log(res.data);
}

getUnicorns();
