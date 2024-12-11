import { decryptCookie, showNotification } from "./functions";

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
      `https://headless.tebex.io/api/accounts/${process.env.NEXT_PUBLIC_TEBEX_PUBLIC}/baskets/${basketIdent}/auth?returnUrl=${returnUrl}`,
      {
        headers: { "Content-Type": "application/json" },
      }
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

export const fetchBasket = async function (basketIdent) {
  try {
    const response = await fetch(
      `https://headless.tebex.io/api/accounts/${process.env.NEXT_PUBLIC_TEBEX_PUBLIC}/baskets/${basketIdent}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const basket = await response.json();
    return basket.data;
  } catch (e) {
    throw new Error(`Error: ${e.message || "Unknown error"}`);
  }
};

export const addPackageToBasket = async function (scriptId) {
  try {
    const response = await fetch(
      `https://headless.tebex.io/api/baskets/${decryptCookie()}/packages`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          package_id: scriptId,
        }),
      }
    );
    const data = await response.json();

    showNotification("success", "Item successfully added");
    return data.data;
  } catch (e) {
    showNotification("error", "Failed to add the item");
    throw new Error(`Error: ${e.message || "Unknown error"}`);
  }
};

export const removePackageToBasket = async function (scriptId) {
  try {
    const response = await fetch(
      `https://headless.tebex.io/api/baskets/${decryptCookie()}/packages/remove`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          package_id: scriptId,
        }),
      }
    );
    const data = await response.json();
    showNotification("success", "Item successfully removed");
    return data.data;
  } catch (e) {
    showNotification("error", "Failed to remove the item");
    throw new Error(`Error: ${e.message || "Unknown error"}`);
  }
};

export const addCouponToBasket = async function (couponCode) {
  try {
    const response = await fetch(
      `https://headless.tebex.io/api/accounts/${
        process.env.NEXT_PUBLIC_TEBEX_PUBLIC
      }/baskets/${decryptCookie()}/coupons`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          coupon_code: couponCode,
        }),
      }
    );
    const data = await response.json();

    if (!data.success) {
      showNotification("error", "Failed to add Coupon");
      throw new Error(data.message);
    }
    showNotification("success", "Coupon added successfully");
    try {
      const basket = await fetchBasket(decryptCookie());
      return basket;
    } catch (e) {
      throw new Error(`Error: ${e.message || "Unknown error"}`);
    }
  } catch (e) {
    showNotification("error", "Failed to add Coupon");
    throw new Error(`Error: ${e.message || "Unknown error"}`);
  }
};

export const removeCouponFromBasket = async function (coupon) {
  try {
    const formData = new FormData();
    formData.append("coupon_code", coupon);

    const response = await fetch(
      `https://headless.tebex.io/api/accounts/${
        process.env.NEXT_PUBLIC_TEBEX_PUBLIC
      }/baskets/${decryptCookie()}/coupons/remove`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `Request failed with status ${response.status}`
      );
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || "Unknown API error");
    }

    try {
      const basket = await fetchBasket(decryptCookie());
      return basket;
    } catch (e) {
      throw new Error(`Error fetching basket: ${e.message || "Unknown error"}`);
    }
  } catch (e) {
    console.error(`Error in removeCouponFromBasket: ${e.message}`);
    throw e;
  }
};
