export const createBasket = async function () {
  try {
    const response = await fetch(
      `https://headless.tebex.io/api/accounts/${process.env.NEXT_PUBLIC_TEBEX_PUBLIC}/baskets`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data;
  } catch (e) {
    // Improved error handling, using e.message for the error message
    throw new Error(`Error: ${e.message || "Unknown error"}`);
  }
};

export const getAuthLink = async function (basketIdent, returnUrl) {
  try {
    const response = await fetch(
      `https://headless.tebex.io/api/accounts/${process.env.NEXT_PUBLIC_TEBEX_PUBLIC}/baskets/${basketIdent}/auth?returnUrl=${returnUrl}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data[0].url;
  } catch (e) {
    throw new Error(`Error: ${e.message || "Unknown error"}`);
  }
};
