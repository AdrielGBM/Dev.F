async function getDogs(URL) {
  const res = await fetch(URL);
  const dogs = await res.json().map((dog) => {
    return {
      name: dog.name,
      breed: dog.breed,
      image: dog.image,
      color: dog.color,
      age: dog.age,
      favoriteToy: dog.favoriteToy,
      personality: dog.personality,
      bio: dog.bio,
    };
  });
  console.log(dogs);
}

export default getDogs;
