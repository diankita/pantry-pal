export const fetchWithTimeout = async (url, options = {}, timeout = 10000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    if (!response.ok) {
      // TODO make backend return error as json
      // error: true,
      // message: 'User not found',
      const errorMsg = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorMsg}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error(`API call failed: ${error.message}`);
    // TODO anyway to display where the error comes from within the try? reponse.json() throws very vague error that doesnt say where it is
  }
};
