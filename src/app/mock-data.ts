const getData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "The Great Gatsby",
        authors: ["F. Scott Fitzgerald"],
        thumbnail: "src/app/images/great-gatsby.avif",
      });
    });
  });
};
