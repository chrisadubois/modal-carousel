export const fetchImages = async (count) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?count=${
        count > 30 ? 30 : count || 10
      }`,
      {
        method: "GET",
        headers: {
          Authorization: "Client-ID CUxBZE-NJpP55UdI92M_Yr2Y11aFBs9SacwL-GeuIXo"
        }
      }
    );
    return response.json();
  } catch (e) {
    // handle error
  }
};

export const extractImageSrc = (image) => {
  return image?.urls?.regular;
};
